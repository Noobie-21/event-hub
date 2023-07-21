"use client";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
// react-firebase-hooks/auth
import { authModalState } from "@/atoms/AuthModalAtom";
import { auth, firestore } from "@/firebase/firebaseConfig";
import { Input } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type Props = {};

export type intitialInputStateProps = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const Register = (props: Props) => {
  const intitialInputState = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const intitialFormErrorState = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const setAuthModalState = useSetRecoilState(authModalState);
  const [data, setData] = useState(
    intitialInputState as intitialInputStateProps
  );
  const [formError, setFormError] = useState(
    intitialInputState as intitialInputStateProps
  );
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  const [error, setError] = useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changeInInput = { [event.target.name]: event.target.value };
    setData((prev) => ({
      ...prev,
      ...changeInInput,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.password !== data.confirm_password) {
      setError(true);
      setFormError({
        ...intitialFormErrorState,
        password: "Password does not match",
        confirm_password: "Password does not match",
      });
    } else if (
      data.password.trim().length < 8 &&
      data.confirm_password.trim().length < 8
    ) {
      setError(true);
      setFormError({
        ...intitialFormErrorState,
        password: "Password must be greater than 8 character",
        confirm_password: "Password does not match",
      });
    }
    setFormError(intitialFormErrorState);
    const userIsFuck = await createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    if (userIsFuck) {
      const userDocRef = doc(firestore, "Users", userIsFuck.user?.uid);
      await setDoc(userDocRef, {
        name: data.name,
        email: userIsFuck.user.email,
        profileImage: !userIsFuck.user.photoURL
          ? "https://firebasestorage.googleapis.com/v0/b/redditclone-8a639.appspot.com/o/posts%2FAQYPnnAnsxgFSsoTQhSB%2Fimage?alt=media&token=0f4d3d5e-2797-4cf0-a9bd-0399e5ec73d1"
          : userIsFuck.user?.photoURL,
        userId: userIsFuck.user.uid,
      });
      setAuthModalState((prev) => ({
        ...prev,
        open: false,
      }));
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full px-4">
        <Stack spacing="4" className="w-full">
          <Stack spacing={4} className=" w-full">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                type="text"
                name="name"
                className="border-slate-400"
                onChange={onChange}
                required
              />
              {error && (
                <Text className="text-red-500 text-[14px] mt-1 mr-1">
                  {formError.name}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                onChange={onChange}
                className="border-slate-400"
                required
              />
              {error && (
                <Text className="text-red-500 text-[14px] mt-1 mr-1">
                  {formError.email}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type={"password"}
                className="border-slate-400"
                autoComplete="current-password"
                onChange={onChange}
                required
              />
              {error && (
                <Text className="text-red-500 text-[14px] mt-1 mr-1">
                  {formError.password}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
              <Input
                id="confirm-password"
                name="confirm_password"
                type={"password"}
                className="border-slate-400"
                autoComplete="current-password"
                onChange={onChange}
                required
              />
              {error && (
                <Text className="text-red-500 text-[14px] mt-1 mr-1">
                  {formError.confirm_password}
                </Text>
              )}
            </FormControl>
            <Button
              type="submit"
              isLoading={loading}
              className="bg-violet-400 hover:bg-violet-300 hover:text-black"
            >
              SIGN UP
            </Button>
          </Stack>
          <HStack justify="space-between" align={"center"}>
            <Text color="fg.muted" className="text-[14px] ">
              Already have an Account?{" "}
              <Button
                variant={"link"}
                onClick={() => setAuthModalState({ view: "login", open: true })}
                className="font-bold text-[13px]"
              >
                Log In
              </Button>
            </Text>
          </HStack>
        </Stack>
      </form>
    </>
  );
};

export default Register;
