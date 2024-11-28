// src/app/layout.tsx

import { Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZoškApp",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  );
}