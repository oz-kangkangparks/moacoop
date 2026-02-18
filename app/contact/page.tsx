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
                <div className="space-y-12">
                    {/* Top Section: Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-center items-center text-center h-full"
                        >
                            <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6">
                                <Mail className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-2xl text-gray-900 mb-2">이메일 문의</h3>
                            <p className="text-xl font-medium text-gray-700 mb-2">moa@moacoop.co.kr</p>
                            <p className="text-gray-500">견적 상담 및 제휴 문의</p>
                        </motion.div>

                        {/* Address Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-center items-center text-center h-full"
                        >
                            <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-6">
                                <MapPin className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-2xl text-gray-900 mb-2">오시는 길</h3>
                            <p className="text-xl font-medium text-gray-700 mb-6 break-keep">
                                경상남도 김해시 김해대로 2301번길 11, 2층
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://map.naver.com/v5/search/경상남도%20김해시%20김해대로%202301번길%2011%202층"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-[#03C75A] text-white rounded-xl font-bold hover:bg-[#02b351] transition-colors shadow-md flex items-center"
                                >
                                    네이버 지도
                                </a>
                                <a
                                    href="https://map.kakao.com/link/search/경상남도%20김해시%20김해대로%202301번길%2011"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-[#FEE500] text-black rounded-xl font-bold hover:bg-[#ebd400] transition-colors shadow-md flex items-center"
                                >
                                    카카오맵
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section: Full Width Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 relative"
                    >
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
                    </motion.div>
                </div>



            </div>
        </div>
    );
}
