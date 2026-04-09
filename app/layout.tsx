import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/HOC/Proider";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aziz Portfolio",
  description: "Portfolio website using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Provider>
          <ResponsiveNav/>
          {children}
          </Provider>
      </body>
    </html>
  );
}
