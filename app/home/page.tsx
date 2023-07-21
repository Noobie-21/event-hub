"use client";
import Loader from "@/components/Loader/Loader";
import { auth } from "@/firebase/firebaseConfig";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    if (!user) {
      router.push("/");
      return;
    }
    setLoading(false);
  }, [user, userLoading]);
  return (
    <div className="text-[10rem] h-screen flex justify-center items-center">
      {loading ? <Loader /> : <Text> Hello There</Text>}
    </div>
  );
};

export default HomePage;
