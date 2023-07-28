"use client";
import { UserData } from "@/atoms/EventAtoms";
import { auth } from "@/firebase/firebaseConfig";
import useFilter from "@/hooks/useFilter";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner } from "react-rainbow-components";
import DashboardBanner from "../Dashboard/DashboardBanner/DashboardBanner";
import DashboardCard1 from "../Dashboard/DashboardCard1/DsahboardCard1";
import Card from "../Events/EventCard/Card";
import UserEvent from "../Layout/UserEvent";

type Props = {
  userData: UserData;
};

const ProfileData = ({ userData }: Props) => {
  const { eventState, usersEvents, pastEvents, upcomingEvents, loading } =
    useFilter();
  const [user, userLoading] = useAuthState(auth);

  useEffect(() => {
    if (user && !userLoading) {
      usersEvents(userData.userId);
    }
  }, [user, userLoading, userData.userId]);

  //
  //   console.log(pastEvents, upcomingEvents);

  return (
    <Flex className="h-full w-full flex-col relative">
      <DashboardBanner
        bannerImage={userData.bannerImage}
        email={userData.email}
        name={userData.name}
        about={userData.about}
      />
      <Flex className=" h-full w-96    z-50 p-4 absolute -bottom-40 right-0">
        <DashboardCard1
          email={userData.email}
          name={userData.name}
          profileImage={userData.profilePicture}
          about={userData.about}
          isVisible={true}
        />
      </Flex>
      <Flex>
        {/* <UserEvent></UserEvent> */}
        {loading ? (
          <Flex className="justify-center items-center">
            <Spinner size="x-large" />
          </Flex>
        ) : (
          <UserEvent>
            <>
              {upcomingEvents.length < 1 ? (
                <Flex className="text-[3rem] text-center justify-center items-center w-full h-full">
                  No Upcoming Events
                </Flex>
              ) : (
                upcomingEvents.map((item) => {
                  return (
                    <Card
                      category={item.category}
                      createdAt={item.cretedAt}
                      desc={item.desc}
                      eventImage={item.eventImage}
                      id={item.eventId}
                      title={item.title}
                      key={item.eventId}
                      timeStamp={item.timeStamp}
                    />
                  );
                })
              )}
            </>
            <>
              {pastEvents.length < 1 ? (
                <Flex className="text-[3rem] text-center justify-center items-center w-full h-full">
                  No Pasts Events
                </Flex>
              ) : (
                pastEvents.map((item) => {
                  return (
                    <Card
                      category={item.category}
                      createdAt={item.cretedAt}
                      desc={item.desc}
                      eventImage={item.eventImage}
                      id={item.eventId}
                      title={item.title}
                      key={item.eventId}
                      timeStamp={item.timeStamp}
                    />
                  );
                })
              )}
            </>
          </UserEvent>
        )}
      </Flex>
    </Flex>
  );
};

export default ProfileData;
