import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

import { dir } from "i18next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Gasvla",
  description: "Gasvla Web Site",
};

type Props = {
  children: React.ReactNode
  params: {
    lng: string
  }
};

export default function RootLayout({
  children, params: { lng }
}: Readonly<Props>) {
  return (
    <html lang="en" dir={dir(lng)}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
      >
        <div className="h-screen flex flex-col">
          {children}
        </div ></body>
    </html >
  );
}
