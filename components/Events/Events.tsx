import { Flex } from "@chakra-ui/react";
import React from "react";
import Card from "./EventCard/Card";
import { eventHubState } from "@/atoms/EventAtoms";
import { useRecoilValue } from "recoil";
import EventHeader from "./Header/EventHeader";

const Events = () => {
  const eventState = useRecoilValue(eventHubState);

  return (
    <Flex className="flex-col gap-4">
      <EventHeader />

      <Flex className="flex-wrap flex-row gap-5 w-full ">
        {eventState.events &&
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
    </Flex>
  );
};

export default Events;
