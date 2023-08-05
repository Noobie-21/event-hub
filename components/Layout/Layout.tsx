"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import ColorModeSwitcher from "@/chakras/ColorModeSwitcher";
import Footer from "../Footer/Footer";
import { RecoilRoot } from "recoil";
import { Providers } from "@/app/providers";

export default function Layout({ children }: any) {
  return (
    <div>
      {/* <ColorModeSwitcher /> */}

      <RecoilRoot>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </RecoilRoot>
      <Footer />
    </div>
  );
}

{
  /* <RecoilRoot>
          <Providers>
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </Providers>
        </RecoilRoot> */
}
