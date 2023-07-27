import { Flex, Divider } from "@chakra-ui/react";
import React from "react";
import Banner from "./HomePageBannerSection/Banner";
import HomePageCategory from "./HomePageCategorySection/HomePageCatrgory";
import HomePageEventsSection from "./HomePageItemSection/HomePageEventsSection";
import RecommedationSection from "./HomePageRecommedSection/RecommedationSection";
import Card2 from "./HomePageRecommedSection/Card-2/Card2";

const HomePageSection = () => {
  return (
    <Flex className="w-full flex-col">
      <Banner />
      <Divider />
      <HomePageCategory />
      <Divider />
      <HomePageEventsSection />
      <Divider />
      <RecommedationSection />
    </Flex>
  );
};

export default HomePageSection;
