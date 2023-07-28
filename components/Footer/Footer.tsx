"use client";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex className="w-full h-60 bg-[#2a2a2c]  flex-col justify-center items-center gap-10  ">
      <Flex className=" gap-12 text-lg font-fontAwesome text-slate-400  ">
        <p>Home</p>
        <p>About</p>
        <p>Privacy Policy</p>
        <p>Github</p>
      </Flex>
      <Box className="font-fontAwesome gap-1 text-slate-200">
        <Text>
          {" "}
          <span className="text-purple-400">Event-Hub </span> @all copyrights
          reserved
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
