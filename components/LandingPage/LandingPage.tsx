"use client";
import { Divider } from "@chakra-ui/react";
import BannerSection from "./LandingPageBannerSection/LandingPageBanner";
import LandingPageInfoSection from "./LandingPageInfoSection";
import InvitationPage from "./LandingPageInviteSection/LandingInvitation";
import TestonomialSection from "./LandingPageTestonomialSection/LnadingPageTestonomial";

const LandingPage = () => {
  return (
    <>
      <BannerSection />
      <LandingPageInfoSection />
      <Divider />
      <TestonomialSection />
      <InvitationPage />
      <Divider />
    </>
  );
};

export default LandingPage;
