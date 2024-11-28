// src/app/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZoškApp",
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