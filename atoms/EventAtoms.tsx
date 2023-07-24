import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type EventAtomState = {
  eventName: string;
  title: string;
  desc: string;
  location: string;
  timeStamp: Timestamp;
  eventImage: string;
  category: string;
  creatorId: string;
  cretedAt: Timestamp;
  bookMarks?: [];
  id?: string;
  host: {};
};

export type UserData = {
  name: string;
  email: string;
  profilePicture: string;
  about?: string;
};

interface EventHubState {
  events: EventAtomState[];
  userData: UserData;
}

export const defaultEventHubState: EventHubState = {
  events: [],
  userData: {
    name: "",
    email: "",
    profilePicture: "",
    about: "",
  },
};

export const eventHubState = atom<EventHubState>({
  key: "eventHubState",
  default: defaultEventHubState,
});
