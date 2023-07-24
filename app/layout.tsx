"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { RecoilRoot } from "recoil";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Event Hub",
  description:
    "Event-hub is a place where you can host , attend and see other events you like, best place to meet other people tooo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </RecoilRoot>
      </body>
    </html>
  );
}
