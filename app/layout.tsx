import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sevengnu.github.io";
const title = "Julian Grossman | Data, AI & Things I'm Learning";
const description = "I'm Julian, a Penn State Computational Data Science senior sharing the projects, questions, and technical rabbit holes I'm exploring.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/julian-grossman.jpg",
    shortcut: "/julian-grossman.jpg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    images: [{ url: "/og-personal.png", width: 1728, height: 910, alt: "Julian Grossman, Data, AI, Robotics, and What I'm Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-personal.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
