'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageViewerProps {
    isOpen: boolean;
    images: string[];
    initialIndex?: number;
    onClose: () => void;
    title?: string;
}

import { useState } from 'react';

export default function ImageViewer({
    isOpen,
    images,
    initialIndex = 0,
    onClose,
    title
}: ImageViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Update current index when modal opens or initialIndex changes
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, handleNext, handlePrev]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
                {/* Count Indicator */}
                <div className="px-4 py-2 rounded-full bg-white/10 text-white font-medium backdrop-blur-md">
                    {currentIndex + 1} / {images.length}
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Main Image Container */}
            <div
                className="relative w-full h-full p-4 md:p-12 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
            >
                <button
                    onClick={handlePrev}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md z-10 group"
                >
                    <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
                    <Image
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        quality={100}
                        priority
                    />
                    {title && (
                        <div className="absolute bottom-4 left-0 w-full text-center">
                            <span className="inline-block px-4 py-2 rounded-lg bg-black/50 text-white backdrop-blur-sm">
                                {title}
                            </span>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md z-10 group"
                >
                    <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
