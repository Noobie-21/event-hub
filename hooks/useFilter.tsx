"use client";
import { eventHubState } from "@/atoms/EventAtoms";
import { auth } from "@/firebase/firebaseConfig";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

type Props = {};

const useFilter = (props: Props) => {
  const [eventState, setEventState] = useRecoilState(eventHubState);
  const [user] = useAuthState(auth);

  const onFilter = async () => {};
  return { eventState, setEventState, onFilter };
};

export default useFilter;
