import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/images/logo.png"
                                    alt="MoaCoop Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-white">모아 청년 협동조합</h2>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                            모아 청년 협동조합은 영리 사업과 사회 공헌의 균형을 통해<br />
                            지속 가능한 나눔을 실천하는 따뜻한 전문가 그룹입니다.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            {['Facebook', 'Instagram', 'Blog'].map((social) => (
                                <div key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                    {social[0]}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-gray-100 mb-6">바로가기</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">소개</Link></li>
                            <li><Link href="/business" className="hover:text-primary transition-colors">사업 분야</Link></li>
                            <li><Link href="/social" className="hover:text-primary transition-colors">사회 공헌</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">문의하기</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-gray-100 mb-6">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Address</span>
                                서울특별시 ...
                            </li>
                            <li>
                                <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Phone</span>
                                02-1234-5678
                            </li>
                            <li>
                                <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Email</span>
                                contact@moacoop.co.kr
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MoaCoop. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="cursor-pointer hover:text-gray-300">이용약관</span>
                        <span className="cursor-pointer hover:text-gray-300">개인정보처리방침</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
