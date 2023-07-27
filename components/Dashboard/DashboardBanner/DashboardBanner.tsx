"use client";
import { eventHubState } from "@/atoms/EventAtoms";
import { auth, firestore, storage } from "@/firebase/firebaseConfig";
import useSelectFile from "@/hooks/useSelectFile";
import useUser from "@/hooks/useUser";
import { Button, Flex, Skeleton, Text } from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcEditImage } from "react-icons/fc";
import { useSetRecoilState } from "recoil";

type DashBoardBannerProps = {
  name: string;
  email: string;
  about?: string;
  bannerImage: string;
};
const DashboardBanner = ({
  email,
  name,
  about,
  bannerImage,
}: DashBoardBannerProps) => {
  const bannerImageRef = useRef<HTMLInputElement>(null);
  const { selectedFile, onSelectedFile, setSelectedFile } = useSelectFile();
  const [imageLoading, setImageLoading] = useState(false);
  const [user] = useAuthState(auth);
  const setEventState = useSetRecoilState(eventHubState);
  const { eventState, userLoadingState } = useUser();
  const { userId } = eventState.userData;
  // console.log(eventState.userData.bannerImage, "hurray!!");

  const onEditImage = async () => {
    try {
      setImageLoading(true);
      if (selectedFile) {
        const imageRef = ref(storage, `Users/${user?.uid}/bannerImage`);
        await uploadString(imageRef, selectedFile, "data_url");
        const downloadURL = await getDownloadURL(imageRef);
        const bannerImageUpdateDoc = doc(firestore, "Users", user?.uid!);
        await updateDoc(bannerImageUpdateDoc, {
          banner_image: downloadURL,
        });
        setEventState((prev) => ({
          ...prev,
          userData: {
            ...prev.userData,
            bannerImage: downloadURL,
          },
        }));
      }

      setImageLoading(false);
      setSelectedFile("");
    } catch (error: any) {
      console.log(error.message, "SOmething wrong I guesss!!");
    }
  };
  // const [imageLoading , setImageLoading] = useState(true)
  console.log(userLoadingState, "Loading State");
  return (
    <>
      {imageLoading ? (
        <Skeleton className="w-full h-[90vh]" />
      ) : (
        <Flex className="w-full relative  ">
          {imageLoading || userLoadingState ? (
            <Skeleton className="w-full h-[90vh]" />
          ) : (
            <Flex
              className=" w-full h-[90vh] flex flex-col justify-center items-start px-12 bg-center"
              bgImage={bannerImage}
              bgSize={"cover"}
              bgGradient={`linear-gradient(to bottom , rgba(0,0,0,0) , rgba(0,0,0,0.75)) , url(${bannerImage})`}
              // onLoad={() => }
              display={imageLoading ? "none" : "flex"}
            >
              <Text className="font-srcs text-6xl text-slate-400 pb-2 mb-4 border-b border-slate-400">
                {name}
              </Text>
              <Text className=" text-xl text-[grey]  ">{email}</Text>
              {about && (
                <Text className="mt-2 text-slate-200 w-[30rem] font-[cursive]">
                  {about}
                </Text>
              )}
            </Flex>
          )}

          {userId === user?.uid && (
            <Flex className="absolute right-5 bottom-20 z-50  items-center cursor-pointer">
              {selectedFile ? (
                <Button
                  variant={"link"}
                  className="font-bold mr-2 hover:underline text-slate-200 "
                  isLoading={imageLoading}
                  onClick={onEditImage}
                >
                  Update Banner Image
                </Button>
              ) : (
                <Flex>
                  <input
                    type="file"
                    hidden
                    ref={bannerImageRef}
                    accept="image/jpg , image/jpeg"
                    onChange={onSelectedFile}
                  />
                  <Flex onClick={() => bannerImageRef.current?.click()}>
                    <FcEditImage size={32} />
                    <Text className="font-bold mr-2 hover:underline text-slate-200 ">
                      Edit Banner Image
                    </Text>
                  </Flex>
                </Flex>
              )}
            </Flex>
          )}
        </Flex>
      )}
    </>
  );
};

export default DashboardBanner;
