import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { activities } from '../data';
import GalleryGrid from '@/components/ui/GalleryGrid';

// Static Params for SSG/Performance
export function generateStaticParams() {
    return activities.map((activity) => ({
        id: activity.id,
    }));
}

// Helper to get images from directory
function getImagesFromDir(dirNames: string[]) {
    let allImages: string[] = [];

    dirNames.forEach(dirName => {
        const dirPath = path.join(process.cwd(), 'public', 'images', dirName);
        try {
            if (fs.existsSync(dirPath)) {
                const files = fs.readdirSync(dirPath);
                const images = files
                    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
                    .map(file => `/images/${dirName}/${file}`);
                allImages = [...allImages, ...images];
            }
        } catch (error) {
            console.error(`Error reading directory ${dirName}:`, error);
        }
    });

    return allImages;
}

export default async function ActivityDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const activity = activities.find((a) => a.id === id);

    if (!activity) {
        notFound();
    }

    // Get Images
    let galleryImages: string[] = [];
    if (activity.images) {
        galleryImages = activity.images;
    } else if (activity.imagesDir) {
        galleryImages = getImagesFromDir(activity.imagesDir);
    }

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            {/* Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link href="/social" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    목록으로 돌아가기
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
                    <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-[4/3]">
                        <Image
                            src={activity.thumbnail}
                            alt={activity.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center mb-6">
                            <span className="text-4xl mr-4">{activity.icon}</span>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 font-pretendard">{activity.title}</h1>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                            {activity.content || activity.description}
                        </p>

                        {/* Stats */}
                        {activity.stats && (
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {activity.stats.map((stat, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label} {stat.sub}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Documents */}
                        {activity.documents && activity.documents.length > 0 && (
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    관련 자료
                                </h3>
                                <div className="space-y-3">
                                    {activity.documents.map((doc, idx) => (
                                        <a
                                            key={idx}
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download={doc.type === 'pptx'} // Force download for PPTX
                                            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                                        >
                                            <span className="text-gray-700 group-hover:text-blue-600 transition-colors flex max-w-[80%] truncate">
                                                <span className={`text-xs px-2 py-0.5 rounded uppercase font-bold mr-2 self-center ${doc.type === 'pdf' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                                                    {doc.type}
                                                </span>
                                                {doc.title}
                                            </span>
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={doc.type === 'pptx' ? "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" : "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"} />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Video Section */}
                {activity.video && (
                    <div className="mb-24">
                        <div className="flex items-center mb-8">
                            <div className="w-2 h-10 bg-red-600 mr-4 rounded-full"></div>
                            <h3 className="text-3xl font-bold text-gray-900">활동 영상</h3>
                        </div>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
                            <video
                                controls
                                className="w-full h-full object-cover"
                                poster={activity.thumbnail}
                            >
                                <source src={activity.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}

                {/* Gallery */}
                {galleryImages.length > 0 && (
                    <GalleryGrid
                        images={galleryImages}
                        title="활동 사진"
                        colorStart="bg-indigo-600"
                    />
                )}

            </div>
        </div>
    );
}
