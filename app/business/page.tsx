'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, PaintBucket, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BusinessPage() {
    const services = [
        {
            title: "IT & AI & IoT 스마트 기술 전문 기업",
            id: "it",
            description: "AI부터 ERP, MES, Saas Platform, Mobile, 자동화 솔루션, 홈페이지 까지 최적의 IT 솔루션을 제작합니다",
            icon: <Sparkles className="w-8 h-8" />,
            color: "bg-indigo-600",
            details: [
                "웹 서비스 및 SaaS 플랫폼 개발 (MVP부터 상용 서비스까지)",
                "기업용 통합 업무 시스템 구축 (ERP, MES, 재고관리)",
                "모바일 앱 & 통합 관리 시스템",
                "AI 지능형 챗봇 및 데이터 자동화 솔루션"
            ]
        },
        {
            title: "모아름 (MOAREUM)",
            id: "moareum",
            description: "반복적인 업무는 로봇에게, 창의적인 업무는 사람에게. 업무 자동화의 새로운 기준을 제시합니다.",
            icon: <PaintBucket className="w-8 h-8" />, // Fallback, not used due to logo logic
            color: "bg-orange-500", // Not used for container if we use white logo bg
            details: [
                "No-Code/Low-Code 자동화 (n8n, Make, Zapier)",
                "AI 에이전트 및 맞춤형 봇(Custom Bot) 개발",
                "업무 프로세스 최적화 및 자동화 컨설팅",
                "Opal 등 최신 자동화 툴 통합 구축"
            ]
        },

    ];

    return (
        <div className="pt-40 pb-32 min-h-screen bg-neutral-50">
            {/* Hero Header */}
            <div className="text-center mb-24 px-4">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block"
                >
                    Business Area
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-pretendard"
                >
                    전문가의 손길로<br /><span className="text-primary">완성하는 비즈니스</span>
                </motion.h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="flex items-center mb-8">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ${(service.id === 'it' || service.id === 'moareum') ? 'bg-white p-2 border border-gray-100' : service.color}`}>
                                    {service.id === 'it' ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/business/kangkangparks_logo.webp"
                                                fill
                                                className="object-contain"
                                                alt="강강박스 로고"
                                            />
                                        </div>
                                    ) : service.id === 'moareum' ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/business/moareum_symbol.webp"
                                                fill
                                                className="object-contain"
                                                alt="모아름 로고"
                                            />
                                        </div>
                                    ) : (
                                        service.icon
                                    )}
                                </div>
                                {service.id === 'it' && (
                                    <div className="ml-5 flex flex-col justify-center">
                                        <span className="text-2xl font-bold text-gray-900 leading-tight">강강박스</span>
                                        <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase mt-1">Kangkang Parks</span>
                                    </div>
                                )}
                                {service.id === 'moareum' && (
                                    <div className="ml-5 flex flex-col justify-center">
                                        <span className="text-2xl font-bold text-gray-900 leading-tight">모아름</span>
                                        <span className="text-xs font-bold text-orange-500 tracking-widest uppercase mt-1">MOAREUM</span>
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed h-12">
                                {service.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {service.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-gray-700 bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium">{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            {service.id === 'it' ? (
                                <Link
                                    href="https://kangkangparks.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors group-hover:shadow-lg"
                                >
                                    강강박스 홈페이지 보기
                                </Link>
                            ) : service.id === 'moareum' ? (
                                <button
                                    disabled
                                    className="flex items-center justify-center w-full py-4 rounded-xl bg-gray-300 text-gray-500 font-bold cursor-not-allowed"
                                >
                                    모아름 홈페이지 보기 (26년 2월 오픈예정)
                                </button>
                            ) : (
                                <Link href="/contact" className="flex items-center justify-center w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-primary transition-colors group-hover:shadow-lg">
                                    견적 상담 받기
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-primary text-white p-12 md:p-24 text-center"
                >
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">최고의 파트너를 찾고 계신가요?</h2>
                        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            고객님의 공간을 내 집처럼 소중하게 관리해 드립니다.<br />
                            지금 바로 무료 견적 상담을 받아보세요.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            문의하기 <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
