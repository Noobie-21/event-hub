"use client";
import Catogary from "@/components/Host/Category/Category";
import { Flex, Text, FormLabel } from "@chakra-ui/react";
import React, { useState } from "react";

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
const EventHeader = (props: Props) => {
  const [selected, setSelected] = useState(category[0]);

  console.log(selected, "Hello There");
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
