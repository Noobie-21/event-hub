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

  return (
    <>
      <div className="relative text-sm "></div>
    </>
  );
};

export default Date;
