import { Metadata } from "next";

export const metadata: Metadata = {
    title: "소개",
    description: "모아 청년 협동조합의 비전과 걸어온 길을 소개합니다. 청년들이 모여 만드는 따뜻한 변화.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
