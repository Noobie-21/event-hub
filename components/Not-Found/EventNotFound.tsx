import Link from "next/link";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const EventNotFound = () => {
  return (
    <Flex className="shadow-sm">
      <Flex className="container flex items-center min-h-screen px-6 py-6 mx-auto ">
        <Flex className="flex flex-col items-center max-w-sm mx-auto text-center ">
          <Text className="p-3 text-sm font-medium text-black rounded-full bg-blue-300 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </Text>
          <Text className="mt-3 text-2xl font-semibold text-red-800  md:text-3xl">
            Events Not Found
          </Text>
          <Text className="mt-4 text-gray-500 ">
            The events category that are you looking for is empty , it seem like
            no one post any event in this category
          </Text>

          <Flex className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Link
              href={"/home"}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              Take me home
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventNotFound;
