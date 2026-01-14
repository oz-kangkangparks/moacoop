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
          모아 청년 협동조합은 단순한 기부를 넘어,<br />
          땀 흘리는 봉사로 이웃의 삶을 실질적으로 변화시킵니다.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-24 aspect-[21/9] group">
          <Image
            src={finishedImages[0] || '/images/placeholder.jpg'}
            alt="Social Impact Hero"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">주거환경개선 봉사</h2>
            <p className="text-gray-200 max-w-2xl text-lg backdrop-blur-sm bg-black/10 p-4 rounded-xl border border-white/10">
              취약계층의 열악한 주거 환경을 개선합니다. 도배, 장판, 단열 시공 등 전문적인 기술 지원을 통해
              안전하고 쾌적한 보금자리를 선물합니다.
            </p>
          </div>
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
