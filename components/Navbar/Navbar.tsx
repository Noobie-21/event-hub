"use client";
// import {Flex} from
import { authModalState } from "@/atoms/AuthModalAtom";
import ColorModeSwitcher from "@/chakras/ColorModeSwitcher";
import { auth } from "@/firebase/firebaseConfig";
import { Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import AuthModal from "../Modal/AuthModal/AuthModal";
import MenuItems from "./MenuItem/MenuItem";
type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  return (
    <Flex
      width="100%"
      height="60px"
      className="bg-violet-300 items-center p-2 justify-between relative "
    >
      <Link href={`${user?.uid ? "/home" : "/"}`}>
        <Image src="pngimage/logo.png" height={"50px"} />
      </Link>
      {user ? (
        <Flex className=" gap-2">
          <MenuItems />
          <ColorModeSwitcher />
        </Flex>
      ) : (
        <Flex className="gap-2" color={{}}>
          <AuthModal />
          <Button
            variant="outline"
            className="text-slate-200 hover:bg-blue-400"
            onClick={() => setAuthModalState({ open: true, view: "login" })}
          >
            Login
          </Button>
          <Button
            variant={"outline"}
            className="text-slate-200 hover:bg-blue-400"
            onClick={() => setAuthModalState({ open: true, view: "register" })}
          >
            Sign Up
          </Button>
          <ColorModeSwitcher />
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
