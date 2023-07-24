"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth, firestore } from "@/firebase/firebaseConfig";
import submitHandler from "./utility/submitHandler";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { collection, doc, updateDoc } from "firebase/firestore";
type DashboardCard2Props = {
  name: string;
  email: string;
};
type PasswordProps = {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
};
const DashboardCard2 = ({ name, email }: DashboardCard2Props) => {
  const dropIn = {
    hidden: {
      x: -230,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.6,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
  };
  const [password, setPassword] = useState<PasswordProps>({
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [about, setAbout] = useState("");
  const [formError, setFormError] = useState<PasswordProps>({
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const [aboutError, setAboutError] = useState("");
  const [updatePassword, upadting, updatingError] = useUpdatePassword(auth);
  const [user] = useAuthState(auth);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = { [event.target.name]: event.target.value };
    setPassword((prev) => ({
      ...prev,
      ...value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitHandler({
      setLoading,
      password,
      setPassword,
      setError,
      setFormError,
      updatePassword,
      email,
      user,
      updatingError,
    });
  };

  const updateAbout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (about.trim().length < 1) {
      setError(true);
      setAboutError("Must not be empty");
    } else {
      setLoading(true);
      try {
        const userCollectionRef = doc(firestore, "Users", user?.uid!);
        await updateDoc(userCollectionRef, {
          bio_data: about,
        });
      } catch (error: any) {
        toast.error(error.message);
      }
      setLoading(false);
    }
  };

  // console.log(typeof updatingError, ": Password Upadting");

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      className="w-full h-full text-black  rounded-md  bg-slate-200 p-5 flex flex-col gap-3 font-srcs "
    >
      <div className="flex justify-between items-center">
        <Text className="text-xl text-[#000093]">My account</Text>
      </div>
      <div className="flex flex-col">
        <Text className="text-2xl text-[#000093]">Information</Text>
        <div className="px-3 grid grid-cols-2 gap-3 mb-3">
          <div className="col-span-1 flex flex-col text-xl">
            <FormLabel
              htmlFor="name"
              className="text-xl font-bold text-blue-400"
            >
              Name
            </FormLabel>
            <Input
              type="text"
              id="name"
              placeholder="Aman"
              className="border-none p-2 bg-slate-300  outline-none  rounded-sm text-sm "
              readOnly
              value={name}
            />
          </div>
          <div className="col-span-1 flex flex-col text-xl">
            <FormLabel
              htmlFor="email"
              className="text-xl font-bold text-blue-400"
            >
              Email
            </FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Aman"
              className="border-none p-2 text-black bg-slate-300 outline-none rounded-sm text-sm "
              value={email}
              readOnly
            />
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <Text className="text-xl text-[#000093] mb-2 underline">
          Update Password
        </Text>
        <div className="px-3 grid grid-cols-3 gap-3 mb-3">
          <div className="col-span-1 flex flex-col text-xl ">
            <FormLabel
              htmlFor="old-password"
              className="text-sm font-bold text-blue-300 relative"
            >
              Old Password <span className="text-red-400 text-sm ">*</span>
            </FormLabel>
            <Input
              type="password"
              id="old-password"
              name="old_password"
              placeholder="••••••••••"
              onChange={onChange}
              className="border-none p-2 text-sm bg-slate-50  outline-none  rounded-sm "
            />
            {error && (
              <Text className="text-red-500 text-sm">
                {formError.old_password}
              </Text>
            )}
          </div>
          <div className="col-span-1 flex flex-col text-xl">
            <FormLabel
              htmlFor="new-password"
              className="text-sm font-bold text-blue-400"
            >
              New Password <span className="text-red-400 text-sm ">*</span>
            </FormLabel>
            <Input
              type="password"
              id="new-password"
              name="new_password"
              placeholder="••••••••••"
              onChange={onChange}
              className="border-none p-2 text-sm text-black bg-slate-50 outline-none rounded-sm text-md "
              // value="amangupta@gmail.com"
              // readOnly
            />
            {error && (
              <Text className="text-red-500 text-sm">
                {formError.new_password}
              </Text>
            )}
          </div>
          <div className="col-span-1 flex flex-col text-xl">
            <FormLabel
              htmlFor="confirm-password"
              className="text-sm font-bold text-blue-400"
            >
              Confirm Password <span className="text-red-400 text-sm ">*</span>
            </FormLabel>
            <Input
              type="password"
              id="confirm-password"
              name="confirm_new_password"
              placeholder="••••••••••"
              onChange={onChange}
              className="border-none p-2 text-sm text-black bg-slate-50 outline-none rounded-sm text-md "
            />
            {error && (
              <Text className="text-red-500 text-sm">
                {formError.confirm_new_password}
              </Text>
            )}
          </div>
        </div>
        <Flex className="w-full justify-end ">
          <Button
            className="bg-violet-400 hover:bg-violet-300 "
            isLoading={upadting}
            type="submit"
          >
            Update Password
          </Button>
        </Flex>
      </form>
      <form onSubmit={updateAbout}>
        <div className=" flex flex-col text-xl ">
          <FormLabel
            htmlFor="about"
            className="text-sm font-bold text-blue-300 relative"
          >
            Update About Section
            <span className="text-slate-400 text-sm "> (Optional)</span>
          </FormLabel>
          <Textarea
            id="about"
            value={about}
            className="border-none p-2 text-sm bg-slate-50 text-black  outline-none  rounded-sm "
            rows={4}
            onChange={(event) => setAbout(event.target.value)}
            placeholder="Hey there i am aman you know me didn't you"
          />
          {error && <Text className="text-red-500 text-sm">{aboutError}</Text>}
        </div>
        <Flex className="w-full justify-end mt-2 ">
          <Button
            className="bg-violet-400 hover:bg-violet-300 "
            isLoading={loading}
            type="submit"
          >
            Update About
          </Button>
        </Flex>
      </form>
    </motion.div>
  );
};

export default DashboardCard2;
