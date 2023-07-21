"use client";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/AuthModalAtom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig";

type Props = {};

const Login = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [fromError, setFormError] = useState("");
  const [signInWithEmailAndPassword, user, loading, userError] =
    useSignInWithEmailAndPassword(auth);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changeInInput = { [event.target.name]: event.target.value };
    setData((prev) => ({
      ...prev,
      ...changeInInput,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      signInWithEmailAndPassword(data.email, data.password);
    } catch (error: any) {
      setError(true);
      console.log(error.message);
    }
  };
  return (
    <Stack spacing="6">
      <form onSubmit={handleSubmit}>
        <Stack spacing="5">
          {error && (
            <Text className="text-center text-red-600 text-lg">
              {userError?.message}
            </Text>
          )}
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
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              onChange={onChange}
              type={"password"}
              className="border-slate-400"
              autoComplete="current-password"
              required
            />
          </FormControl>

          <Button
            isLoading={loading}
            type="submit"
            className="bg-violet-400 hover:bg-violet-300 hover:text-black"
          >
            LOG IN
          </Button>
        </Stack>
      </form>
      <HStack justify="space-between" align={"center"}>
        <Text color="fg.muted" className="text-[12px] ">
          Don't have an account?{" "}
          <Button
            variant={"link"}
            onClick={() => setAuthModalState({ view: "register", open: true })}
            className="font-bold text-[12px]"
          >
            Sign up
          </Button>
        </Text>
        <Button
          variant="text"
          className="text-[12px]"
          _hover={{ textDecoration: "underline" }}
        >
          Forgot password?
        </Button>
      </HStack>
    </Stack>
  );
};

export default Login;
