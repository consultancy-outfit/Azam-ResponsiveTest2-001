import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { FRONTEND_SALE_SITE_BASE_URL } from "@/Config";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  title: "Meta Title",
  description:
    "Meta Description",
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
    title: "Meta Title",
    description:
      "Meta Description",
    url: `${FRONTEND_SALE_SITE_BASE_URL}`,
    type: "website",
    images: [
      {
        url: `${FRONTEND_SALE_SITE_BASE_URL}/og.png`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Railsr",
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
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  );
}