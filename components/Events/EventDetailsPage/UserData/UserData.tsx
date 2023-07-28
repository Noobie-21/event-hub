import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  host: {
    name: string;
    email: string;
    profilePicture: string;
  };
  userId: string;
};

const UserData = ({ host, userId }: Props) => {
  return (
    <Flex
      className="flex-col  items-center p-1 h-64 justify-center shadow-lg  "
      bg="rgba( 221, 211, 211, 0.2 )"
      backdropFilter="blur( 13.5px )"
      borderRadius={"10px"}
    >
      <Flex className="rounded-full overflow-hidden ">
        <Image
          src={host?.profilePicture}
          alt="Hello Page"
          className="object-cover  bg-center"
          boxSize={"80px"}
        />
      </Flex>
      <Flex className="flex-col  w-56 mt-4 justify-center items-center ">
        <Text className="text-lg text-violet-400">{host.name}</Text>
        <Text className="text-gray-500 p-2 text-sm">{host.email}</Text>
      </Flex>
      <Flex className=" mt-1 inline-block bg-violet-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-500  mr-2 mb-2" />
      <Link
        href={`/profile/${userId}`}
        className="cursor-pointer mt-4 inline-block bg-violet-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-500  mr-2 mb-2"
      >
        Profile
      </Link>
    </Flex>
  );
};

export default UserData;
