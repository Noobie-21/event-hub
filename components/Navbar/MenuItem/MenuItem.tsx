"use client";
import { auth } from "@/firebase/firebaseConfig";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFillGrid1X2Fill, BsPencilSquare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuItems = () => {
  return (
    <div className="uppercase">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          variant="outline"
        />
        <MenuList>
          <Link href="/host" className="font-bold uppercase flex gap-2 ml-2">
            <BsPencilSquare size={20} className="mr-1" />
            Host Event
          </Link>

          <MenuItem icon={<BsFillGrid1X2Fill size={20} />}>
            <Text className="font-bold uppercase">All Events</Text>
          </MenuItem>
          <MenuItem icon={<CgProfile size={24} />}>
            <Text className="font-bold uppercase">Profile</Text>
          </MenuItem>
          <MenuItem
            icon={<AiOutlineLogout size={24} />}
            onClick={() => signOut(auth)}
          >
            <Text className=" font-bold text-red-500 uppercase">Logout</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default MenuItems;
