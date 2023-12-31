"use client";
import EventDetailsPage from "@/components/Events/EventDetailsPage/EventDetails";
import Loader from "@/components/Loader/Loader";
import { auth } from "@/firebase/firebaseConfig";
import useEventDetails from "@/hooks/useEventDetails";
import { Flex } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const EventDetails = (props: Props) => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, userLoading] = useAuthState(auth);
  const { getEventDetails, eventDetails, loadingData } = useEventDetails();
  // const eventState = useRecoilValue(eventHubState);
  // console.log(eventDetails.userId);

  useEffect(() => {
    setLoading(true);
    if (!user && !userLoading) {
      router.push("/");
    }

    setLoading(false);
  }, [user, userLoading]);
  useEffect(() => {
    setLoading(true);
    if (user && !userLoading) {
      getEventDetails(params.eventId as any);
      return;
    }
    setLoading(false);
  }, [user, userLoading]);
  return (
    <>
      {loading && loadingData ? (
        <Loader />
      ) : (
        <Flex>
          <EventDetailsPage
            category={eventDetails.category}
            cretedAt={eventDetails.cretedAt as any}
            desc={eventDetails.desc}
            eventImage={eventDetails.eventImage}
            eventName={eventDetails.eventName}
            host={eventDetails.host}
            location={eventDetails.location}
            timeStamp={eventDetails.timeStamp}
            title={eventDetails.title}
            loadingData={loading}
            amount={eventDetails.amount}
            userId={eventDetails.userId}
          />
        </Flex>
      )}
    </>
  );
};

export default EventDetails;
