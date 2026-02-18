import { Metadata } from "next";

export const metadata: Metadata = {
    title: "사회 공헌",
    description: "지역 사회와 함께 성장하는 모아 청년 협동조합의 다양한 사회 공헌 활동을 확인하세요.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
