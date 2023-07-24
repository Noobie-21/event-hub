import { Flex } from "@chakra-ui/react";
import React from "react";
import DashboardBanner from "./DashboardBanner/DashboardBanner";
import DashboardCard1 from "./DashboardCard1/DsahboardCard1";
import DashboardCard2 from "./DashboardCard2/DashboardCard2";

type DashboardProps = {
  name: string;
  email: string;
  profileImage: string;
  about?: string;
};
const Dashboard = ({ email, name, profileImage, about }: DashboardProps) => {
  return (
    <Flex className=" w-full flex-col h-full">
      <Flex className="w-full">
        <DashboardBanner email={email} name={name} about={about!} />
      </Flex>
      <div className="grid grid-cols-3 p-4 gap-4">
        <div className="col-span-2 -mt-16 hover:shadow-sm  transition-all ">
          <DashboardCard2 email={email} name={name} />
        </div>
        <div className="col-span-1 -mt-16 ">
          <DashboardCard1
            name={name}
            profileImage={profileImage}
            email={email}
            about={about!}
          />
        </div>
      </div>
    </Flex>
  );
};

export default Dashboard;
