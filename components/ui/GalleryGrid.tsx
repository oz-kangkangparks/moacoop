'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function GalleryGrid({ images, title, colorStart }: { images: string[], title: string, colorStart: string }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    if (images.length === 0) return null;

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
                        <div className={`absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            <span className="text-white font-medium text-sm">Project #{idx + 1}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
