'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Update scrolled state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force scrolled style on non-home pages
  const showSolidNav = !isHome || isScrolled;

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: '소개', href: '/about' },
    { name: '사회 공헌', href: '/social' },
    { name: '사업', href: '/business' },
    { name: '소식/문의', href: '/contact' },
  ];

  // Always use solid/glass style for visibility
  const headerClass = "py-4";
  const containerClass = "bg-white/90 backdrop-blur-md border border-white/20 shadow-lg py-3";
  const textClass = "text-gray-800";
  const hoverClass = "text-gray-600 hover:text-primary hover:bg-gray-100/50";

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerClass
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-6 mx-4 rounded-2xl transition-all duration-300 flex items-center justify-between",
        containerClass
      )}>
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <div className="relative w-14 h-14">
            <Image
              src="/images/logo.png"
              alt="MoaCoop Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors duration-300",
            "text-primary"
          )}>
            모아 청년 협동조합
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                hoverClass
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "ml-4 px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md",
              "bg-primary text-white hover:bg-primary/90"
            )}
          >
            문의하기
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className="text-gray-900 w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay (Backdrop + Drawer) */}
      <div className={cn(
        "fixed inset-0 z-40 md:hidden transition-all duration-300",
        isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
      )}>
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[80%] max-w-sm bg-slate-900 shadow-2xl flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
