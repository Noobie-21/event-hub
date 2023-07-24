"use client";
import { EventAtomState, eventHubState } from "@/atoms/EventAtoms";
import Events from "@/components/Events/Events";
import Loader from "@/components/Loader/Loader";
import { auth, firestore } from "@/firebase/firebaseConfig";
import { Flex } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type Props = {};

const EventsPage = (props: Props) => {
  const setEventState = useSetRecoilState(eventHubState);
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const getEvents = async () => {
    const eventCollectionRef = collection(firestore, "Events");
    onSnapshot(eventCollectionRef, (data) => {
      const snapShot = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      console.log(snapShot, "Giys awww!");
      setEventState((prev) => ({
        ...prev,
        events: snapShot as EventAtomState[],
      }));
    });
  };

  useEffect(() => {
    setLoading(true);
    if (!user && !userLoading) {
      router.push("/");
      return;
    }
    setLoading(false);
  }, [user, userLoading]);

  useEffect(() => {
    if (user && !userLoading) {
      getEvents();
    } else {
      setEventState((prev) => ({
        ...prev,
        events: [],
      }));
    }
  }, [user, userLoading]);
  return (
    <Flex className=" h-full p-10 text-sm ">
      {loading ? (
        <Flex className="h-screen w-full justify-center items-center">
          <Loader />
        </Flex>
      ) : (
        <Events />
      )}
    </Flex>
  );
};

export default EventsPage;
