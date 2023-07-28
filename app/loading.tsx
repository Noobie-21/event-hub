"use client";
import Loader from "@/components/Loader/Loader";
import { Flex } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex className="h-screen w-full ">
      <Loader />
    </Flex>
  );
};

export default Loading;
