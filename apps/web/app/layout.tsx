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

export const metadata: Metadata = {
  title: "B Automations - Enterprise AI Automation Solutions",
  description: "Transform your operations with intelligent automation. We architect enterprise-grade automation infrastructure leveraging AI, machine learning, and advanced workflow orchestration.",
  keywords: ["automation", "AI", "enterprise automation", "business process automation", "workflow automation", "AI integration", "machine learning"],
  authors: [{ name: "B Automations" }],
  openGraph: {
    title: "B Automations - Enterprise AI Automation Solutions",
    description: "Engineering intelligent systems that drive operational excellence and exponential growth",
    url: "https://bautomations.com",
    siteName: "B Automations",
    type: "website",
    images: [
      {
        url: "/og-image.png", // You can add this image later
        width: 1200,
        height: 630,
        alt: "B Automations - Enterprise Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B Automations - Enterprise AI Automation Solutions",
    description: "Engineering intelligent systems that drive operational excellence and exponential growth",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
