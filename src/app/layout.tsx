import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/background";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MainBox from "@/components/boxes/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ВГТРК",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="ru">
      <body className={inter.className} suppressHydrationWarning={true}>
      <Background/>
      <Header/>
      <MainBox>
      {children}
      </MainBox>
      <MainBox>
      <Footer/>
      </MainBox>
      </body>
    </html>
  );
}
