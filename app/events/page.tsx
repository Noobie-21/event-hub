"use client";
import Events from "@/components/Events/Events";
import Loader from "@/components/Loader/Loader";
import { auth } from "@/firebase/firebaseConfig";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const EventsPage = () => {
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (!user && !userLoading) {
      router.push("/");
      return;
    }
    setLoading(false);
  }, [user, userLoading]);

  return (
    <Flex className=" h-full p-10 text-sm ">
      {loading ? <Loader /> : <Events />}
    </Flex>
  );
};

export default EventsPage;
