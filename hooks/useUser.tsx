"use client";
import { eventHubState } from "@/atoms/EventAtoms";
import { auth, firestore } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
export type userDataProps = {
  email: string;
  name: string;
  profilePicture: string;
  about?: string;
  userId?: string;
  bannerImage?: string;
};
const useUser = () => {
  const [user] = useAuthState(auth);

  const [eventState, setEventState] = useRecoilState(eventHubState);
  const [userLoadingState, setUserLoadingState] = useState(false);

  const getUser = async () => {
    setUserLoadingState(true);
    const userDocRef = doc(firestore, "Users", user?.uid!);
    const userCred = await getDoc(userDocRef);
    if (userCred.exists()) {
      setEventState((prev) => ({
        ...prev,
        userData: {
          name: userCred.data()?.name,
          email: userCred.data()?.email,
          profilePicture: userCred.data()?.profileImage,
          about: userCred.data()?.bio_data,
          bannerImage: userCred.data()?.banner_image,
          userId: userCred.data()?.userId,
        },
      }));
      return;
    }
    setUserLoadingState(false);
  };

  return { eventState, getUser, setEventState, userLoadingState };
};

export default useUser;
