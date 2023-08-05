"use client";
import { Flex, Divider, Text, useStatStyles } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "./RecemmdationCard/Card";
import { MenuDivider } from "react-rainbow-components";
import Categorys from "./HomePageDirectCategory/Categorys";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import useFilter from "@/hooks/useFilter";
import Link from "next/link";
import { category } from "@/atoms/EventAtoms";
type Props = {};

const color_scheme = [
  "bg-pink-400",
  "bg-orange-400",
  "bg-red-400",
  "bg-gray-400",
  "bg-yellow-400",
  "bg-green-400",
  "bg-violet-400",
  "bg-blue-400",
];

const HomePageCategory = (props: Props) => {
  const [user, userLoading] = useAuthState(auth);
  const { eventState, onFilterQuery, onFilter } = useFilter();

  useEffect(() => {
    if (user && !userLoading) {
      onFilterQuery();
    }
  }, [user, userLoading]);
  const Hello = (item: string) => {
    onFilter(item);
  };
  return (
    <Flex className=" h-fit w-full flex-col  items-center p-6  ">
      <Flex className=" p-4  flex-col   ">
        <Text className="text-[2rem] text-violet-600 mb-4 ml-2 underline w-[90%] text-center md:text-start">
          Recommendation meetups for you
        </Text>
        <Flex className="h-fit w-full flex-wrap p-4 gap-2 ">
          {eventState.filterData.map((item) => {
            return (
              <Link href={`/events/${item.eventId}`} key={item.eventId}>
                <Card
                  amount={item.amount}
                  image={item.eventImage}
                  timeStamp={item.timeStamp}
                  title={item.eventName}
                />
              </Link>
            );
          })}
        </Flex>
        <Flex className="p-4 flex-col">
          <Text className="text-[2rem] text-violet-600 mb-2 underline md:text-start text-center">
            Browse by category
          </Text>
          <Flex className="gap-8 items-center px-4 flex-wrap justify-center">
            {category.map((item, i) => {
              return (
                <Link
                  href={`/events?category=${item}`}
                  key={item}
                  onClick={() => Hello(item)}
                >
                  <Categorys category={item} bg={color_scheme[i]} />
                </Link>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePageCategory;
