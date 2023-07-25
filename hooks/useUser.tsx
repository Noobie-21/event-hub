"use client";
import { eventHubState } from "@/atoms/EventAtoms";
import { auth, firestore } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
export type userDataProps = {
  email: string;
  name: string;
  profilePicture: string;
  about?: string;
};
const useUser = () => {
  const [user] = useAuthState(auth);

  const [eventState, setEventState] = useRecoilState(eventHubState);

  const getUser = async () => {
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
        },
      }));
      return;
    }
  };

  return { eventState, getUser, setEventState };
};

export default useUser;
