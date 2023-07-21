"use client";
import React from "react";
// import {Flex} from
import { Button, Flex, Image } from "@chakra-ui/react";
import ColorModeSwitcher from "@/chakras/ColorModeSwitcher";
import AuthModal from "../Modal/AuthModal/AuthModal";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/AuthModalAtom";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import MenuItems from "./MenuItem/MenuItem";
type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex
      width="100%"
      height="60px"
      className="bg-violet-300 items-center p-2 justify-between relative"
    >
      <Link href={"/"}>
        <Image src="images/logo.png" height={"50px"} />
      </Link>
      {user ? (
        // <Button
        //   variant={"outline"}
        //   className="mr-14 gap-2"
        //   onClick={() => signOut(auth)}
        // >
        //   Logout
        // </Button>
        <Flex className="mr-14 gap-2">
          <MenuItems />
        </Flex>
      ) : (
        <Flex className="mr-14 gap-2" color={{}}>
          <AuthModal />
          <Button
            variant="outline"
            onClick={() => setAuthModalState({ open: true, view: "login" })}
          >
            Login
          </Button>
          <Button
            variant={"outline"}
            onClick={() => setAuthModalState({ open: true, view: "register" })}
          >
            Sign Up
          </Button>
        </Flex>
      )}

      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
