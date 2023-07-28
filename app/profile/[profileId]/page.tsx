"use client";
import ProfileData from "@/components/Profile/Profile";
import { auth } from "@/firebase/firebaseConfig";
import useFilter from "@/hooks/useFilter";
import useUser from "@/hooks/useUser";
import { Flex } from "@chakra-ui/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const Profile = (props: Props) => {
  const { getUser, eventState } = useUser();
  const params = useParams();
  const [user, userLoading] = useAuthState(auth);
  const pathname = usePathname();
  const { usersEvents } = useFilter();
  //   console.log(eventState.userData);
  const router = useRouter();

  useEffect(() => {
    if (user && !userLoading) {
      getUser(params.profileId as string);
    }
  }, [params.profileId, user, userLoading]);

  useEffect(() => {
    if (!user && !userLoading) {
      router.push("/");
    }
  }, [user, userLoading]);
  //   const [user, userLoading] = useAuthState(auth);

  return (
    <Flex className="w-full h-full">
      <ProfileData userData={eventState.userData} />
    </Flex>
  );
};

export default Profile;
