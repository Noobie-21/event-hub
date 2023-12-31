import { firestore, storage } from "@/firebase/firebaseConfig";
import { userDataProps } from "@/hooks/useUser";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Dispatch, SetStateAction } from "react";

type eventDataProps = {
  eventName: string;
  title: string;
  desc: string;
  timeStamp: string;
  location: string;
  amount: number;
};
type eventErrorProps = {
  eventName: string;
  title: string;
  desc: string;
  timeStamp: string;
  category: string;
  location: string;
  imageFile: string;
  amount: string;
};

interface submitHandlerArgs {
  eventData: eventDataProps;
  setFormError: Dispatch<SetStateAction<eventErrorProps>>;
  imageFile: File | undefined;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setFormErrorState: Dispatch<SetStateAction<boolean>>;
  setEventData: Dispatch<SetStateAction<eventDataProps>>;
  selectedCategory: string;
  userData: userDataProps;
  user: User | null | undefined;
  setEventState: (value: any) => void;
  push: (value: any) => void;
}

const submitHandler = async ({
  eventData,
  setFormError,
  imageFile,
  setEventData,
  setLoading,
  selectedCategory,
  setFormErrorState,
  userData,
  user,
  setEventState,
  push,
}: //   setEventState,
submitHandlerArgs) => {
  const { eventName, title, desc, timeStamp, location, amount } = eventData;
  const intitalFormErrorStates = {
    eventName: "",
    title: "",
    desc: "",
    timeStamp: "",
    category: "",
    location: "",
    imageFile: "",
    amount: "",
  };
  const intialStateData = {
    eventName: "",
    title: "",
    desc: "",
    timeStamp: "",
    location: "",
    amount: 0,
  };
  if (eventName.trim().length < 4) {
    setFormErrorState(true);
    setFormError({
      ...intitalFormErrorStates,
      eventName: "Event name must be greater than 4 character",
    });
  } else if (title.trim().length < 5) {
    setFormErrorState(true);
    setFormError({
      ...intitalFormErrorStates,
      title: "Title must be greater than 4 character",
    });
  } else if (location.trim().length < 4) {
    setFormErrorState(true);
    setFormError({
      ...intitalFormErrorStates,
      location: "Location must be greater than 4 character",
    });
  } else if (!amount) {
    setFormErrorState(true);
    setFormError({
      ...intitalFormErrorStates,
      amount: "Amount Cannot be empty, if you want to free enter 0",
    });
  } else if (desc.trim().length < 50) {
    setFormErrorState(true);
    setFormError({
      ...intitalFormErrorStates,
      desc: "Please! explain about the event in more Details",
    });
  } else if (timeStamp.trim().length < 1) {
    setFormErrorState(true);
    setFormError({
      ...intitalFormErrorStates,
      timeStamp: "Please! Add date for Event",
    });
  } else if (selectedCategory.length < 1) {
    setFormErrorState(true);
    setFormError({
      ...intitalFormErrorStates,
      category: "Please! Select the category",
    });
  } else if (imageFile!.length < 1) {
    setFormErrorState(true);
    setFormError({
      ...intitalFormErrorStates,
      imageFile: "Image Cannot be Empty",
    });
  } else {
    setFormErrorState(false);
    setFormError(intitalFormErrorStates);
    setLoading(true);
    try {
      const collectionRef = collection(firestore, "Events");
      const eventSnapshots = await addDoc(collectionRef, {
        eventName,
        title,
        location,
        desc,
        timeStamp,
        category: selectedCategory,
        eventImage: null,
        host: {
          email: userData?.email,
          name: userData?.name,
          profilePicture: userData?.profilePicture,
          bannerImage: userData?.bannerImage,
        },
        user: user?.uid,
        cretedAt: serverTimestamp(),
        amount: +amount,
      });

      const storageRef = ref(storage, `event-images/${eventSnapshots.id}`);
      const imageSnapShot = await uploadBytes(storageRef, imageFile as File);
      const eventImageURL = await getDownloadURL(imageSnapShot.ref);

      await updateDoc(doc(firestore, "Events", eventSnapshots.id), {
        eventImage: eventImageURL,
        eventId: eventSnapshots.id,
      });
      //  router.push('/events')
      push("/events?category=Events");
      setEventData(intialStateData);
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
  }
};

export default submitHandler;
