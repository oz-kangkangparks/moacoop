import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://moacoop.co.kr'),
  title: {
    template: '%s | 모아 청년 협동조합',
    default: '모아 청년 협동조합 - 전문가의 손길로 만드는 따뜻한 세상',
  },
  description: "청년 전문가들이 모여 만드는 사회적 가치. 집수리 봉사, 주거환경개선, 시설 유지보수, 그리고 IT/AI 솔루션 모아름까지. 함께하는 따뜻한 세상을 만들어갑니다.",
  keywords: ["모아청년협동조합", "김해 협동조합", "청년 단체", "사회공헌", "집수리 봉사", "주거환경개선", "시설 유지보수", "모아름", "IT 솔루션", "업무 자동화", "RPA", "AI 에이전트"],
  authors: [{ name: '모아 청년 협동조합' }],
  creator: '모아 청년 협동조합',
  publisher: '모아 청년 협동조합',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "모아 청년 협동조합",
    description: "전문가의 손길로 만드는 따뜻한 세상. 영리 사업과 사회 공헌 활동을 함께합니다.",
    url: 'https://moacoop.co.kr',
    siteName: '모아 청년 협동조합',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '모아 청년 협동조합 로고',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '모아 청년 협동조합',
    description: '전문가의 손길로 만드는 따뜻한 세상',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      'naver-site-verification': 'YOUR_NAVER_VERIFICATION_CODE', // TODO: 네이버 웹마스터 도구 소유권 확인 코드 입력 필요
    },
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // TODO: 구글 서치 콘솔 소유권 확인 코드 입력 필요
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
        <JsonLd />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
