"use client";
import { category, eventHubState } from "@/atoms/EventAtoms";
import Catogary from "@/components/Host/Category/Category";
import { auth } from "@/firebase/firebaseConfig";
import useFilter from "@/hooks/useFilter";
import { Flex, FormLabel } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const EventHeader = () => {
  const params = useSearchParams();
  const router = useRouter();
  const searchValue = params.get("category");
  const [selected, setSelected] = useState("");
  const [categoryState, setCategoryState] = useRecoilState(eventHubState);
  const { onFilter, setEventState } = useFilter();
  const [user, userLoading] = useAuthState(auth);

  useEffect(() => {
    if (selected) router.replace(`/events?category=${selected}`);
  }, [selected]);

  useEffect(() => {
    if (user && !userLoading) {
      onFilter(searchValue!);
    } else {
      setEventState((prev) => ({
        ...prev,
        events: [],
      }));
    }
  }, [selected, user, userLoading, searchValue]);

  return (
    <Flex className="w-full h-full items-center ">
      <Flex className="w-64 h-28 p-4 flex-col">
        <FormLabel>Filter</FormLabel>
        <Catogary
          selected={searchValue}
          setSelected={setSelected}
          category={category}
          categoryState={categoryState.Category}
          setCategoryState={setCategoryState}
        />
      </Flex>
    </Flex>
  );
};

export default EventHeader;
