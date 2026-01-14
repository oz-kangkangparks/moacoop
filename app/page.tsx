'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Briefcase, Hammer, Users } from 'lucide-react';

const SLIDE_COUNT = 10;
const SLIDE_DURATION = 5000;

function Counter({ from, to, label }: { from: number; to: number; label: string }) {
  // Simple counter animation logic (simplified for reliability without external hooks)
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <span className="text-4xl md:text-5xl font-bold text-accent mb-2 tabular-nums">
        {to}+
      </span>
      <span className="text-gray-500 font-medium">{label}</span>
    </div>
  );
}

export default function HomePage() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev % SLIDE_COUNT) + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50" ref={containerRef}>

      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Parallax Background Slideshow */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0 bg-neutral-900"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={`/images/homeslide/slide_${currentSlide}.jpg`}
                alt={`MoaCoop Hero Slide ${currentSlide}`}
                fill
                className="object-cover brightness-[0.6]"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent z-10" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-bold tracking-wider mb-6 backdrop-blur-md">
              WITH 모아 청년 협동조합
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
              따뜻한 전문가,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                세상을 바꾸다.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              영리 사업의 전문성과 사회 공헌의 따뜻함.<br className="hidden md:block" />
              모아 청년 협동조합이 만드는 균형 잡힌 미래입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/business"
                className="group relative px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  사업 소개 <Briefcase className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
              <Link
                href="/social"
                className="group px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center"
              >
                사회 공헌 <Heart className="ml-2 w-5 h-5 group-hover:text-red-400 transition-colors" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>


      {/* 2. Impact Stats (Floating) */}
      <section className="relative z-20 -mt-24 px-4 max-w-7xl mx-auto w-full mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Counter from={0} to={100} label="누적 봉사 시간" />
          <Counter from={0} to={50} label="수혜 가구 수" />
          <Counter from={0} to={10} label="협력 기업" />
        </div>
      </section>


      {/* 3. Bento Grid Navigation */}
      <section className="px-4 max-w-7xl mx-auto pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            모아의 두 가지 약속
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            우리는 최고의 기술로 고객을 만족시키고,
            그 수익으로 이웃을 돕는 선순환을 만듭니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
          {/* Card 1: Business */}
          <Link href="/business" className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-slate-900 transition-transform duration-700 group-hover:scale-105">
              {/* Ideally another image here */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90" />
            </div>
            <div className="relative h-full p-12 flex flex-col justify-between z-10">
              <div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white text-3xl border border-white/20 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <Hammer />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">시설물 유지보수</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  전문적인 기술과 노하우로 건물의 가치를 높입니다.<br />
                  안전하고 쾌적한 공간을 위한 최적의 솔루션.
                </p>
              </div>
              <div className="flex items-center text-white font-bold text-lg group-hover:translate-x-4 transition-transform text-accent">
                서비스 보기 <ArrowRight className="ml-2" />
              </div>
            </div>
          </Link>

          {/* Card 2: Social */}
          <Link href="/social" className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-orange-900 transition-transform duration-700 group-hover:scale-105">
              {/* Ideally another image here */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-950 opacity-90" />
            </div>
            <div className="relative h-full p-12 flex flex-col justify-between z-10">
              <div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white text-3xl border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <Heart />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">사회 공헌 활동</h3>
                <p className="text-orange-100 text-lg leading-relaxed">
                  수익의 절반은 반드시 사회로 환원합니다.<br />
                  주거환경개선 봉사로 이웃에게 희망을 전합니다.
                </p>
              </div>
              <div className="flex items-center text-white font-bold text-lg group-hover:translate-x-4 transition-transform text-primary-light">
                활동 내역 보기 <ArrowRight className="ml-2" />
              </div>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
