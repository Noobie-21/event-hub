import { Flex, Image, Skeleton } from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import Link from "next/link";
import React, { useState } from "react";
import moment from "moment";

type Props = {
  desc: string;
  category: string;
  eventImage: string;
  title: string;
  timeStamp?: Date;
  createdAt: Timestamp;
  id: string | undefined;
};

const Card = ({ category, createdAt, desc, eventImage, title, id }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300">
      <Flex>
        {loading && (
          <Skeleton height={"230px"} width={"100%"} borderRadius={4} />
        )}
        <Image
          className="w-full"
          src={eventImage}
          alt="Sunset in the mountains"
          display={loading ? "none" : "unset"}
          onLoad={() => setLoading(false)}
        />
      </Flex>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base text-left">
          {desc.slice(0, 150)}...
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          href={`/events/${id}`}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          Explore more -&gt;
        </Link>
        <div className="inline-block bg-violet-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-500  mr-2 mb-2">
          Posted : {moment(new Date(createdAt?.seconds * 1000)).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default Card;
