import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/HOC/Provider";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulazizdev.in"),
  
  title: {
    default: "Abdul Aziz | MERN Stack Developer",
    template: "%s | Abdul Aziz",
  },
  description:
    "Full Stack MERN Developer skilled in React.js, Next.js, Node.js, Express, and MongoDB. Built LMS, e-commerce platform, and scalable web applications.",
  keywords: [
    "Abdul Aziz",
    "MERN Developer",
    "React Developer",
    "Full Stack Developer India",
    "Node.js Developer",
  ],

  openGraph: {
    title: "Abdul Aziz | MERN Stack Developer",
    description:
      "Full Stack Developer building scalable web apps using React, Next.js, and Node.js.",
    url: "https://abdulazizdev.in",
    siteName: "Abdul Aziz Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdul Aziz | MERN Developer",
    description: "Full Stack Developer Portfolio",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer/>
          <ScrollToTop/>
        </Provider>
      </body>
    </html>
  );
}
