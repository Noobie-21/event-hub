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

const Profile = () => {
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState<boolean>(false);
  const { getUser, eventState, setEventState, userLoadingState } = useUser();
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    if (!user && !userLoading) {
      router.push("/");
    }
    setLoading(false);
  }, [user, userLoading]);

  useEffect(() => {
    if (user && !userLoading && !userLoadingState) {
      getUser();
      return;
    } else {
      setEventState((prev) => ({
        ...prev,
        userData: {
          email: "",
          name: "",
          profilePicture: "",
          about: "",
          bannerImage: "",
          userId: "",
        },
      }));
    }
  }, [user, userLoading, userLoadingState]);

  // console.log(eventState.userData.bannerImage, "Hello I am  Banner 😂😂");

  return (
    <Flex className="h-full w-full">
      {loading && !userLoading ? (
        <Flex className="h-screen w-full justify-center items-center">
          <Loader />
        </Flex>
      ) : (
        <Dashboard
          email={eventState.userData.email}
          name={eventState.userData.name}
          profileImage={eventState.userData.profilePicture}
          about={eventState.userData.about!}
          bannerImage={eventState.userData?.bannerImage!}
        />
      )}
    </Flex>
  );
};

export default Profile;
