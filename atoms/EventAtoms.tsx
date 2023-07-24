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
};

interface EventHubState {
  events: EventAtomState[];
}

export const defaultEventHubState: EventHubState = {
  events: [],
};

export const eventHubState = atom<EventHubState>({
  key: "eventHubState",
  default: defaultEventHubState,
});
