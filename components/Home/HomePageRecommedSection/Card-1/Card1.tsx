"use client";
import { EventAtomState } from "@/atoms/EventAtoms";
import Card from "@/components/Events/EventCard/Card";
import { auth } from "@/firebase/firebaseConfig";
import useFilter from "@/hooks/useFilter";
import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {
  techEvent: EventAtomState[];
};
const Card1 = ({ techEvent }: Props) => {
  //   console.log(techEvent, "Hello");
  return (
    <Flex className="flex-col mb-3">
      <Text className="text-[2rem] mb-3">Events for "techy" people</Text>
      <Flex className="h-full w-full gap-2   ">
        {techEvent &&
          techEvent.map((event) => {
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

export default Card1;
