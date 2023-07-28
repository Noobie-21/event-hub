"use client";
import {
  EventAtomState,
  EventFilterData,
  eventHubState,
  recommendationFilterDataProps,
} from "@/atoms/EventAtoms";
import { auth, firestore } from "@/firebase/firebaseConfig";
import {
  QueryLimitConstraint,
  WhereFilterOp,
  collection,
  getDocs,
  limit,
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
  // console.log(eventState.Category);

  const onFilter = async (
    category?: string,
    limitValue?: QueryLimitConstraint
  ) => {
    setLoading(true);
    if (category === "Events") {
      const eventCollectionRef = collection(firestore, "Events");

      const eventQuery = query(
        eventCollectionRef,
        where("cretedAt", "!=", ""),
        orderBy("cretedAt", "desc")
      );
      const data = await getDocs(eventQuery);

      const snapshotData = data.docs.map((doc) => doc.data());
      setEventState((prev) => ({
        ...prev,
        events: snapshotData as EventAtomState[],
        // Category: "dance",
      }));
    } else {
      try {
        const categoryFilterQuery = query(
          collection(firestore, "Events"),
          where("category", "==", category),
          orderBy("cretedAt", "desc")
        );
        const filterData = await getDocs(categoryFilterQuery);
        const filteredData = filterData.docs.map((doc) => doc.data());
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

  const onFilterQuery = async (
    orderValue?: string,
    limitValue?: number,
    equalValue?: WhereFilterOp,
    optStr?: string
  ) => {
    console.log(orderValue, limitValue, equalValue, optStr);
    setLoading(true);
    try {
      const queryDocRef = collection(firestore, "Events");
      const dataQuery = query(
        queryDocRef,
        where("cretedAt", "!=", ""),
        orderBy("cretedAt", "desc"),
        limit(6)
      );
      const data = await getDocs(dataQuery);
      const queryData = data.docs.map((doc) => doc.data());

      setEventState((prev) => ({
        ...prev,
        filterData: queryData as EventFilterData[],
      }));
    } catch (error: any) {
      console.log(error.message, "Error happen while Filtering");
    }
    setLoading(false);
  };

  const usersEvents = async (user?: string) => {
    setLoading(true);
    try {
      const queryDocRef = collection(firestore, "Events");
      const dataQuery = query(
        queryDocRef,
        where("user", "==", user),
        orderBy("cretedAt", "desc")
      );
      const data = await getDocs(dataQuery);
      const queryData = data.docs.map((doc) => doc.data());

      setEventState((prev) => ({
        ...prev,
        currentUserEvent: queryData as EventFilterData[],
      }));
    } catch (error: any) {
      console.log(error.message, "Error happen while Filtering");
    }
    setLoading(false);
  };

  return {
    eventState,
    setEventState,
    onFilter,
    loading,
    onFilterQuery,
    usersEvents,
  };
};

export default useFilter;
