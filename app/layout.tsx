import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modals from "./components/Modals/Modals";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb website",
  description: "Airbnb clone project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased ${font.className}`}
      >
        <ClientOnly>
          <Modals title="Hello World" isOpen />
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
