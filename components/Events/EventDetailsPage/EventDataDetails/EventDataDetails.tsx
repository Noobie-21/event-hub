import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import moment from "moment";
import React from "react";
import { BsDot } from "react-icons/bs";

type Props = {
  name: string;
  title: string;
  desc: string;
  createdAt: any;
  eventName: string;
  category: string;
  userId: string;
};

const EventDataDetails = ({
  createdAt,
  desc,
  eventName,
  name,
  title,
  category,
  userId,
}: Props) => {
  return (
    <Flex className="p-2 w-full flex-col  h-full shadow-lg" borderRadius={10}>
      <Flex className="flex-col w-full  gap-2 ">
        <Flex className="gap-1 mt-1 justify-start items-center text-sm border-b ">
          <Text className="ml-2 ">hosted by- {name} </Text>
          <BsDot className=" text-2xl text-violet-400" />
          <Text>
            Posted: {moment(new Date(createdAt?.seconds * 1000)).fromNow()}{" "}
          </Text>
        </Flex>
        <Flex className="p-1 flex-col gap-4">
          <Text className="text-[1.5rem] text-fuchsia-500">{title}</Text>
          <Flex className="gap-2">
            <Text className="text-gray-400">{eventName}</Text>
            <Flex className=" inline-block bg-gray-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-500  mr-2 mb-2">
              #{category}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="flex-col mt-3">
        <FormLabel className="text-[1.5rem] text-violet-400">
          About Event
        </FormLabel>
        <Text className="font-sans text-slate-500">{desc}</Text>
      </Flex>
    </Flex>
  );
};

export default EventDataDetails;
