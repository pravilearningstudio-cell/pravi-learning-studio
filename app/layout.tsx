import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Pravi Learning Studio",
    template: "%s | Pravi Learning Studio",
  },

  description:
    "Pravi Learning Studio (P.L.S.) helps students turn 'Huhs' into 'Oohs' through meaningful learning experiences that build confidence, curiosity, and lasting understanding. Launching in 2027.",

  keywords: [
    "Pravi Learning Studio",
    "PLS",
    "Learning Studio",
    "Tuition Malaysia",
    "Education",
    "Student Learning",
    "Meaningful Learning",
    "Mathematics",
    "Science",
    "English",
    "Confidence",
  ],

  authors: [
    {
      name: "Pravi Learning Studio",
    },
  ],

  creator: "Pravi Learning Studio",

  applicationName: "Pravi Learning Studio",

  icons: {
    icon: "/logo/Learning Studio Logo Design.png",
    shortcut: "/logo/Learning Studio Logo Design.png",
    apple: "/logo/Learning Studio Logo Design.png",
  },

  openGraph: {
    title: "Pravi Learning Studio",
    description:
      "Turning 'Huhs' into 'Oohs'™ | Meaningful learning experiences launching in 2027.",

    url: "https://pravi-learning-studio.vercel.app",

    siteName: "Pravi Learning Studio",

    locale: "en_MY",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pravi Learning Studio",
    description:
      "Turning 'Huhs' into 'Oohs'™ | Launching in 2027.",
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
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-[#FAF9F6] text-[#2F3A3D]">
        {children}
      </body>
    </html>
  );
}