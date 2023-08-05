"use client";
import useFilter from "@/hooks/useFilter";
import { Divider, Flex } from "@chakra-ui/react";
import Card1 from "./Card-1/Card1";
import Card2 from "./Card-2/Card2";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig";

type Props = {};

const RecommedationSection = (props: Props) => {
  const { onFilter, eventState, loading } = useFilter();
  const [user, userLoading] = useAuthState(auth);
  useEffect(() => {
    if (user && !loading) {
      onFilter("Events");
    }
  }, [user, userLoading]);
  const techEvent = eventState.events.filter(
    (item) => item.category === "tech"
  );
  const cultureEvent = eventState.events.filter(
    (item) => item.category === "dance"
  );
  // console.log(cultureEvent, techEvent);

  return (
    <Flex className="h-full w-full p-4 flex-col ">
      <Card1 techEvent={techEvent} />
      <Divider />
      <Card2 event={cultureEvent} />
    </Flex>
  );
};

export default RecommedationSection;
