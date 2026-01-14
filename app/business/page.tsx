'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hammer, Sparkles, PaintBucket, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BusinessPage() {
    const services = [
        {
            title: "IT & 스마트 기술",
            id: "it",
            description: "홈페이지, AI 프로젝트, 스마트 팩토리 등 최신 IT 기술 솔루션.",
            icon: <Sparkles className="w-8 h-8" />,
            color: "bg-indigo-600",
            details: ["기업형 홈페이지 및 쇼핑몰 제작", "스마트 팩토리 구축 및 컨설팅", "AI 기반 데이터 분석 프로젝트", "업무 자동화 시스템화"]
        },
        {
            title: "인테리어 & 건축",
            id: "interior",
            description: "공간의 가치를 높이는 감각적이고 실용적인 인테리어.",
            icon: <PaintBucket className="w-8 h-8" />,
            color: "bg-orange-500",
            details: ["상업 공간 및 오피스 인테리어", "노후 주택 리모델링", "맞춤형 가구 및 공간 디자인", "친환경 자재 시공"]
        },
        {
            title: "시설 유지보수",
            id: "maintenance",
            description: "전문가의 진단으로 건물의 안전과 수명을 책임집니다.",
            icon: <Hammer className="w-8 h-8" />,
            color: "bg-blue-600",
            details: ["전기/조명 설비 정밀 진단", "배관 교체 및 누수 탐지", "방수 및 단열 시공", "긴급 복구 서비스"]
        },
        {
            title: "공간 케어 서비스",
            id: "cleaning",
            description: "보이지 않는 곳까지 케어하는 프리미엄 위생 관리.",
            icon: <CheckCircle2 className="w-8 h-8" />,
            color: "bg-teal-500",
            details: ["특수 청소 및 바닥 코팅", "준공 및 입주 청소", "정기 위생 관리", "방역 및 소독"]
        }
    ];

    return (
        <div className="pt-24 pb-32 min-h-screen bg-neutral-50">
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
                    전문가의 손길로<br /><span className="text-primary">완성하는 공간</span>
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
                            <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
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

                            <Link href="/contact" className="flex items-center justify-center w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-primary transition-colors group-hover:shadow-lg">
                                견적 상담 받기
                            </Link>
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
