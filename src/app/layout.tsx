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
  title: "作品集 - 全栈开发工程师",
  description:
    "个人作品集，展示软件开发项目、技能和工作经历。",
  openGraph: {
    title: "作品集 - 全栈开发工程师",
    description:
      "个人作品集，展示软件开发项目、技能和工作经历。",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "作品集 - 全栈开发工程师",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "作品集 - 全栈开发工程师",
    description:
      "个人作品集，展示软件开发项目、技能和工作经历。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
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