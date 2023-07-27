import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import DashboardBanner from "./DashboardBanner/DashboardBanner";
import DashboardCard1 from "./DashboardCard1/DsahboardCard1";
import DashboardCard2 from "./DashboardCard2/DashboardCard2";
import Loader from "../Loader/Loader";
import useUser from "@/hooks/useUser";

type DashboardProps = {
  name: string;
  email: string;
  profileImage: string;
  about?: string;
  bannerImage: string;
  loading: boolean;
};
const Dashboard = ({
  email,
  name,
  profileImage,
  about,
  bannerImage,
  loading,
}: DashboardProps) => {
  const { eventState } = useUser();
  // console.log(eventState.userData.bannerImage, "Hello koi hai");
  return (
    <Flex className=" w-full flex-col h-full">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Flex className="w-full">
            <DashboardBanner
              email={email}
              name={name}
              about={about!}
              bannerImage={bannerImage!}
            />
          </Flex>
          <div className="grid grid-rows-2 md:grid-cols-3 p-4 gap-4">
            <div className="col-row-1 md:col-span-2 -mt-20 hover:shadow-sm  transition-all ">
              <DashboardCard2 email={email} name={name} />
            </div>
            <div className="row-span-1 md:col-span-1  md:-mt-20 ">
              <DashboardCard1
                name={name}
                profileImage={profileImage}
                email={email}
                about={about!}
              />
            </div>
            <Divider />
            
          </div>
        </>
      )}
    </Flex>
  );
};

export default Dashboard;
