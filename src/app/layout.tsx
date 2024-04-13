import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoKino",
  description: "Точно не кинопоиск",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header/>
          <div className={'content'}>
              <div className={'wrapper'}>
                {children}
              </div>
          </div>
          <Footer/>
      </body>
    </html>
  );
}
