'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-40 pb-32 min-h-screen bg-gray-50">
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
                    <div className="space-y-6 flex flex-col h-full">
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
                                <p className="text-lg font-medium text-gray-700 mb-1">moa@moacoop.co.kr</p>
                                <p className="text-sm text-gray-500">견적 상담 및 제휴 문의</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col flex-grow overflow-hidden relative"
                        >
                            <div className="flex items-start mb-6 z-10 relative">
                                <div className="w-16 h-16 bg-gray-50 text-gray-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">오시는 길</h3>
                                    <p className="text-lg font-medium text-gray-700 mb-4 leading-relaxed">
                                        경상남도 김해시 김해대로 2301번길 11, 2층
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href="https://map.naver.com/v5/search/경상남도%20김해시%20김해대로%202301번길%2011%202층"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-[#03C75A] text-white text-sm rounded-lg font-bold hover:bg-[#02b351] transition-colors shadow-sm flex items-center"
                                        >
                                            네이버 지도
                                        </a>
                                        <a
                                            href="https://map.kakao.com/link/search/경상남도%20김해시%20김해대로%202301번길%2011"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-[#FEE500] text-black text-sm rounded-lg font-bold hover:bg-[#ebd400] transition-colors shadow-sm flex items-center"
                                        >
                                            카카오맵
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed to fill space */}
                            <div className="w-full flex-grow rounded-2xl overflow-hidden min-h-[300px] border border-gray-100 relative z-0">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src="https://maps.google.com/maps?q=경상남도%20김해시%20김해대로%202301번길%2011&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                                    aria-label="Google Map"
                                ></iframe>
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



            </div>
        </div>
    );
}
