"use client";
import { authModalState } from "@/atoms/AuthModalAtom";
import { Box, Stack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
const AuthInput = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Stack spacing="4">
      <Box py={{ base: "0", sm: "8" }} px={{ base: "4", sm: "4" }}>
        {modalState.view === "login" && <Login />}
        {modalState.view === "register" && <Register />}
      </Box>
    </Stack>
  );
};

export default AuthInput;
