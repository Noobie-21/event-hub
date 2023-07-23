"use client";
import { Flex, FormLabelProps, Icon, Input, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import "./Date.css";

type DateProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Date = () => {
  const selectedDateRef = useRef<HTMLInputElement>(null);
  console.log("htmlInputref : ", selectedDateRef);

  return (
    <>
      <div className="relative text-sm "></div>
    </>
  );
};

export default Date;

// export default function Date() {
//   const [selected, setSelected] = React.useState<Date>();

//   let footer = <p>Please pick a day.</p>;
//   if (selected) {
//     footer = <p>You picked {format(selected, "PP")}.</p>;
//   }
//   return (

//   );
// }
