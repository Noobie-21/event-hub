"use client";
import LandingPage from "@/components/LandingPage/LandingPage";
import { auth } from "@/firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import { Flex } from "@chakra-ui/react";

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
