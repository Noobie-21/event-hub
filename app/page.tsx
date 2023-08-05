"use client";
import LandingPage from "@/components/LandingPage/LandingPage";
import Loader from "@/components/Loader/Loader";
import { auth } from "@/firebase/firebaseConfig";
import { Flex } from "@chakra-ui/react";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (user) {
      router.push("/home");
      return;
    }
    setLoading(false);
  }, [user, userLoading]);
  return (
    <div className="w-full h-full">
      {loading ? (
        <Flex className="h-screen w-full justify-center items-center">
          <Loader />
        </Flex>
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
