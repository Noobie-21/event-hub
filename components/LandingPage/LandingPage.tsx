"use client";
import { Container, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import BannerSection from "./LandingPageBannerSection/LandingPageBanner";
import LandingPageInfoSection from "./LandingPageInfoSection";
import TestonomialSection from "./LandingPageTestonomialSection/LnadingPageTestonomial";
import InvitationPage from "./LandingPageInviteSection/LandingInvitation";

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
