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
  host: {};
  eventId: string;
};
export type EventFilterData = {
  eventName: string;
  title: string;
  desc: string;
  location: string;
  timeStamp: Timestamp;
  eventImage: string;
  category: string;
  creatorId: string;
  cretedAt: Timestamp;
  eventId: string;
  host: {
    name: string;
    password: string;
    profilePicture: string;
  };
  amount: number;
};

export type UserData = {
  name: string;
  email: string;
  profilePicture: string;
  about?: string;
  bannerImage?: string;
  userId?: string;
};

interface EventHubState {
  events: EventAtomState[];
  userData: UserData;
  filterData: EventFilterData[];
}

export const defaultEventHubState: EventHubState = {
  events: [],
  userData: {
    name: "",
    email: "",
    profilePicture: "",
    about: "",
    bannerImage: "",
    userId: "",
  },
  filterData: [],
};

export const eventHubState = atom<EventHubState>({
  key: "eventHubState",
  default: defaultEventHubState,
});
