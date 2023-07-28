import { auth } from "@/firebase/firebaseConfig";
import useFilter from "@/hooks/useFilter";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from "../Events/EventCard/Card";
import UserEvent from "../Layout/UserEvent";
import Loader from "../Loader/Loader";
import DashboardBanner from "./DashboardBanner/DashboardBanner";
import DashboardCard1 from "./DashboardCard1/DsahboardCard1";
import DashboardCard2 from "./DashboardCard2/DashboardCard2";

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
  const { eventState, usersEvents, pastEvents, upcomingEvents } = useFilter();
  const [user, userLoading] = useAuthState(auth);
  const [loadingState, setLoadingState] = useState(false);

  // console.log(pastEvents, "hello cutie");
  // const todayDate = moment(new Date()).toDate();
  // const upcomingEvents = eventState.currentUserEvent.filter(
  //   (event) => moment(new Date(event.timeStamp)).toDate() > todayDate
  // );
  // const pastEvents = eventState.currentUserEvent.filter(
  //   (event) => moment(new Date(event.timeStamp)).toDate() < todayDate
  // );

  useEffect(() => {
    setLoadingState(true);
    if (user && !userLoading) {
      usersEvents(user?.uid);
    }
    setLoadingState(false);
  }, [user, userLoading]);
  return (
    <Flex className=" w-full flex-col h-full">
      {!loadingState && loading ? (
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
          <div className="grid  md:grid-cols-3 p-4 gap-4">
            <div className="md:col-span-2 -mt-20 hover:shadow-sm  transition-all ">
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
          </div>
          <Flex className="">
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
                    No Past Events
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
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Dashboard;
