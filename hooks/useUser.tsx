"use client";
import { auth, firestore } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
export type userDataProps = {
  email: string;
  name: string;
  profilePicture: string;
  about?: string;
};
const useUser = () => {
  const [userData, setUserData] = useState<userDataProps>({
    email: "",
    name: "",
    profilePicture: "",
    about: "",
  });
  const [user] = useAuthState(auth);

  const getUser = async () => {
    const userDocRef = doc(firestore, "Users", user?.uid!);
    const userCred = await getDoc(userDocRef);
    if (userCred.exists()) {
      setUserData({
        name: userCred.data()?.name,
        email: userCred.data()?.email,
        profilePicture: userCred.data()?.profileImage,
        about: userCred.data()?.bio_data,
      });
      return;
    }
  };

  return { userData, getUser };
};

export default useUser;
