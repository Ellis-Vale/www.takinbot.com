'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/' || (pathname && pathname.startsWith('/v2'))) return null;
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-50 dark:bg-takinbot-dark border-t border-slate-200 dark:border-white/5 py-12 text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300 animate-fade-in" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* SOHO Creator Brand Logo and Info */}
        <div className="md:col-span-1 space-y-4">
          <svg className="h-8 w-[133px] shrink-0" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="chromeGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="25%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="75%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>

              <linearGradient id="silverGradF" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              <linearGradient id="cyanGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F2FE" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>

              <linearGradient id="orangeGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="50%" stopColor="#FF6B00" />
                <stop offset="100%" stopColor="#D84315" />
              </linearGradient>

              <linearGradient id="cyberBorderGradF" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F2FE" />
                <stop offset="35%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#FAFAFA" />
                <stop offset="65%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B00" />
              </linearGradient>

              <linearGradient id="titaniumGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              <filter id="cyanGlowF" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="orangeGlowF" x="-20%" y="-20%" width="140%" height="140%">
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
                    <tspan fill="url(#titaniumGradF)">takin</tspan><tspan fill="url(#orangeGradF)">bot</tspan>
                  </text>
                  <text x="1" y="38" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.12em" fill="#64748B">
                    GOING-GLOBAL PARTNER
                  </text>
                </>
              ) : (
                <>
                  <text x="0" y="27" fontFamily="'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'Segoe UI', sans-serif" fontWeight="900" fontSize="20" letterSpacing="0.04em">
                    <tspan fill="url(#titaniumGradF)">拓新</tspan><tspan fill="url(#orangeGradF)">搏图</tspan>
                  </text>
                  <text x="1" y="38" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.15em" fill="#64748B">
                    出海合伙人
                  </text>
                </>
              )}
            </g>
          </svg>

          <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed font-body">
            {language === 'en' 
              ? 'takinbot is a multi-disciplinary independent SOHO maker and trading brand based in Shanghai, leveraging engineering depth and AI automation to deliver custom hardware, trade sourcing, and software systems.'
              : '拓新搏图是立足上海张江与自贸区的一手创客贸易实体。我们融合 3D 注塑设计、大宗国际贸易、软件外包及 AI 加速方案，为全球采购商交付高技术附加值服务。'}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 rounded text-slate-600 dark:text-slate-350">{language === 'en' ? 'Big-Tech Full-Stack' : '大厂全栈技术'}</span>
            <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 rounded text-slate-600 dark:text-slate-350">{language === 'en' ? 'AI-Driven 10x Ops' : 'AI 极致提效'}</span>
            <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 rounded text-slate-600 dark:text-slate-350">{language === 'en' ? '6,000+ SKU Pilot Live' : '6000+ SKU 出海案例'}</span>
            <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 rounded text-slate-600 dark:text-slate-350">{language === 'en' ? 'Outbound Partner' : '出海合伙人计划'}</span>
          </div>
        </div>

        {/* Divisions Links */}
        <div className="space-y-4">
          <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {language === 'en' ? 'Core Divisions' : '业务矩阵'}
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a 
                href="https://filtration.taxicolor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-takinbot-orange dark:hover:text-takinbot-cyan transition-colors font-semibold"
              >
                {t.divisions.d1Title} ↗
              </a>
            </li>
            <li><Link href="/business" className="hover:text-takinbot-orange dark:hover:text-takinbot-cyan transition-colors">{t.divisions.d2Title}</Link></li>
            <li><Link href="/business" className="hover:text-takinbot-orange dark:hover:text-takinbot-cyan transition-colors">{t.divisions.d3Title}</Link></li>
            <li><Link href="/business" className="hover:text-takinbot-orange dark:hover:text-takinbot-cyan transition-colors">{t.divisions.d4Title}</Link></li>
          </ul>
        </div>

        {/* Brand Story Links */}
        <div className="space-y-4">
          <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {language === 'en' ? 'Brand Story' : '创客精神'}
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/story" className="hover:text-takinbot-orange dark:hover:text-takinbot-cyan transition-colors">{t.common.story}</Link></li>
            <li><Link href="/story" className="hover:text-takinbot-orange dark:hover:text-takinbot-cyan transition-colors">{language === 'en' ? 'The Maker Philosophy' : '一人主张与敏捷优势'}</Link></li>
            <li><Link href="/contact" className="hover:text-takinbot-orange dark:hover:text-takinbot-cyan transition-colors">{language === 'en' ? 'SOHO Logistics Hub' : '海运装港与仓储配套'}</Link></li>
            <li><Link href="/contact" className="hover:text-takinbot-orange dark:hover:text-takinbot-cyan transition-colors">{language === 'en' ? 'Request Sourcing Consultation' : '发起产品开发与询价'}</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-4 text-xs font-body">
          <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {language === 'en' ? 'Direct SOHO Office' : '直连创客办公室'}
          </h4>
          <div className="space-y-2 text-slate-650 dark:text-slate-400">
            <p>
              <span className="text-slate-900 dark:text-white font-semibold">{language === 'en' ? 'HQ Location' : '联络地址'}: </span>
              {language === 'en' ? 'Zhangjiang High-Tech Park, Pudong, Shanghai, China' : '中国上海浦东张江高科技园区'}
            </p>
            <p>
              <span className="text-slate-900 dark:text-white font-semibold">Email: </span>
              <a href={`mailto:${t.common.email}`} className="text-takinbot-orange dark:text-takinbot-cyan hover:underline">{t.common.email}</a>
            </p>
          </div>
        </div>

      </div>

      {/* Copyright Footer Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} takinbot. {t.common.allRightsReserved}</p>
        <div className="flex gap-4 font-heading font-semibold text-[10px] tracking-wider uppercase">
          <a href="#" className="hover:underline">{language === 'en' ? 'Privacy Policy' : '隐私权政策'}</a>
          <a href="#" className="hover:underline">{language === 'en' ? 'Terms of Sourcing' : '大宗采购与合作服务条款'}</a>
        </div>
      </div>
    </footer>
  );
}
