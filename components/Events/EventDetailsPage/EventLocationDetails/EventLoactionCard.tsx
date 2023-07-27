import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import moment from "moment";

type Props = {
  location: string;
  timeStamp: string;
};

const EventLoactionCard = ({ location, timeStamp }: Props) => {
  // const comp = new Date().getDate() === moment(new Date(timeStamp)).date();
  // console.log(comp, "Date of Fucking bitch");
  return (
    <Flex
      className="flex-col  items-center p-1 h-52 justify-center shadow-md  "
      bg="rgba( 221, 211, 211, 0.2 )"
      backdropFilter="blur( 13.5px )"
      borderRadius={"10px"}
    >
      <Flex className="flex-col  w-56 mt-4 justify-center items-center ">
        <CiLocationOn size={32} />
        <Text className="text-lg text-violet-400 px-4 text-center">
          {location}
        </Text>
      </Flex>
      <Flex className="  w-56 mt-4 justify-center items-center ">
        <BsCalendarDate size={24} color="" />
        <Text className="text-lg text-gray-500 px-4 text-center">
          {timeStamp}
        </Text>
      </Flex>
    </Flex>
  );
};

export default EventLoactionCard;
