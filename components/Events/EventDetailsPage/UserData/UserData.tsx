import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "react-rainbow-components";

type Props = {
  host: {
    name: string;
    email: string;
    profilePicture: string;
  };
};

const UserData = ({ host }: Props) => {
  return (
    <Flex
      className="flex-col  items-center p-1 h-64 justify-center  "
      boxShadow="0 8px 16px 0 rgba( 31, 38, 135, 0.37 )"
      bg="rgba( 221, 211, 211, 0.2 )"
      backdropFilter="blur( 13.5px )"
      borderRadius={"10px"}
    >
      <Flex className="rounded-full overflow-hidden " boxSize={"80px"}>
        <Image
          src={host?.profilePicture}
          alt="Hello Page"
          className="object-cover object-center"
        />
      </Flex>
      <Flex className="flex-col  w-56 mt-4 justify-center items-center ">
        <Text className="text-lg text-violet-400">{host.name}</Text>
        <Text className="text-gray-500 p-2 text-sm">{host.email}</Text>
      </Flex>
      <Flex className=" mt-1 inline-block bg-violet-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-500  mr-2 mb-2" />
      <Flex className="mt-4 inline-block bg-violet-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-500  mr-2 mb-2">
        Profile
      </Flex>
    </Flex>
  );
};

export default UserData;
