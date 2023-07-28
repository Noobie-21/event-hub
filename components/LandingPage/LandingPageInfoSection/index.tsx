"use client";
import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type CardProps = {
  title: string;
  details?: string;
  image: string;
};

const LandingPageInfoSection = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: 0.1,
        },
      });
    }
  }, [inView]);

  return (
    <Flex className="w-full h-full p-2 mb-8  flex-col gap-14 text-3xl  text-slate-500 overflow-hidden ">
      <Flex className=" mt-16 px-12 ">
        <Text
          fontSize={{ base: "2.5rem", md: "4rem" }}
          className=" text-mono text-blue-400 font-bold underline p-1"
        >
          Why Event-Hub ?
        </Text>
      </Flex>
      <Flex className="w-full gap-3 justify-center items-center">
        <motion.div
          ref={ref}
          initial={{ y: 200, opacity: 0 }}
          animate={animation}
        >
          <Flex direction={{ base: "column", md: "row" }} className="gap-3">
            <Card image={"pngimage/meet.png"} title="Meet New people" />
            <Card image={"pngimage/learn.png"} title="learn new things" />
            <Card image={"pngimage/mmet.png"} title="Connect the world" />
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default LandingPageInfoSection;

const Card = ({ title, details, image }: CardProps) => {
  return (
    <Flex>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="max-w-sm border border-gray-400  shadow rounded-lg cursor-pointer hover:shadow-xl  "
      >
        <div className="flex  justify-center items-center gap-4 ">
          <Image
            src={image}
            width={190}
            height={190}
            className="rounded-t-lg"
            alt="Waving Girl"
          />
        </div>
        <Divider />
        <div className="p-2">
          <Text className="text-center uppercase font-normal text-fuchsia-400">
            {title}
          </Text>
          <Text className="mb-3 font-normal font-serif text-xl text-center w-full p-4  text-slate-500">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </Text>
        </div>
      </motion.div>
    </Flex>
  );
};
