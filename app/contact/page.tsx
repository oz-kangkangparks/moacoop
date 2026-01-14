'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-24 pb-32 min-h-screen bg-gray-50">
            {/* Header */}
            <div className="text-center mb-24 px-4">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent font-bold tracking-widest text-sm uppercase mb-3"
                >
                    Get In Touch
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pretendard"
                >
                    궁금한 점이 있으신가요?<br />
                    <span className="text-primary">언제든 문의주세요.</span>
                </motion.h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center"
                        >
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                                <Phone className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-1">전화 문의</h3>
                                <p className="text-2xl font-bold text-primary mb-1">02-1234-5678</p>
                                <p className="text-sm text-gray-500">평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center"
                        >
                            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                                <Mail className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-1">이메일 문의</h3>
                                <p className="text-lg font-medium text-gray-700 mb-1">contact@moacoop.co.kr</p>
                                <p className="text-sm text-gray-500">견적 상담 및 제휴 문의</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center"
                        >
                            <div className="w-16 h-16 bg-gray-50 text-gray-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-1">오시는 길</h3>
                                <p className="text-lg font-medium text-gray-700">서울특별시 ...</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Notice Board */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
                            공지사항
                        </h2>
                        <ul className="space-y-6">
                            {[
                                { date: "2026.01.10", title: "2026년 상반기 주거환경개선 봉사 일정 안내" },
                                { date: "2026.01.05", title: "홈페이지 리뉴얼 오픈 이벤트" },
                                { date: "2025.12.28", title: "협동조합 총회 소집 공고" },
                                { date: "2025.12.15", title: "연말 불우이웃 돕기 성금 전달식" },
                            ].map((notice, idx) => (
                                <li key={idx} className="group cursor-pointer">
                                    <div className="flex items-center justify-between hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors">
                                        <div>
                                            <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded mb-2 inline-block">NOTICE</span>
                                            <p className="font-medium text-lg text-gray-800 group-hover:text-primary transition-colors">
                                                {notice.title}
                                            </p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1 pl-1">{notice.date}</div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <button className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                                더보기 +
                            </button>
                        </div>
                    </motion.div>

                </div>

                {/* Account Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-primary to-blue-900 rounded-3xl p-10 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">후원 안내</h3>
                        <p className="text-blue-200 mb-6">보내주신 후원금은 전액 투명하게 공개되며, 취약계층을 위해 소중하게 사용됩니다.</p>
                        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl">
                            <p className="text-sm text-blue-200 mb-1">우리은행</p>
                            <p className="text-2xl font-mono font-bold tracking-wider">1005-000-000000</p>
                            <p className="text-sm text-blue-200 mt-1">예금주: 모아 청년 협동조합</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
