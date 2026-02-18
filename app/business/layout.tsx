import { Metadata } from "next";

export const metadata: Metadata = {
    title: "주요 사업",
    description: "IT 솔루션부터 시설 관리까지, 모아 청년 협동조합의 전문 비즈니스 영역을 소개합니다.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
