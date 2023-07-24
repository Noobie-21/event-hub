"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Image, Skeleton, SkeletonCircle } from "@chakra-ui/react";

type DashboardCard1Props = {
  email: string;
  name: string;
  profileImage: string;
};

const DashboardCard1 = ({ name, email, profileImage }: DashboardCard1Props) => {
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
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      className="w-full h-[60vh] bg-slate-200 hover:shadow-lg transition-all flex flex-col justify-start items-center p-4 rounded-md"
    >
      <div className="rounded-full  w-30 overflow-hidden">
        <Image
          src={profileImage}
          alt="Hello Page"
          width={100}
          height={100}
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-center items-center  gap-0 ">
        <h1 className="text-lg font-srcs text-violet-400 text-center">
          {name}
          <br /> <span className="text-sm text-slate-400">{email}</span>
        </h1>
        <p className="text-[gray] text-sm   text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          beatae doloremque nihil unde.
        </p>
      </div>
      <div className="p-2 w-full">
        <h1 className="text-2xl text-center mb-4 mt-5 text-slate-400 uppercase underline">
          Social Media{" "}
        </h1>
        <div className="flex justify-evenly text-[grey] transition-all">
          <button className="hover:text-violet-400">
            <AiOutlineGithub size={24} />
          </button>
          <button className="hover:text-violet-400">
            <AiOutlineLinkedin size={24} />
          </button>
          <button className="hover:text-violet-400">
            <AiOutlineInstagram size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard1;
