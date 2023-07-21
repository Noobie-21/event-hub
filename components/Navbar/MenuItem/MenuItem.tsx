"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { BsPencilSquare, BsFillGrid1X2Fill } from "react-icons/bs";
import { BiGridSmall } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Text,
  Button,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { CgProfile } from "react-icons/cg";

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
          <MenuItem icon={<BsPencilSquare size={20} />}>
            <Text className="font-bold uppercase">Host Event</Text>
          </MenuItem>
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
