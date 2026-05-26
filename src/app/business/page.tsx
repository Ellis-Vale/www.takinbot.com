'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Laptop, 
  Globe, 
  Cpu, 
  ArrowRight,
  ShieldCheck, 
  Settings, 
  Layers,
  Code,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export default function BusinessPage() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeSegment, setActiveSegment] = useState<'website' | 'social' | 'video'>('website');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-takinbot-dark flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-takinbot-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const weaponsList = [
    {
      id: 'website',
      badge: t.divisions.d1Badge,
      title: t.divisions.d1Title,
      desc: t.divisions.d1Desc,
      ctaText: language === 'zh' ? '访问案例演示站 (filtration.takinbot.com)' : 'Visit Pilot Showcase',
      ctaLink: 'https://filtration.takinbot.com',
      isExternal: true,
      icon: <Laptop className="w-6 h-6 text-takinbot-orange" />,
      pricing: language === 'zh' ? '按 SKU 规模灵活报价' : 'Flexible SKU-Based Pricing',
      features: [
        language === 'zh' ? '基于 Next.js + Cloudflare 全栈自研极速框架' : 'Ultra-fast Next.js + Cloudflare Edge structure',
        language === 'zh' ? '无限容量产品 SKU 规格交叉匹配数据库' : 'Unlimited B2B cross-reference SKU catalogs',
        language === 'zh' ? '流利中英双语、FOB 阶梯询价机制集成' : 'Bilingual automated FOB inquiry routing',
        language === 'zh' ? '移动端/平板 100% 极简高质感自适应自研' : '100% responsive Apple-style custom layouts',
        language === 'zh' ? '无第三方 SaaS 年费强抽，光速定制化修改' : 'Zero SaaS platform cuts, custom specs in hours'
      ]
    },
    {
      id: 'social',
      badge: t.divisions.d2Badge,
      title: t.divisions.d2Title,
      desc: t.divisions.d2Desc,
      ctaText: t.common.contactUs,
      ctaLink: '/contact',
      isExternal: false,
      icon: <Globe className="w-6 h-6 text-takinbot-cyan" />,
      pricing: language === 'zh' ? '低月费持续运营，按平台数灵活定价' : 'Low Monthly Retainer, Flexible by Platform',
      features: [
        language === 'zh' ? 'YouTube, LinkedIn, Facebook, Ins 主页搭建' : 'YouTube, LinkedIn, Facebook setups',
        language === 'zh' ? 'AI 极致赋能，每日生成地道地道外贸英文文案' : 'AI-driven daily high-quality B2B English copy',
        language === 'zh' ? '精准定位海外分销经理，主动拦截一手盘' : 'Distributors and trade leads proactive sourcing',
        language === 'zh' ? '社媒矩阵互联，每周流量盘点与客户意图追踪' : 'Cross-linked funnel analytics and buyer reports',
        language === 'zh' ? '由图南流利商务英语直连答疑，询盘无缝沉淀' : 'Direct negotiation in English by Tunan'
      ]
    },
    {
      id: 'video',
      badge: t.divisions.d3Badge,
      title: t.divisions.d3Title,
      desc: t.divisions.d3Desc,
      ctaText: t.common.contactUs,
      ctaLink: '/contact',
      isExternal: false,
      icon: <Cpu className="w-6 h-6 text-takinbot-orange" />,
      pricing: language === 'zh' ? '定期内容策划，含在月度服务内' : 'Included in Monthly Operations',
      features: [
        language === 'zh' ? '深入车间策划：诚实展示精密模具与产线' : 'Hands-on workshop scripting and setups',
        language === 'zh' ? '大厂级专业后期：高端电影级工业调色质感' : 'Premium industrial color grading and cuts',
        language === 'zh' ? 'AI 语音多语言翻译配音、多国语言字幕' : 'AI automated voice-overs and multi-language subs',
        language === 'zh' ? '独立站与 YouTube 深度整合，增强买家信任' : 'Direct site embedding for 300% conversion boost',
        language === 'zh' ? '拒绝廉价素材，每一帧都散发一手出厂实力' : 'No fake stock clips, only real manufacturing power'
      ]
    }
  ];

  const activeDiv = weaponsList.find(w => w.id === activeSegment)!;

  return (
    <div className="bg-slate-50 dark:bg-takinbot-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 min-h-screen py-16 sm:py-24 relative overflow-hidden">
      
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-takinbot-orange/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest text-takinbot-orange bg-takinbot-orange/10 border border-takinbot-orange/20 rounded-full uppercase">
            {language === 'zh' ? '三大出海武器' : 'Outbound Weapons'}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {language === 'zh' ? '全方位数字赋能，做工厂的海外分部' : 'Full-Spectrum Digital Outbound Operations'}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-body">
            {language === 'zh'
              ? '不招昂贵的外贸销售，不用笨重的传统代运营。图南用全栈代码、短视频与 AI 技术，帮工厂打破信息差。'
              : 'Ditch heavy agency packages. We implement custom high-speed code, native English B2B contract negotiations, and direct pipelines.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 justify-center border-b border-slate-200 dark:border-white/5 pb-6 mb-8 max-w-4xl mx-auto">
          {weaponsList.map((div) => {
            const isActive = activeSegment === div.id;
            return (
              <button
                key={div.id}
                onClick={() => setActiveSegment(div.id as any)}
                className={`px-5 py-3 text-xs font-heading font-extrabold rounded-xl border uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-takinbot-orange/10 border-takinbot-orange text-takinbot-orange shadow-md' 
                    : 'border-slate-250 text-slate-500 hover:text-slate-800 dark:border-white/10 dark:text-slate-400 dark:hover:text-white dark:hover:border-white/20'
                }`}
              >
                {div.title}
              </button>
            );
          })}
        </div>

        {/* Active Panel */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto border border-slate-200/50 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-takinbot-orange/20 to-transparent" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Text Column */}
              <div className="md:col-span-7 space-y-6 text-left">
                <span className="inline-block px-2.5 py-1 text-[9px] font-extrabold tracking-widest text-takinbot-orange bg-takinbot-orange/15 rounded uppercase">
                  {activeDiv.badge}
                </span>
                
                <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                  {activeDiv.icon}
                  {activeDiv.title}
                </h3>
                
                <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed font-body">
                  {activeDiv.desc}
                </p>

                {/* Pricing Tag */}
                <div className="inline-flex items-center gap-2 p-3 bg-takinbot-orange/10 rounded-xl border border-takinbot-orange/30">
                  <DollarSign className="w-4 h-4 text-takinbot-orange" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-heading">{activeDiv.pricing}</span>
                </div>
                
                {/* Feature Bullet List */}
                <div className="space-y-3 pt-2">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {language === 'zh' ? '交付指标与核心优势列表:' : 'DELIVERY REQUIREMENTS & METRICS:'}
                  </p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeDiv.features.map((feat, idx) => (
                      <span key={idx} className="inline-flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-350 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3.5 py-2.5 rounded-xl font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct action button */}
                <div className="pt-4">
                  {activeDiv.isExternal ? (
                    <a 
                      href={activeDiv.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-takinbot-orange hover:bg-takinbot-orange/95 text-white font-heading text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                    >
                      {activeDiv.ctaText} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link 
                      href={activeDiv.ctaLink}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-takinbot-orange hover:bg-takinbot-orange/95 text-white font-heading text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] cursor-pointer"
                    >
                      {activeDiv.ctaText} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Graphical Display Column */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full aspect-square rounded-2xl border border-slate-300 dark:border-white/5 overflow-hidden bg-slate-900/60 dark:bg-black/40 flex flex-col items-center justify-center p-6 text-center space-y-4 shadow-inner relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-takinbot-orange/5 to-transparent pointer-events-none" />
                  
                  {activeSegment === 'website' && (
                    <>
                      <Code className="w-14 h-14 text-takinbot-orange/80 group-hover:scale-110 transition-transform duration-300" />
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-heading">{language === 'zh' ? '自研 Next.js 看板' : 'Next.js Custom Development'}</span>
                        <p className="text-[11px] text-slate-450 leading-relaxed font-body">
                          {language === 'zh' ? '拒绝外部套壳，Cloudflare 全球边缘分发，首屏打开仅需 18ms，无限开模对照库拓展能力。' : 'Deploy static code to global edges. Fast search and catalog querying for cross-reference numbers.'}
                        </p>
                      </div>
                    </>
                  )}

                  {activeSegment === 'social' && (
                    <>
                      <Globe className="w-14 h-14 text-takinbot-cyan/80 group-hover:scale-110 transition-transform duration-300" />
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-heading">{language === 'zh' ? '海外 LinkedIn & YouTube 拦截' : 'Distributors Matrix Targeting'}</span>
                        <p className="text-[11px] text-slate-450 leading-relaxed font-body">
                          {language === 'zh' ? '自主搭建海外采购经理 LinkedIn 通信网，利用 YouTube 建立高权重视频护栏，直连大宗订单渠道。' : 'Active customer research and intent mapping with automated English pipelines that close B2B export contracts.'}
                        </p>
                      </div>
                    </>
                  )}

                  {activeSegment === 'video' && (
                    <>
                      <Cpu className="w-14 h-14 text-takinbot-orange/80 group-hover:scale-110 transition-transform duration-300" />
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-heading">{language === 'zh' ? 'AI 物料内容管线' : 'Cinematic Workshop Footage'}</span>
                        <p className="text-[11px] text-slate-450 leading-relaxed font-body">
                          {language === 'zh' ? '电影级工业镜头打磨车间产线细节，配合 AI 双语解说引擎，在海外买家心中建立大厂信誉。' : 'Cinematic camera angles capturing raw molding tolerances and quality controls, raising buyer trust by 300%.'}
                        </p>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
