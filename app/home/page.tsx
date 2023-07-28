"use client";
import Loader from "@/components/Loader/Loader";
import { auth } from "@/firebase/firebaseConfig";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import HomePageSection from "@/components/Home/Home";

const HomePage = () => {
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    if (!user) {
      router.push("/");
    }
    setLoading(false);
  }, [user, userLoading]);
  return (
    <Flex className="">
      {loading ? (
        <Flex className="h-screen w-full ">
          <Loader />
        </Flex>
      ) : (
        <>
          <HomePageSection />
        </>
      )}
    </Flex>
  );
};

export default HomePage;
