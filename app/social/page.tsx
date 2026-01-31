import Link from 'next/link';
import Image from 'next/image';
import { activities } from './data';

export default function SocialPage() {
  return (
    <div className="pt-40 pb-32 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">Social Impact</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pretendard">
          함께 만드는 <span className="text-accent">따뜻한 세상</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          주거 환경 개선에서 멈추지 않습니다.<br />
          어린이 옐로카펫 보수, 실종 예방 스마트 태그 보급, 정책 연구까지.<br />
          우리는 사회 곳곳에 필요한 도움을 고민하고 행동합니다.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/social/${activity.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={activity.thumbnail}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    {activity.icon}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {activity.title}
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed text-lg line-clamp-3">
                  {activity.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                  자세히 보기
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m-4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

