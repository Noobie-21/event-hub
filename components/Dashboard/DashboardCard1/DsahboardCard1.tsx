"use client";
import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

type DashboardCard1Props = {
  email: string;
  name: string;
  profileImage: string;
  about?: string;
  isVisible?: boolean;
};

const DashboardCard1 = ({
  name,
  email,
  profileImage,
  about,
  isVisible,
}: DashboardCard1Props) => {
  const dropIn = {
    hidden: {
      y: 230,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.6,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
  };
  const [loadingImage, setLoadingImage] = useState(true);
  return (
    <Flex
      className="w-full h-[60vh] "
      bg={`${isVisible ? "rgba( 221, 211, 211, 0.2 )" : "none"}`}
      backdropFilter={`${isVisible ? "blur( 13.5px )" : "none"}`}
      borderRadius={`${isVisible ? "10px" : "none"}`}
    >
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        className={`w-full h-[60vh] 
        ${
          isVisible ? "bg-transparent" : "bg-slate-200"
        } hover:shadow-lg transition-all flex flex-col justify-start items-center p-4 rounded-md z-50 relative`}
      >
        <Flex className="rounded-full  w-30 overflow-hidden">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={100}
            height={100}
            className="object-cover object-center"
          />
        </Flex>
        <Flex className="flex flex-col justify-center items-center  gap-0 ">
          <Text className="text-lg font-srcs text-violet-400 text-center">
            {name}
            <br /> <span className="text-sm text-slate-400">{email}</span>
          </Text>
          {about && (
            <Text
              className={` ${
                isVisible ? "text-slate-200" : "text-black"
              } mont text-sm font-[cursive]   text-center mt-1`}
            >
              {about}
            </Text>
          )}
        </Flex>
        <Flex className="p-2 w-full flex-col">
          <Text className="text-2xl text-center mb-4 mt-5 text-slate-400 uppercase underline">
            Social Media{" "}
          </Text>
          <Flex className="flex justify-evenly text-gray-600 transition-all">
            <button className="hover:text-violet-400">
              <AiOutlineGithub size={24} />
            </button>
            <button className="hover:text-violet-400">
              <AiOutlineLinkedin size={24} />
            </button>
            <button className="hover:text-violet-400">
              <AiOutlineInstagram size={24} />
            </button>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default DashboardCard1;
