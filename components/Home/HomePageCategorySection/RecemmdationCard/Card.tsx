"use client";
import { Box, Button, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";

type Props = {
  image: string;
  title: string;
  amount: number;
  timeStamp: string;
};

const Card = ({ amount, image, timeStamp, title }: Props) => {
  // console.log(moment(new Date(timeStamp)).format("DD MM"));
  const [loading, setLoading] = useState(true);
  return (
    <Flex className="  md:w-96 w-80 ">
      <Flex className="w-full  h-fit border rounded-lg roboto ">
        <Flex className="">
          {loading && (
            <Skeleton boxSize={"128px"} borderRadius={"8px 0px 0px 8px"} />
          )}
          <Image
            src={image}
            className="object-cover bg-center "
            boxSize={"128px"}
            borderRadius={"8px 0px 0px 8px"}
            display={loading ? "none" : "unset"}
            onLoad={() => setLoading(false)}
          />
          <Flex className="flex-col justify-center px-5">
            <Text className="text-violet-400">{title}</Text>
            <Box className="grid grid-cols-2 gap-4 mt-4 items-center">
              <Text className="span-col-1 text-lg text-slate-400 ">
                {moment(new Date(timeStamp)).format("DD-MM")}
              </Text>
              <Button
                variant={"unstyled"}
                className="bg-violet-500 text-slate-100 px-3"
              >
                {amount === 0 ? "Free" : `₹ ${amount}`}
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
