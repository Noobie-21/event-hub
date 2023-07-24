"use client";
import { Box, Button, Flex, Image, Skeleton } from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import EventDataDetails from "./EventDataDetails/EventDataDetails";
import EventLoactionCard from "./EventLocationDetails/EventLoactionCard";
import UserData from "./UserData/UserData";

type Props = {
  eventName: string;
  title: string;
  desc: string;
  location: string;
  timeStamp: string;
  eventImage: string;
  category: string;
  cretedAt?: Timestamp;
  host: {
    name: string;
    email: string;
    profilePicture: string;
  };
  id?: string;
};

const EventDetailsPage = ({
  category,
  cretedAt,
  desc,
  eventImage,
  eventName,
  host,
  location,
  timeStamp,
  title,
  id,
}: Props) => {
  console.log(eventName, "Event Name");
  const [imageLoading, setImageLoading] = useState(true);
  console.log(cretedAt, "Hello There senpai");
  return (
    <div className="grid grid-cols-5 w-full h-full  ">
      <Flex className="col-span-3  p-6 ">
        <Flex
          className="w-full flex-col  border border-slate-500"
          borderRadius={"6px 6px 0px 0px"}
        >
          <Flex className="h-1/2 w-full ">
            {imageLoading && (
              <Skeleton width={"full"} borderRadius={"6px 6px 0px 0px"} />
            )}
            <Image
              className="w-full"
              src={eventImage}
              borderRadius={"6px 6px 0px 0px"}
              alt="Sunset in the mountains"
              display={imageLoading ? "none" : "unset"}
              onLoad={() => setImageLoading(false)}
            />
          </Flex>
          <Flex className=" w-full h-full grid grid-cols-3 ">
            <Flex className="col-span-1  justify-center p-4 bg-violet-200 flex-col gap-4 ">
              <UserData host={host} />
              {/* hello there */}
              <EventLoactionCard location={location} timeStamp={timeStamp} />
            </Flex>
            <Box className="bg-violet-200 col-span-2 border-l p-4 ">
              <EventDataDetails
                createdAt={cretedAt}
                desc={desc}
                eventName={eventName}
                name={host?.name}
                title={title}
                category={category}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="col-span-2 p-8">
        <Button variant={"outline"}>Enroll Now</Button>
      </Flex>
    </div>
  );
};

export default EventDetailsPage;
