"use client";

import { EventAtomState } from "@/atoms/EventAtoms";
import { firestore } from "@/firebase/firebaseConfig";
import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useState } from "react";

type Props = {};

const useEventDetails = ({}: Props) => {
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
    },
    id: "",
    location: "",
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
      });
    } catch (error: any) {
      console.log(error.message, "Error Occured");
    }
    setLoadingData(false);
  };
  return { eventDetails, getEventDetails, loadingData };
};

export default useEventDetails;
