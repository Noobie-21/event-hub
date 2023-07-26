"use client";
import Catogary from "@/components/Host/Category/Category";
import { auth } from "@/firebase/firebaseConfig";
import useFilter from "@/hooks/useFilter";
import { Flex, Text, FormLabel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};
const category: string[] = [
  "Events",
  "dance",
  "music",
  "cultural",
  "tech",
  "academic",
  "public speaking",
  "debate",
];
const amount = ["Free", "Above 100", "Below 100"];
const EventHeader = () => {
  const [selected, setSelected] = useState(category[0]);
  const { onFilter, setEventState } = useFilter();
  const [user, userLoading] = useAuthState(auth);

  useEffect(() => {
    if (user && !userLoading) {
      onFilter(selected);
    } else {
      setEventState((prev) => ({
        ...prev,
        events: [],
      }));
    }
  }, [selected, user, userLoading]);
  // console.log(amountSelected, selected, "Hurray");

  return (
    <Flex className="w-full h-full items-center ">
      <Flex className="w-64 h-28 p-4 flex-col">
        <FormLabel>Filter</FormLabel>
        <Catogary
          selected={selected}
          setSelected={setSelected}
          category={category}
        />
      </Flex>
    </Flex>
  );
};

export default EventHeader;
