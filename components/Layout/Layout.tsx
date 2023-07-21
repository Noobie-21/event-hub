import React from "react";
import Navbar from "../Navbar/Navbar";
import ColorModeSwitcher from "@/chakras/ColorModeSwitcher";

export default function Layout({ children }: any) {
  return (
    <div>
      {/* <ColorModeSwitcher /> */}
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
