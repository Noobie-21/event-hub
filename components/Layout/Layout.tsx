import React from "react";
import Navbar from "../Navbar/Navbar";
import ColorModeSwitcher from "@/chakras/ColorModeSwitcher";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: any) {
  return (
    <div>
      {/* <ColorModeSwitcher /> */}
      <Navbar />
      <ToastContainer position="bottom-right" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
