import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";

type Props = {
  location: string;
  timeStamp: string;
};

const EventLoactionCard = ({ location, timeStamp }: Props) => {
  return (
    <Flex
      className="flex-col  items-center p-1 h-52 justify-center  "
      boxShadow="0 8px 16px 0 rgba( 31, 38, 135, 0.37 )"
      bg="rgba( 221, 211, 211, 0.2 )"
      backdropFilter="blur( 13.5px )"
      borderRadius={"10px"}
    >
      <Flex className="flex-col  w-56 mt-4 justify-center items-center ">
        <CiLocationOn size={32} color="black" />
        <Text className="text-lg text-violet-400 px-4 text-center">
          {location}
        </Text>
      </Flex>
      <Flex className="  w-56 mt-4 justify-center items-center ">
        <BsCalendarDate size={24} color="red" />
        <Text className="text-lg text-gray-500 px-4 text-center">
          {timeStamp}
        </Text>
      </Flex>
    </Flex>
  );
};

export default EventLoactionCard;
