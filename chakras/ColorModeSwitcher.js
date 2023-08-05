"use client";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant={"solid"}
      // pos={"fixed"}
      // top={["3"]}
      // right={4}
      zIndex={1000}
      color="current"
      onClick={toggleColorMode}
      className="bg-violet-300"
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
