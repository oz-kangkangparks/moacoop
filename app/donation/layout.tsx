import { Metadata } from "next";

export const metadata: Metadata = {
    title: "후원 내역",
    description: "투명한 나눔의 기록. 여러분의 소중한 후원금이 어떻게 쓰이는지 공개합니다.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
