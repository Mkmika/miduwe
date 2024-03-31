import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { naluka } from "@/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miduwe",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden md:flex flex-col items-center justify-center bg-default h-screen w-screen gap-8">
          <h2 className={`text-5xl ${naluka.className}`}>Coming soon....</h2>
          <h2 className={`text-5xl ${naluka.className}`}>Switch to mobile to view website</h2>
        </div>
        <main className="md:hidden">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
