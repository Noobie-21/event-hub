"use client";
import { authModalState } from "@/atoms/AuthModalAtom";
import { Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";

const BannerSection = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Flex
        className="h-[80vh] justify-center items-center  w-full gap-5 "
        bgImage={"/image-2.jpg"}
        bgSize={"cover"}
        bgPosition={"bottom"}
        bgGradient={
          "linear-gradient(to bottom , rgba(0,0,0,0) , rgba(0,0,0,0.75)) , url('/image-2.jpg')"
        }
      >
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" flex justify-center items-center flex-col gap-3"
        >
          <Text
            fontSize={{ base: "5rem", md: "7rem" }}
            className=" uppercase  font-bold text-slate-200"
          >
            Event Hub{" "}
          </Text>
          <Text className="text-center text-xl uppercase text-slate-200 ">
            Events Which Make You{" "}
            <span className="text-3xl text-orange-400 font-bold font-mono">
              Happy
            </span>{" "}
            And{" "}
            <span className="text-3xl text-pink-400 font-bold font-mono">
              Energetic
            </span>
          </Text>
          <Text className=" font-bold uppercase text-slate-200">
            What are you waiting for, Join us and Enjoy Event
          </Text>

          <Button
            variant="outline"
            className="mt-4 text-slate-200 "
            onClick={() => setAuthModalState({ view: "login", open: true })}
          >
            Explore More
          </Button>
        </motion.div>
      </Flex>
    </>
  );
};

export default BannerSection;

//
