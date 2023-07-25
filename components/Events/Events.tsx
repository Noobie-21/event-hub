"use client";
import useFilter from "@/hooks/useFilter";
import { Flex } from "@chakra-ui/react";
import Loader from "../Loader/Loader";
import EventNotFound from "../Not-Found/EventNotFound";
import Card from "./EventCard/Card";
import EventHeader from "./Header/EventHeader";

const Events = () => {
  const { eventState, loading } = useFilter();

  // console.log(eventState.events, "Hello tHere");

  return (
    <Flex className="flex-col gap-4 w-full">
      <EventHeader />

      {loading ? (
        <Loader />
      ) : (
        <Flex className="flex-wrap flex-row gap-5 w-full">
          {eventState.events.length < 1 ? (
            <Flex className="justify-center items-center w-full ">
              <EventNotFound />
            </Flex>
          ) : (
            <>
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
                        key={event?.eventId}
                        id={event?.eventId}
                      />
                    </>
                  );
                })}
            </>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Events;
