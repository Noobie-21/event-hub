"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import SwiperCustomButton from "./CustomSwiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Flex, Image, Text } from "@chakra-ui/react";

interface Objects {
  title?: string;
  body: string;
  name: string;
  location: string;
  avatar: string;
}

const TestonomialSection = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
    }
  }, [inView]);

  const testimonialData: Objects[] = [
    {
      title: "Best place to find events.",
      body: "EventHub is by far the best place to find eventhubs near me. It is super easy to use has a very minimal user interface and checks all the boxes for me. I can't stop recommending it to others since it is such a nice platform thankyou all the folks at meethub for making this platform.",
      name: "Ann S. Kinchen",
      location: "San Francisco, USA",
      avatar: "avatar/avatar-1.jpg",
    },
    {
      title: "Talk about innovation!",
      body: "I live alone in a big city. Since I left my home town it was hard for me to find people to interact to and that's how I found out about eventhub when I saw how easy it was to host/join a meetup I immediately fell in love with Events it was the best thing I found on the internet",
      name: "Johnathan Holmes",
      location: "Sydney, Australia",
      avatar: "avatar/avatar-2.jpg",
    },
    {
      title: "Interacting made easy",
      body: "I live alone in a big city. Since I left my home town it was hard for me to find people to interact to and that's how I found out about meethub when I saw how easy it was to host/join a meetup I immediately fel in love with meethub it was the best thing I found on the internet ",
      name: "Fuji Tanaka",
      location: "Tokyo, Japan",
      avatar: "avatar/avatar-3.jpg",
    },
    ,
    {
      title: "Interacting made easy",
      body: "I live alone in a big city. Since I left my home town it was hard for me to find people to interact to and that's how I found out about meethub when I saw how easy it was to host/join a meetup I immediately fel in love with meethub it was the best thing I found on the internet ",
      name: "Fuji Tanaka",
      location: "Tokyo, Japan",
      avatar: "avatar/avatar-4.jpg",
    },
  ];

  return (
    <Flex className="w-full h-screen  items-center justify-center p-4   ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={animation}
        className="  rounded-lg lg:w-3/4 w-96  p-10 h-3/4 flex justify-center items-center "
      >
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          modules={[Pagination, Navigation, A11y]}
          className="mySwiper  md:w-1/2 lg:w-[70vw] h-[70vh]  lg:h-96  rounded-md gap-4 cursor-grab "
        >
          {testimonialData.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <Flex className="mb-4 mt-5 p-8 flex-col justify-center items-center ">
                  <FaQuoteLeft className="text-slate-500" />
                  <Text className="text-lg mb-2 text-indigo-500 md:text-3xl lg:text-3xl">
                    {review.title}
                  </Text>
                  <Text className="text-sm  md:text-lg lg:text-lg  lg:font-bold text-slate-500 relative text-center">
                    {review.body}
                  </Text>
                </Flex>
                <Flex className="flex gap-3 items-center w-full ">
                  <Flex>
                    <Image
                      src={review.avatar}
                      alt="EventHub"
                      className="w-20 lg:w-24  rounded-full object-cover object-center "
                    />
                  </Flex>
                  <Flex className="text-sm md:text-md  md:font-bold lg:text-md lg:font-bold  flex-col">
                    <Text className="">{review.name}</Text>
                    <Text>{review.location}</Text>
                  </Flex>
                </Flex>
              </SwiperSlide>
            );
          })}
          <SwiperCustomButton />
        </Swiper>
      </motion.div>
    </Flex>
  );
};

export default TestonomialSection;
