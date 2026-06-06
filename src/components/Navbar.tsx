'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === '/' || (pathname && pathname.startsWith('/v2'))) return null;
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/v1' },
    { name: t.nav.story, path: '/story' },
    { name: t.nav.business, path: '/business' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 transition-colors duration-300" role="banner">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        
        <Link href="/v1" className="flex items-center gap-2 group" aria-label="takinbot Home">
          <svg className="h-10 w-[166px] shrink-0" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="25%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="75%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>

              <linearGradient id="silverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F2FE" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>

              <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="50%" stopColor="#FF6B00" />
                <stop offset="100%" stopColor="#D84315" />
              </linearGradient>

              <linearGradient id="cyberBorderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F2FE" />
                <stop offset="35%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#FAFAFA" />
                <stop offset="65%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B00" />
              </linearGradient>

              <linearGradient id="titaniumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left: Symmetrical/Dual-Color Brand Takin Head Emblem (scaled to fit 44x44 area) - Zoomed & Cropped for maximum recognizability */}
            <image 
              href="/img/takinbot_brand_logo_flat.webp" 
              x="-3" 
              y="-3" 
              width="54" 
              height="54" 
            />

            {/* Right Side Brand Name & Subtitle */}
            <g transform="translate(52, 0)">
              {language === 'en' ? (
                <>
                  <text x="0" y="27" fontFamily="'Plus Jakarta Sans', 'Inter', 'Segoe UI', sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.02em">
                    <tspan fill="url(#titaniumGrad)">takin</tspan><tspan fill="url(#orangeGrad)">bot</tspan>
                  </text>
                  <text x="1" y="38" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.12em" fill="#64748B">
                    GOING-GLOBAL PARTNER
                  </text>
                </>
              ) : (
                <>
                  <text x="0" y="27" fontFamily="'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'Segoe UI', sans-serif" fontWeight="900" fontSize="20" letterSpacing="0.04em">
                    <tspan fill="url(#titaniumGrad)">拓新</tspan><tspan fill="url(#orangeGrad)">搏图</tspan>
                  </text>
                  <text x="1" y="38" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.15em" fill="#64748B">
                    出海合伙人
                  </text>
                </>
              )}
            </g>
          </svg>
        </Link>


        {/* Absolutely Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-heading text-xs font-bold tracking-wider uppercase transition-colors relative py-1 ${
                  isActive 
                    ? 'text-takinbot-orange dark:text-takinbot-cyan' 
                    : 'text-slate-600 hover:text-takinbot-dark dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-takinbot-orange dark:bg-takinbot-cyan shadow-[0_0_10px_#FF6B00] dark:shadow-[0_0_10px_#00F2FE] transition-colors duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3">
          
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-takinbot-orange dark:hover:text-takinbot-cyan border border-slate-200 dark:border-white/10 transition-all duration-300 flex items-center gap-1 cursor-pointer"
            aria-label="Switch Language"
            title={language === 'en' ? '切换为中文' : 'Switch to English'}
          >
            <Globe className="w-4 h-4" />
            <span className="text-[10px] font-extrabold uppercase font-heading">
              {language === 'en' ? 'ZH' : 'EN'}
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-takinbot-orange dark:hover:text-takinbot-cyan border border-slate-200 dark:border-white/10 transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {mounted && theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Direct CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md bg-takinbot-orange hover:bg-takinbot-orange/90 text-white font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]"
          >
            {t.common.contactUs}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors duration-200"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl transition-colors duration-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading text-sm font-bold tracking-wider uppercase py-2 border-b border-slate-100 dark:border-white/5 ${
                  isActive ? 'text-takinbot-orange dark:text-takinbot-cyan' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-2.5 rounded-md bg-takinbot-orange text-white text-center font-heading text-xs font-bold uppercase tracking-wider block"
          >
            {t.common.contactUs}
          </Link>
        </div>
      )}
    </header>
  );
}
