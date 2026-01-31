'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, History, CreditCard, Users, Search } from 'lucide-react';

const DONATION_HISTORY = [
    { date: '2026.01.15', category: '주거환경개선', desc: '김해시 부원동 독거노인 2가구 도배/장판 교체 자재비', amount: '1,250,000' },
    { date: '2026.01.03', category: '아동 안전', desc: '지역 아동센터 옐로카펫 보수 페인트 구매', amount: '450,000' },
    { date: '2025.12.24', category: '연말 나눔', desc: '보육원 크리스마스 선물 및 간식비 지원', amount: '2,000,000' },
    { date: '2025.12.10', category: '스마트 태그', desc: '치매 어르신 실종 예방 태그 50개 구매', amount: '1,500,000' },
    { date: '2025.11.28', category: '운영비', desc: '봉사단 조끼 및 안전 장비 구매', amount: '800,000' },
];

const parseAmount = (amountStr: string) => {
    return parseInt(amountStr.replace(/[^0-9]/g, ''), 10);
};

export default function DonationPage() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
    const [keyword, setKeyword] = useState('');
    const [minAmount, setMinAmount] = useState('');
    const [maxAmount, setMaxAmount] = useState('');
    const [filteredHistory, setFilteredHistory] = useState(DONATION_HISTORY);

    const handleSearch = () => {
        const filtered = DONATION_HISTORY.filter(item => {
            // 1. Date Range
            const itemDate = item.date.replace(/\./g, '-'); // 2026.01.15 -> 2026-01-15
            const isAfterStart = startDate ? itemDate >= startDate : true;
            const isBeforeEnd = endDate ? itemDate <= endDate : true;

            // 2. Keyword (Category or Content)
            const isKeywordMatch = keyword ? (
                item.category.includes(keyword) ||
                item.desc.includes(keyword)
            ) : true;

            // 3. Amount Range
            const itemAmount = parseAmount(item.amount);
            const min = minAmount ? parseInt(minAmount, 10) : 0;
            const max = maxAmount ? parseInt(maxAmount, 10) : Infinity;
            const isAmountMatch = itemAmount >= min && itemAmount <= max;

            return isAfterStart && isBeforeEnd && isKeywordMatch && isAmountMatch;
        });
        setFilteredHistory(filtered);
    };

    return (
        <div className="pt-40 pb-32 min-h-screen bg-gray-50">
            {/* Header */}
            <div className="text-center mb-20 px-4">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent font-bold tracking-widest text-sm uppercase mb-3"
                >
                    Donation History
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pretendard"
                >
                    투명한 <span className="text-primary">나눔의 기록</span>
                </motion.h1>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    여러분께서 보내주신 소중한 후원금은<br />
                    도움이 필요한 이웃들에게 전액 사용됩니다.<br />
                    따뜻한 마음을 나누어 주신 모든 분들께 감사드립니다.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. Donation Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-20 relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
                                    <Heart className="w-8 h-8 fill-current" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">후원 안내</h2>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                모아 청년 협동조합은 비영리 활동을 통해 지역 사회에 기여합니다.<br />
                                보내주신 후원금은 <strong>독거노인 주거개선, 아동 안전 물품 지원, 청년 봉사단 운영</strong>에 사용됩니다.
                            </p>
                            <div className="inline-block bg-gray-50 border border-gray-200 px-8 py-6 rounded-2xl">
                                <p className="text-sm text-gray-500 mb-2">후원 계좌 (예금주: 모아 협동조합)</p>
                                <div className="flex items-center gap-3 text-xl md:text-2xl font-bold text-primary font-mono whitespace-nowrap">
                                    <CreditCard className="w-8 h-8 flex-shrink-0" />
                                    <span>IBK기업은행 415-102043-04-019</span>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block w-px h-64 bg-gray-100"></div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">후원 혜택 안내</h3>
                            <ul className="space-y-4">
                                {[
                                    "기부금 영수증 발급 (연말정산 소득공제)",
                                    "정기 간행물 및 활동 보고서 발송",
                                    "연말 후원자의 밤 행사 초청",
                                    "자원봉사 활동 우선 참여 기회 제공"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl">
                                        <HandHeart className="w-5 h-5 text-accent" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Usage History Table */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <History className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">후원금 사용 내역</h2>
                    </div>

                    {/* Compact Advanced Search Filter */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-end">
                            {/* 1. Date Range (25% -> 3/12) */}
                            <div className="xl:col-span-3">
                                <label className="text-xs font-bold text-gray-700 mb-1 block">날짜</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="date"
                                        className="flex-1 w-full min-w-0 p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary text-gray-600"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                    <span className="text-gray-400 text-sm">~</span>
                                    <input
                                        type="date"
                                        className="flex-1 w-full min-w-0 p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary text-gray-600"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* 2. Amount Range (25% -> 3/12) */}
                            <div className="xl:col-span-3">
                                <label className="text-xs font-bold text-gray-700 mb-1 block">금액</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="최소"
                                        className="flex-1 w-full min-w-0 p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-400 text-gray-600 text-right"
                                        value={minAmount}
                                        onChange={(e) => setMinAmount(e.target.value.replace(/[^0-9]/g, ''))}
                                    />
                                    <span className="text-gray-400 text-sm">~</span>
                                    <input
                                        type="text"
                                        placeholder="최대"
                                        className="flex-1 w-full min-w-0 p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary text-gray-600 placeholder-gray-400 text-right"
                                        value={maxAmount}
                                        onChange={(e) => setMaxAmount(e.target.value.replace(/[^0-9]/g, ''))}
                                    />
                                </div>
                            </div>

                            {/* 3. Keyword (40% -> 5/12) */}
                            <div className="xl:col-span-5">
                                <label className="text-xs font-bold text-gray-700 mb-1 block">검색어 (사용처/내용)</label>
                                <input
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    className="w-full p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-400 text-gray-600"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>

                            {/* 4. Search Button (10% -> 1/12) */}
                            <div className="xl:col-span-1">
                                <button
                                    onClick={handleSearch}
                                    className="w-full py-2 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg h-[38px]"
                                >
                                    <Search className="w-4 h-4" />
                                    조회
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="p-6 font-bold text-gray-500 text-sm uppercase tracking-wider whitespace-nowrap">날짜</th>
                                        <th className="p-6 font-bold text-gray-500 text-sm uppercase tracking-wider whitespace-nowrap">사용처 (사업명)</th>
                                        <th className="p-6 font-bold text-gray-500 text-sm uppercase tracking-wider whitespace-nowrap">내용</th>
                                        <th className="p-6 font-bold text-gray-500 text-sm uppercase tracking-wider text-right whitespace-nowrap">금액</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredHistory.length > 0 ? (
                                        filteredHistory.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                                <td className="p-6 text-gray-600 whitespace-nowrap">{row.date}</td>
                                                <td className="p-6 font-bold text-gray-900 whitespace-nowrap">
                                                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs mr-2">{row.category}</span>
                                                </td>
                                                <td className="p-6 text-gray-600 min-w-[300px]">{row.desc}</td>
                                                <td className="p-6 font-bold text-gray-900 text-right whitespace-nowrap">{row.amount}원</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="p-12 text-center text-gray-500">
                                                검색 결과가 없습니다.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 3. Donor List */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <Users className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">함께해주신 분들</h2>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                        {/* Background Deco */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative z-10">
                            <p className="text-blue-200 mb-8 text-lg text-center">
                                2025년 하반기, 모아 청년 협동조합의 발걸음에 힘을 실어주신 분들입니다.<br />
                                (가나다순, 개인정보 보호를 위해 이름 일부를 가림 처리하였습니다.)
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {[
                                    '강*우', '김*민', '김*서', '김*현', '박*준', '박*호',
                                    '서*진', '신*아', '오*영', '윤*원', '이*규', '이*름',
                                    '이*재', '임*훈', '장*솔', '정*우', '조*현', '최*진',
                                    '한*수', '황*영', '(주)모아름', '강강박스', '바른건축', '태양상사'
                                ].map((name, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl py-3 text-center text-white hover:bg-white/20 transition-colors">
                                        {name}
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <button className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition-all font-bold">
                                    전체 후원자 명단 보기
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
