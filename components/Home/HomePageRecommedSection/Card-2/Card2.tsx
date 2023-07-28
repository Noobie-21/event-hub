"use client";
import { EventAtomState } from "@/atoms/EventAtoms";
import Card from "@/components/Events/EventCard/Card";
import { auth } from "@/firebase/firebaseConfig";
import useFilter from "@/hooks/useFilter";
import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {
  event: EventAtomState[];
};
const Card2 = ({ event }: Props) => {
  return (
    <Flex className="flex-col mt-4">
      <Text className="text-[2rem] mb-3">Cultural Events</Text>
      <Flex
        className="h-full w-full gap-2  md:flex-row flex-col  "
        align={{ base: "center", md: "unset" }}
      >
        {event &&
          event.map((event) => {
            return (
              <Card
                category={event.category}
                createdAt={event.cretedAt}
                desc={event.desc}
                eventImage={event.eventImage}
                id={event.eventId}
                title={event.title}
                key={event.eventId}
                // timeStamp={event.timeStamp}
              />
              // <h1>Hello</h1>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default Card2;
