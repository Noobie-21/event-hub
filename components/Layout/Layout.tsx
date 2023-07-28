import React from "react";
import Navbar from "../Navbar/Navbar";
import ColorModeSwitcher from "@/chakras/ColorModeSwitcher";
import Footer from "../Footer/Footer";

export default function Layout({ children }: any) {
  return (
    <div>
      {/* <ColorModeSwitcher /> */}
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
