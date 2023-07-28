import { Flex, Text, Divider } from "@chakra-ui/react";
import React from "react";

type Props = {};

const UserEvent = ({ children }: any) => {
  return (
    <Flex className="h-full w-full flex-col ">
      {/* Upcoming Events
       */}
      <Flex className="w-full md:h-screen  flex-col  p-6">
        <Text className="text-2xl mont mb-4">Upcoming Events</Text>
        <Flex className="w-full h-full gap-3 flex-wrap">{children[0]}</Flex>
      </Flex>
      <Divider />

      {/* Past Events  */}
      <Flex className="w-full md:h-screen flex-col p-6">
        <Text className="text-2xl mont mb-4">Past Events</Text>
        <Flex className="w-full h-full md:flex-row gap-3 flex-wrap">
          {children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserEvent;
