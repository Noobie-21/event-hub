import React from "react";
import "./loading.css";
import { Flex } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex className="justify-center items-center h-screen w-full">
      <div className="square-circle-5 "></div>
    </Flex>
  );
};

export default Loader;
