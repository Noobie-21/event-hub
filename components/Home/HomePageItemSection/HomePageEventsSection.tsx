import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
const HomePageEventsSection = () => {
  return (
    <motion.div>
      <Flex
        className="w-full h-80 bg-pink-600 text-slate-200 justify-center pl-4 flex-col mont"
        bgGradient={
          "linear-gradient(to left , rgba(0,0,0,0) , rgba(0,0,0,0.45))"
        }
      >
        <Text className="text-[3rem] ">Intersted in more events?</Text>
        <Text className="text-2xl">
          We have enough events for everyone. Find more!
        </Text>
        <Link
          href={"/events?category=Events"}
          className="w-32 text-center bg-violet-400 p-2 mt-2 rounded-sm"
        >
          View more
        </Link>
      </Flex>
    </motion.div>
  );
};

export default HomePageEventsSection;
