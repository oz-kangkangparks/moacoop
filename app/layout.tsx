import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "모아 청년 협동조합",
  description: "따뜻한 전문가, 모아 청년 협동조합입니다. 영리 사업과 사회 공헌 활동을 함께합니다.",
  openGraph: {
    title: "모아 청년 협동조합",
    description: "전문가의 손길로 만드는 따뜻한 세상",
    images: ["/images/social/social_logo.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "모아 청년 협동조합",
    description: "전문가의 손길로 만드는 따뜻한 세상",
    images: ["/images/social/social_logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
