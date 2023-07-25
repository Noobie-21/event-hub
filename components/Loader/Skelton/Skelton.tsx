import React from "react";
import { Divider, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

const Skelton = () => {
  return (
    <Flex className="w-full" borderRadius={"6px 6px 0px 0px"}>
      <Skeleton width={"full"} height={"full"}>
        <Skeleton width={"430px"} height={"430px"} />
        <Divider />
        <Skeleton width={"430px"} height={"430px"} />
      </Skeleton>
    </Flex>
  );
};

export default Skelton;
