import { Metadata } from "next";

export const metadata: Metadata = {
    title: "소식/문의",
    description: "모아 청년 협동조합에 궁금한 점이 있으시면 언제든 문의해주세요.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
