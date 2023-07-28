"use client";
import { Divider, Flex } from "@chakra-ui/react";
import BannerSection from "./LandingPageBannerSection/LandingPageBanner";
import LandingPageInfoSection from "./LandingPageInfoSection";
import InvitationPage from "./LandingPageInviteSection/LandingInvitation";
import TestonomialSection from "./LandingPageTestonomialSection/LnadingPageTestonomial";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig";
import Loader from "../Loader/Loader";

const LandingPage = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {loading ? (
        <Flex className="justify-center items-center h-screen w-full">
          <Loader />
        </Flex>
      ) : (
        <>
          <BannerSection />
          <LandingPageInfoSection />
          <Divider />
          <TestonomialSection />
          <InvitationPage />
          <Divider />
        </>
      )}
    </>
  );
};

export default LandingPage;
