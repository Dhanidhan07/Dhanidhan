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
  metadataBase: new URL("https://dhanidhan.dhanilatif.workers.dev"),

  title: {
    default: "DhaniDhan",
    template: "%s | DhaniDhan",
  },

  description:
    "Catatan pribadi tentang pengalaman, proyek, hal yang dipelajari, dan apa pun yang layak disimpan.",

  openGraph: {
    title: "DhaniDhan",
    description:
      "Catatan pribadi tentang pengalaman, proyek, hal yang dipelajari, dan apa pun yang layak disimpan.",
    url: "https://dhanidhan.dhanilatif.workers.dev",
    siteName: "DhaniDhan",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DhaniDhan",
    description:
      "Catatan pribadi tentang pengalaman, proyek, hal yang dipelajari, dan apa pun yang layak disimpan.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
