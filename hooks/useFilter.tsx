"use client";
import {
  EventAtomState,
  EventFilterData,
  eventHubState,
} from "@/atoms/EventAtoms";
import { auth, firestore } from "@/firebase/firebaseConfig";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

type Props = {};

const useFilter = () => {
  const [eventState, setEventState] = useRecoilState(eventHubState);
  const [loading, setLoading] = useState<boolean>(false);
  const [user] = useAuthState(auth);

  const onFilter = async (category?: string) => {
    setLoading(true);
    if (category === "Events") {
      const eventCollectionRef = collection(firestore, "Events");
      onSnapshot(eventCollectionRef, (data) => {
        const snapShot = data.docs.map((doc) => {
          return { ...doc.data() };
        });

        setEventState((prev) => ({
          ...prev,
          events: snapShot as EventAtomState[],
        }));
      });
    } else {
      try {
        const categoryFilterQuery = query(
          collection(firestore, "Events"),
          where("category", "==", category),
          orderBy("cretedAt", "desc")
        );
        const filterData = await getDocs(categoryFilterQuery);
        const filteredData = filterData.docs.map((doc) => doc.data());
        console.log(filteredData, "Something weord though!");
        setEventState((prev) => ({
          ...prev,
          events: filteredData as EventAtomState[],
        }));
      } catch (error: any) {
        console.log(error.message, "Error Happpend");
      }
    }
    setLoading(false);
  };
  return { eventState, setEventState, onFilter, loading };
};

export default useFilter;
