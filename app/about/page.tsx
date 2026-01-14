'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Building2 } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="pt-24 pb-32 min-h-screen bg-white">
            {/* Header */}
            <div className="text-center mb-20 px-4">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary font-bold tracking-widest text-sm uppercase mb-3"
                >
                    Who We Are
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pretendard"
                >
                    따뜻한 전문가들이 만드는<br />
                    <span className="text-primary">더 나은 세상</span>
                </motion.h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-square md:aspect-video lg:aspect-square bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
                    >
                        <div className="absolute inset-0 p-12 md:p-16 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/logo.png"
                                    alt="MoaCoop Symbol"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">설립 취지</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                모아 청년 협동조합은 <strong>"건강한 사회를 위한 따뜻한 동행"</strong>을 목표로 설립되었습니다.
                                우리는 이익만을 쫓는 기업이 아닌, 각자의 재능으로 사회에 기여하는 전문가 공동체입니다.
                            </p>
                            <p>
                                IT 개발자, 건축/인테리어 CEO, 의료 전문가, 화가, 시의원, 목수, 그리고 미래를 꿈꾸는 학생까지.
                                다양한 배경을 가진 조합원들이 모여 최상의 비즈니스 결과물을 만들고,
                                그 수익을 다시 지역 사회 봉사와 공익 활동으로 환원하고 있습니다.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <Award className="w-8 h-8 text-accent mb-3" />
                                <h4 className="font-bold text-gray-900 mb-1">전문성</h4>
                                <p className="text-sm text-gray-500">다양한 분야의 전문가 그룹</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <Users className="w-8 h-8 text-primary mb-3" />
                                <h4 className="font-bold text-gray-900 mb-1">상생</h4>
                                <p className="text-sm text-gray-500">조합원과 지역사회의 동반 성장</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Organization Chart */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">조직도</h2>
                        <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Tree Structure Visual */}
                        <div className="flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl z-10 mb-8"
                            >
                                이사장
                            </motion.div>

                            <div className="w-px h-12 bg-gray-200 mb-8"></div>

                            {/* Horizontal Connector for Desktop */}
                            <div className="hidden md:block w-3/4 h-px bg-gray-200 mb-8 relative">
                                <div className="absolute left-0 top-0 w-px h-8 bg-gray-200 transform translate-y-0"></div>
                                <div className="absolute right-0 top-0 w-px h-8 bg-gray-200 transform translate-y-0"></div>
                                <div className="absolute left-1/2 top-0 w-px h-8 bg-gray-200 transform -translate-x-1/2 translate-y-0"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                {[
                                    { title: "경영지원팀", color: "border-blue-200", text: "text-blue-900" },
                                    { title: "사업본부", color: "border-gray-200", text: "text-gray-900" },
                                    { title: "사회공헌팀", color: "border-orange-200", text: "text-orange-600" }
                                ].map((team, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`bg-white border-2 ${team.color} p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all`}
                                    >
                                        <h3 className={`text-xl font-bold ${team.text} mb-4`}>{team.title}</h3>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            {idx === 0 && ["총무 / 회계", "홍보 / 마케팅"].map(i => <li key={i}>{i}</li>)}
                                            {idx === 1 && ["시설 유지보수", "전문 청소", "인테리어"].map(i => <li key={i}>{i}</li>)}
                                            {idx === 2 && ["봉사단 운영", "후원 관리", "지역 연계"].map(i => <li key={i}>{i}</li>)}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map / Location */}
                <section>
                    <div className="bg-gray-900 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <MapPin className="w-12 h-12 mx-auto mb-6 text-accent" />
                            <h2 className="text-3xl font-bold mb-4">오시는 길</h2>
                            <p className="text-gray-400 mb-8">언제든 편하게 방문해주세요. 따뜻한 차 한 잔 대접하겠습니다.</p>
                            <address className="not-italic text-xl">
                                서울특별시 ... (상세 주소)
                            </address>
                        </div>

                        {/* Background Map Placeholder */}
                        <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay"></div>
                    </div>
                </section>

            </div>
        </div>
    );
}
