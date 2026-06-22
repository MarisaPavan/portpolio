import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shopify Freelancer & Full-Time Developer | Senior Shopify Plus Engineer",
  description: "Senior Shopify Plus & Full-Stack Developer available for freelance projects, contract roles, and full-time hiring. Specializing in custom Shopify themes, Remix/Node apps, Checkout Extensibility, SAP ERP integrations, and high-performance storefronts.",
  keywords: [
    "Shopify Freelance Developer",
    "Shopify Freelancer",
    "Hire Shopify Freelancer",
    "Shopify Full-Time Developer",
    "Shopify Contract Developer",
    "Shopify Plus Developer",
    "Headless Shopify Developer",
    "Shopify Custom Theme Developer",
    "Shopify App Developer",
    "Shopify Remix Developer",
    "Shopify ERP SAP Integration",
    "Checkout Extensibility Expert",
    "Shopify Speed Optimization",
    "Liquid Shopify Developer"
  ],
  authors: [{ name: "Venkata Marisa" }],
  alternates: {
    canonical: "https://portpolio-six-virid.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shopify Freelancer & Full-Time Developer | Senior Shopify Plus Engineer",
    description: "Senior Shopify Plus & Full-Stack Developer available for freelance projects, contract roles, and full-time hiring. Specializing in custom Shopify themes, Remix/Node apps, SAP ERP integrations, and headless storefronts.",
    url: "https://portpolio-six-virid.vercel.app/",
    siteName: "Venkata Marisa | Shopify Engineer Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Freelancer & Full-Time Developer | Senior Shopify Plus Engineer",
    description: "Senior Shopify Plus & Full-Stack Developer available for freelance projects, contract roles, and full-time hiring.",
    creator: "@venkatamarisa",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth bg-gray-950 overflow-x-hidden max-w-full dark`}
    >
      <body className="min-h-screen text-gray-100 flex flex-col font-sans bg-gray-950 selection:bg-indigo-500/20 selection:text-indigo-300 overflow-x-hidden max-w-full">
        {children}
      </body>
    </html>
  );
}
