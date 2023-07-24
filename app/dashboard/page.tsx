"use client";
import Dashboard from "@/components/Dashboard/Dashboard";
import Loader from "@/components/Loader/Loader";
import { auth } from "@/firebase/firebaseConfig";
import useUser from "@/hooks/useUser";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const Profile = (props: Props) => {
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState<boolean>(false);
  const { getUser, userData } = useUser();
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    if (!user && !userLoading) {
      router.push("/");
    }
    setLoading(false);
  }, [user, userLoading]);

  useEffect(() => {
    if (user && !userLoading) {
      getUser();
      return;
    }
  }, [user, userLoading]);

  console.log(userData, ": User Data");
  return (
    <Flex className="h-full w-full">
      {loading ? (
        <Flex className="h-screen w-full justify-center items-center">
          <Loader />
        </Flex>
      ) : (
        <Dashboard
          email={userData.email}
          name={userData.name}
          profileImage={userData.profilePicture}
        />
      )}
    </Flex>
  );
};

export default Profile;
