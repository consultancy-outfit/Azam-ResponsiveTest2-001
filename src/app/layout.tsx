import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { FRONTEND_SALE_SITE_BASE_URL } from "@/Config";
import EmotionCacheProvider from "@/components/emotion-cache";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  title: "Cosmonyx Insights",
  description: "Powering the Future of Digital Finance",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "apple-touch-icon.png",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "Cosmonyx Insights", 
    description: "Powering the Future of Digital Finance",
    url: `https://cosmonyx.vercel.app`,
    type: "website",
    images: [
      {
        url: `https://cosmonyx.vercel.app/og.png`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Cosmonyx Insights",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <EmotionCacheProvider>{children}</EmotionCacheProvider>
      </body>
    </html>
  );
}
