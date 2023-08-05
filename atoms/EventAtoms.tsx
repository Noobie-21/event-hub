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
  timeStamp: string;
  eventImage: string;
  category: string;
  creatorId: string;
  cretedAt: Timestamp;
  eventId: string;
  host: {
    name: string;
    password: string;
    profilePicture: string;
    bannerImage?: string;
  };
  amount: number;
  user: string;
};

export type UserData = {
  name: string;
  email: string;
  profilePicture: string;
  about?: string;
  bannerImage?: string;
  userId?: string;
};

export type recommendationFilterDataProps = {
  eventName: string;
  amount: number;
  timeStamp: string;
  eventId: string;
};

export const category = [
  "Events",
  "dance",
  "music",
  "cultural",
  "tech",
  "academic",
  "public speaking",
  "debate",
];

interface EventHubState {
  events: EventAtomState[];
  userData: UserData;
  filterData: EventFilterData[];
  Category: string;
  currentUserEvent: EventFilterData[];
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
  Category: "",
  currentUserEvent: [],
};

export const eventHubState = atom<EventHubState>({
  key: "eventHubState",
  default: defaultEventHubState,
});
