"use client";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "@/firebase/firebaseConfig";
import { Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "@/components/Host/DatePicker/Date.css";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import useSelectFile from "@/hooks/useSelectFile";
import submitHandler from "./utility/submitHandler";
import Catogary from "./Category/Category";
import useUser from "@/hooks/useUser";
import { useRecoilState, useSetRecoilState } from "recoil";
import { eventHubState } from "@/atoms/EventAtoms";
import { useRouter } from "next/navigation";

type EventDataProps = {
  eventName: string;
  title: string;
  desc: string;
  timeStamp: Timestamp;
  category: string;
  location: string;
};

const category = [
  "dance",
  "music",
  "cultural",
  "tech",
  "academic",
  "public speaking",
  "debate",
];

const HostEvent = () => {
  const intialStateData = {
    eventName: "",
    title: "",
    desc: "",
    timeStamp: "",
    location: "",
  };
  const [eventData, setEventData] = useState(intialStateData);
  const [user, userLoading] = useAuthState(auth);
  const { getUser, userData } = useUser();

  const [imageFile, setImageFile] = useState<File | string>("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const setEventState = useSetRecoilState(eventHubState);
  const [formError, setFormError] = useState({
    eventName: "",
    title: "",
    desc: "",
    timeStamp: "",
    category: "",
    imageFile: "",
    location: "",
  });
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const [errorState, setFormErrorState] = useState(false);
  const router = useRouter();
  const push = router.push;
  // console.log(typeof push, ": Router Type");
  const changeInputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const changeEventInput = { [event.target.name]: event.target.value };
    setEventData((prev) => {
      return {
        ...prev,
        ...changeEventInput,
      };
    });
  };

  const channgeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitHandler({
      eventData,
      setEventData,
      setFormError,
      imageFile,
      setLoading,
      setFormErrorState,
      selectedCategory,
      userData,
      user,
      setEventState,
      push,
    });
  };
  // console.log(date, "hello There");

  useEffect(() => {
    if (!user && !userLoading) return;
    getUser();
  }, [user, userLoading]);

  return (
    <div className=" p-4 rounded-lg shadow-lg  font-semibold h-fit text-sm">
      <form onSubmit={handleSubmit}>
        <FormControl className="relative">
          <Flex className=" w-[30rem]  flex-col gap-6 mb-6 ">
            <Text className="text-center text-3xl font-bold uppercase text-violet-300">
              Host an Event
            </Text>

            <Flex className="flex-col">
              <FormLabel htmlFor="event_name">Event Name</FormLabel>
              <Input
                placeholder="Dancing Event"
                onChange={changeInputHandler}
                name="eventName"
                type="text"
                id="event_name"
              />

              {errorState && (
                <Text className="text-[0.750rem] mt-1.2 text-red-600 ml-0.5">
                  {formError.eventName}
                </Text>
              )}
            </Flex>
            <Flex className="flex-col">
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                placeholder="Dance Event Where You can shine "
                onChange={changeInputHandler}
                name="title"
                type="text"
                id="title"
              />

              {errorState && (
                <Text className="text-[0.750rem] mt-1.2 text-red-600 ml-0.5">
                  {formError.title}
                </Text>
              )}
            </Flex>
            <Flex className="flex-col">
              <FormLabel htmlFor="location">Loaction</FormLabel>
              <Input
                placeholder="New York City"
                onChange={changeInputHandler}
                name="location"
                type="text"
                id="location"
              />

              {errorState && (
                <Text className="text-[0.750rem] mt-1.2 text-red-600 ml-0.5">
                  {formError.location}
                </Text>
              )}
            </Flex>
            <Flex className="flex-col">
              <FormLabel
                htmlFor="desc"
                className="block mb-2 text-sm font-medium"
              >
                Description
              </FormLabel>
              <Textarea
                name="desc"
                rows={4}
                cols={5}
                id="desc"
                placeholder="All over indian's most talented and awesome dancer will come here to enjoy the event and perform the dance, so many talks and many things you will see here  "
                onChange={changeInputHandler}
              />
              {errorState && (
                <Text className="text-[0.750rem] mt-1.2 text-red-600 ml-0.5">
                  {formError.desc}
                </Text>
              )}{" "}
            </Flex>

            <Flex className=" flex-col  ">
              <Flex className="justify-center items-center gap-3">
                <Flex className="flex-col gap-2 text-sm w-1/2">
                  <FormLabel htmlFor="datepicker">Select Date</FormLabel>
                  <Input
                    type="date"
                    id="datePicker"
                    name="timeStamp"
                    onChange={changeInputHandler}
                  />
                  {errorState && (
                    <Text className="text-[0.750rem] mt-1.2 text-red-600 ml-0.5">
                      {formError.timeStamp}
                    </Text>
                  )}
                </Flex>
                <Flex className="w-1/2 flex-col">
                  <FormLabel htmlFor="category">Category</FormLabel>
                  <Catogary
                    selected={selectedCategory}
                    setSelected={setSelectedCategory}
                  />
                  {errorState && (
                    <Text className="text-[0.750rem] mt-1.2 text-red-600 ml-0.5">
                      {formError.category}
                    </Text>
                  )}
                </Flex>
              </Flex>
            </Flex>
            <div className="flex flex-col text-sm">
              <label
                className=" mb-2 text-sm font-medium  "
                htmlFor="multiple_files"
              >
                Upload Images
              </label>

              <div
                className=" rounded-lg grid grid-cols-5 border cursor-pointer"
                onClick={() => selectedFileRef.current?.click()}
              >
                <Box
                  className="col-span-2 p-2 bg-violet-300 text-bold"
                  borderRadius="7px 0px 0px 7px"
                >
                  Upload Image
                </Box>
                <Text className="col-span-3 ml-2 flex items-center text-[0.9rem] ">
                  {imageFile ? imageFile?.name : "No File Choosen"}
                </Text>
              </div>

              <Input
                type="file"
                hidden
                accept="image/jpg , image/jpeg"
                ref={selectedFileRef}
                onChange={channgeImage}
              />
              {errorState && (
                <Text className="text-[0.750rem] mt-1.2 text-red-600 ml-0.5">
                  {formError.imageFile}
                </Text>
              )}
            </div>

            <Button
              variant={"solid"}
              isLoading={loading}
              className="bg-blue-500"
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </form>
    </div>
  );
};

export default HostEvent;
