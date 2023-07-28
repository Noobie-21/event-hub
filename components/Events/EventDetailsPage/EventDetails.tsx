"use client";
import { Box, Button, Flex, Image, Skeleton } from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import EventDataDetails from "./EventDataDetails/EventDataDetails";
import EventLoactionCard from "./EventLocationDetails/EventLoactionCard";
import UserData from "./UserData/UserData";
import Skelton from "@/components/Loader/Skelton/Skelton";

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
  loadingData: boolean;
  amount: number;
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
  loadingData,
  amount,
}: Props) => {
  const [imageLoading, setImageLoading] = useState(true);
  // console.log(loadingData);

  return (
    <Flex className="  ">
      <Flex className="grid md:grid-cols-5   ">
        <Flex className="md:col-span-4 row-span-1  p-6 ">
          <Flex
            className="w-full flex-col  border border-slate-500"
            borderRadius={"6px 6px 0px 0px"}
          >
            <Flex className="h-1/2 w-full ">
              {imageLoading && (
                <Skeleton width={"100%"} borderRadius={"6px 6px 0px 0px"} />
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
            <Flex className=" w-full h-full grid md:grid-cols-3  ">
              <Flex className="md:col-span-1 row-span-1 w-full h-fit justify-center p-4 bg-slate md:flex-col gap-4 ">
                <UserData host={host} />
                {/* hello there */}
                <EventLoactionCard location={location} timeStamp={timeStamp} />
              </Flex>
              <Box className="bg-slate md:col-span-2 row-span-1 md:border-l p-4 ">
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
        <Flex className="md:col-span-1 row-span-1 p-8 flex-col gap-4 items-center ">
          <Button
            variant={"unstyled"}
            className="bg-violet-400 text-slate-100 w-1/2 "
          >
            {amount === 0 ? "Free" : `₹ ${amount}`}
          </Button>
          <Button variant={"outline"}>Enroll Now</Button>
        </Flex>{" "}
      </Flex>
    </Flex>
  );
};

export default EventDetailsPage;
