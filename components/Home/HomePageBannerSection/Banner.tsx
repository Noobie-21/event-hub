import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Flex className="w-full h-[90vh] justify-between items-center p-6 bg-slate-300">
      <Flex className="w-full h-full items-center text-[2.5rem] text-violet-400 px-4">
        <Text className=" w-5/6 rems ">
          “<span className="text-[3rem] text-red-500">Luck</span> is a matter of
          preparation <span className="text-pink-400">meeting opportunity</span>
          .”{" "}
          <span className="text-sm text-red-500">- Lucius Annaeus Seneca</span>
        </Text>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        className=" h-full  shadow-lg  w-3/4  overflow-hidden "
        borderRadius={"40% 60% 64% 36% / 30% 34% 66% 70% "}
      >
        <Image src={"images/anime.jpg"} className="h-full" bgSize={"cover"} />
      </Flex>
    </Flex>
  );
};

export default Banner;
