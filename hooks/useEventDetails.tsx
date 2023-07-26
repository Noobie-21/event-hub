"use client";

import { EventAtomState, eventHubState } from "@/atoms/EventAtoms";
import { firestore } from "@/firebase/firebaseConfig";
import { Timestamp, doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const useEventDetails = () => {
  //   console.log(id);
  const intialState = {
    eventName: "",
    category: "",
    desc: "",
    eventImage: "",
    timeStamp: "",
    title: "",
    cretedAt: Timestamp,
    host: {
      name: "",
      email: "",
      profilePicture: "",
      about: "",
    },
    id: "",
    location: "",
    amount: 0,
  };
  const [eventDetails, setEventDetails] = useState(intialState);
  const [loadingData, setLoadingData] = useState(false);

  const getEventDetails = async (id: string) => {
    setLoadingData(true);
    try {
      const eventDocRef = doc(firestore, "Events", id);
      const data = await getDoc(eventDocRef);
      setEventDetails({
        eventName: data.data()?.eventName,
        category: data.data()?.category,
        desc: data.data()?.desc,
        eventImage: data.data()?.eventImage,
        timeStamp: data.data()?.timeStamp,
        title: data.data()?.title,
        cretedAt: data.data()?.cretedAt,
        host: data.data()?.host,
        id: data.id,
        location: data.data()?.location,
        amount: data.data()?.amount,
      });
    } catch (error: any) {
      console.log(error.message, "Error Occured");
    }
    setLoadingData(false);
  };
  return {
    eventDetails,
    getEventDetails,
    loadingData,
    setEventDetails,
  };
};

export default useEventDetails;
