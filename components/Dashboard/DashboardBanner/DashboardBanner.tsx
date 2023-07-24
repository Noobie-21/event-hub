"use client";
import { Flex, Skeleton, Text } from "@chakra-ui/react";
import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";
import React, { useState } from "react";

type DashBoardBannerProps = {
  name: string;
  email: string;
};
const DashboardBanner = ({ email, name }: DashBoardBannerProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <Flex className="w-full ">
      <Flex
        className=" w-full h-[80vh] flex flex-col justify-center items-start px-12"
        bgImage={"images/anime.jpg"}
        bgSize={"cover"}
        bgPosition={"bottom"}
        bgGradient={
          "linear-gradient(to bottom , rgba(0,0,0,0) , rgba(0,0,0,0.75)) , url('images/anime.jpg')"
        }
      >
        <Text className="font-srcs text-6xl text-slate-400 pb-2 mb-4 border-b border-slate-400">
          {name}
        </Text>
        <Text className=" text-xl text-[grey] w-[30rem] font-[cursive]">
          {email}
        </Text>
      </Flex>
    </Flex>
  );
};

export default DashboardBanner;
