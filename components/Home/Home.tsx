import { Divider, Flex } from "@chakra-ui/react";
import Banner from "./HomePageBannerSection/Banner";
import HomePageCategory from "./HomePageCategorySection/HomePageCatrgory";
import HomePageEventsSection from "./HomePageItemSection/HomePageEventsSection";
import RecommedationSection from "./HomePageRecommedSection/RecommedationSection";

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
