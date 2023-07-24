import { Flex } from "@chakra-ui/react";
import React from "react";
import Card from "./EventCard/Card";
import { eventHubState } from "@/atoms/EventAtoms";
import { useRecoilValue } from "recoil";

const Events = () => {
  const eventState = useRecoilValue(eventHubState);
  //   console.log(eventState.events.map((event) => event));

  return (
    <Flex className="flex-wrap flex-row gap-5 w-full ">
      {eventState &&
        eventState.events.map((event) => {
          return (
            <>
              <Card
                category={event?.category}
                createdAt={event?.cretedAt}
                desc={event?.desc}
                eventImage={event?.eventImage}
                title={event?.title}
                key={event?.id}
                id={event?.id}
              />
            </>
          );
        })}
    </Flex>
  );
};

export default Events;
