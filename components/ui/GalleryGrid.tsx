'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ImageViewer from './ImageViewer';

export default function GalleryGrid({ images, title, colorStart }: { images: string[], title: string, colorStart: string }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (images.length === 0) return null;

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
        setIsViewerOpen(true);
    };

    return (
        <section className="mb-24">
            <div className="flex items-center mb-8">
                <div className={`w-2 h-10 ${colorStart} mr-4 rounded-full`}></div>
                <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleImageClick(idx)}
                    >
                        <Image
                            src={src}
                            alt={`${title} ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300`} />

                        {/* Hover Caption */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                            <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </motion.div>
                ))}
            </div>

            <ImageViewer
                isOpen={isViewerOpen}
                images={images}
                initialIndex={currentImageIndex}
                onClose={() => setIsViewerOpen(false)}
                title={title}
            />
        </section>
    );
}
