"use client";
import HostEvent from "@/components/Host/Host";
import Loader from "@/components/Loader/Loader";
import { auth } from "@/firebase/firebaseConfig";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const Host = (props: Props) => {
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState<Boolean>(false);
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
    <Flex
      className={`text-[10rem] ${
        loading ? "h-screen" : "h-full"
      } justify-center items-center p-8`}
    >
      {loading ? (
        <Flex className="h-screen w-full ">
          <Loader />
        </Flex>
      ) : (
        <HostEvent />
      )}
    </Flex>
  );
};

export default Host;
