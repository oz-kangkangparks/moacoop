'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Building2 } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="pt-40 pb-32 min-h-screen bg-white">
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
                                    src="/images/logo.webp"
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
                                처음엔 <strong>'우리가 가진 기술로 좋은 일을 할 수 없을까?'</strong> 라는 작은 고민에서 시작했습니다.
                                혼자 하면 봉사지만, 전문가들이 모이면 변화가 된다는 것을 믿습니다.
                            </p>
                            <p>
                                IT 개발자, 건축가, 의료진, 예술가...
                                각기 다른 분야의 전문가들이 모여 수익을 창출하고,
                                그 수익으로 지역 사회에 꼭 필요한 도움을 전하는 것.
                                그것이 모아 청년 협동조합이 존재하는 이유입니다.
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

                {/* Core Values Section (Proposed) */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block"
                        >
                            Our Philosophy
                        </motion.span>
                        <h2 className="text-3xl font-bold text-gray-900">핵심 가치</h2>
                        <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "전문성 (Expertise)",
                                desc: "각 분야 최고의 전문가들이 모여 최상의 결과물을 만듭니다."
                            },
                            {
                                icon: Users,
                                title: "협력 (Cooperation)",
                                desc: "혼자가 아닌 함께의 가치를 믿으며, 시너지를 창출합니다."
                            },
                            {
                                icon: MapPin,
                                title: "지역사회 기여 (Contribution)",
                                desc: "수익의 일부를 지역사회에 환원하여 따뜻한 변화를 만듭니다."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all text-center group"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed break-keep">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Expertise Fields (Proposed for 'Diverse Experts') */}
                <section className="mb-32">
                    <div className="bg-gray-50 rounded-[2.5rem] p-12 md:p-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">함께하는 전문가들</h2>
                            <p className="text-gray-600">다양한 분야의 전문가들이 모아 청년 협동조합과 함께합니다.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "IT 개발", icon: "💻" },
                                { name: "건축/인테리어", icon: "🏗️" },
                                { name: "디자인/예술", icon: "🎨" },
                                { name: "의료/복지", icon: "🏥" },
                                { name: "교육", icon: "📚" },
                                { name: "경영/회계", icon: "📊" },
                                { name: "마케팅", icon: "📢" },
                                { name: "법률/노무", icon: "⚖️" },
                            ].map((field, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="text-4xl mb-3">{field.icon}</div>
                                    <div className="font-bold text-gray-900">{field.name}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Map / Location */}
                <section>
                    <div className="bg-gray-900 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <MapPin className="w-12 h-12 mx-auto mb-6 text-accent" />
                            <h2 className="text-3xl font-bold mb-4">오시는 길</h2>
                            <p className="text-white font-medium text-lg mb-8 drop-shadow-md">언제든 편하게 방문해주세요. 따뜻한 차 한 잔 대접하겠습니다.</p>
                            <address className="not-italic text-xl mb-8">
                                경상남도 김해시 김해대로 2301번길 11, 2층
                            </address>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="https://map.naver.com/v5/search/경상남도%20김해시%20김해대로%202301번길%2011%202층"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-[#03C75A] text-white rounded-xl font-bold hover:bg-[#02b351] transition-colors shadow-lg flex items-center"
                                >
                                    네이버 지도로 보기
                                </a>
                                <a
                                    href="https://map.kakao.com/link/search/경상남도%20김해시%20김해대로%202301번길%2011"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-[#FEE500] text-black rounded-xl font-bold hover:bg-[#ebd400] transition-colors shadow-lg flex items-center"
                                >
                                    카카오맵으로 보기
                                </a>
                            </div>
                        </div>

                        {/* Background Map Placeholder */}
                        <div className="absolute inset-0 z-0">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=경상남도%20김해시%20김해대로%202301번길%2011&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full opacity-30 grayscale hover:grayscale-0 transition-all duration-500"
                                aria-label="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
