'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-50 dark:bg-takinbot-dark border-t border-slate-200 dark:border-white/5 py-12 text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300 animate-fade-in" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* SOHO Creator Brand Logo and Info */}
        <div className="md:col-span-1 space-y-4">
          <svg className="h-8 w-32 shrink-0" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="text-orange-f" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF8C00" />
                <stop offset="100%" stopColor="#FF6B00" />
              </linearGradient>
            </defs>
            <g>
              <text x="0" y="24" fontFamily="'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'Segoe UI', sans-serif" fontWeight="900" fontSize="20" letterSpacing="0.02em" className="fill-slate-900 dark:fill-white transition-colors duration-300">
                拓新<tspan fill="url(#text-orange-f)">搏图</tspan>
              </text>
              <text x="1" y="35" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.19em" className="fill-slate-500 dark:fill-slate-400">
                GOING-GLOBAL PARTNER
              </text>
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
            <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 rounded text-slate-600 dark:text-slate-350">{language === 'en' ? 'Qinghe Filter Case' : '清河滤清器案例'}</span>
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
                href="https://filtration.takinbot.com" 
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
          <div className="space-y-2 text-slate-600 dark:text-slate-400">
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
