import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ui/ThemeProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Developer & Designer",
  description:
    "Personal portfolio showcasing projects, skills, and experience in software development.",
  openGraph: {
    title: "Portfolio - Developer & Designer",
    description:
      "Personal portfolio showcasing projects, skills, and experience in software development.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio - Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Developer & Designer",
    description:
      "Personal portfolio showcasing projects, skills, and experience in software development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ScrollProgressBar />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}