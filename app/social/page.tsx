import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import GalleryGrid from '@/components/ui/GalleryGrid';

function getImages(dirName: string) {
  const dirPath = path.join(process.cwd(), 'public', 'images', dirName);
  try {
    const files = fs.readdirSync(dirPath);
    return files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file)).map(file => `/images/${dirName}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${dirName}:`, error);
    return [];
  }
}

export default function SocialPage() {
  const finishedImages = getImages('finished');
  const workingImages = getImages('working');

  return (
    <div className="pt-24 pb-32 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">Social Impact</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pretendard">
          함께 만드는 <span className="text-accent">따뜻한 세상</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          전문가들의 재능 기부와 수익 환원.<br />
          건강한 지역 사회를 위한 의미 있는 발걸음입니다.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Card */}
        {/* Hero Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 md:mb-24 aspect-[4/3] md:aspect-[21/9] group">
          <Image
            src="/images/social/social_logo.jpg"
            alt="Social Impact Hero"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">다양한 사회 공헌 활동</h2>
            <p className="text-gray-100 max-w-2xl text-lg md:text-xl leading-relaxed">
              주거환경개선부터 환경 정화, 어린이 안전 활동까지.<br />
              모아 청년 협동조합은 지역 사회 곳곳에 필요한 도움의 손길을 전합니다.
            </p>
          </div>
        </div>

        {/* Diverse Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "환경 정화 활동",
              desc: "산과 하천의 쓰레기를 줍는 플로깅 활동으로 깨끗한 자연을 지킵니다.",
              icon: "🌱"
            },
            {
              title: "안심 통학로 조성",
              desc: "어린이 보호구역에 페인트 도색 및 정비 활동을 통해 안전를 선물합니다.",
              icon: "🎨"
            },
            {
              title: "지역 사회 연계",
              desc: "김해시 복지재단 등 다양한 기관과 협약을 맺고 체계적인 나눔을 실천합니다.",
              icon: "🤝"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: '누적 봉사', value: '100+', sub: '시간' },
            { label: '수혜 가구', value: '50+', sub: '가구' },
            { label: '참여 조합원', value: '20+', sub: '명' },
            { label: '지역 사회', value: '5+', sub: '곳' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label} {stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Galleries */}
        <GalleryGrid images={finishedImages} title="활동 완료 모습" colorStart="bg-blue-600" />
        <GalleryGrid images={workingImages} title="현장의 땀방울" colorStart="bg-orange-500" />

      </div>
    </div>
  );
}
