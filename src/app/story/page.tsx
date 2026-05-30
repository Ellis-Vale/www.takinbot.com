'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { User, ShieldCheck, HeartHandshake, Compass, Award, Terminal, Workflow } from 'lucide-react';

export default function StoryPage() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

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

  return (
    <div className="bg-slate-50 dark:bg-takinbot-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 min-h-screen py-16 sm:py-24 relative overflow-hidden">
      
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-takinbot-orange/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest text-takinbot-orange bg-takinbot-orange/10 border border-takinbot-orange/20 rounded-full uppercase">
            {language === 'zh' ? '独立合伙人主张' : 'Partner Philosophy'}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {t.about.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-body">
            {t.about.subtitle}
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          {[
            { 
              icon: <User className="w-5 h-5 text-takinbot-orange" />, 
              title: language === 'zh' ? '图南' : 'Tunan (Founder)', 
              desc: language === 'zh' ? '独立产品设计师、前大厂全栈架构师兼出海合伙人。' : 'Founder, full-stack engineer and outbound strategist.'
            },
            { 
              icon: <ShieldCheck className="w-5 h-5 text-takinbot-cyan" />, 
              title: language === 'zh' ? '100% 诚实出海' : '100% Honest Sourcing', 
              desc: language === 'zh' ? '剔除中间商暴利差价与忽悠。直通车间产线与一手通关实况。' : 'Zero sales fluff, direct workshop audit and transparency.'
            },
            { 
              icon: <Compass className="w-5 h-5 text-takinbot-orange" />, 
              title: language === 'zh' ? '扎根车间，链动全球' : 'Workshop Roots, Global Reach', 
              desc: language === 'zh' ? '睡在滤清器与模具厂房，用键盘和镜头把一手好货销往全球。' : 'Sleeping in car parts workshops, scaling via custom code.'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-200/60 dark:border-white/5 flex flex-col items-center text-center space-y-4 shadow-sm"
            >
              <div className="p-3.5 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 w-fit">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-heading text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">{item.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed font-body">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Block */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/50 dark:border-white/10 shadow-lg space-y-8 font-body leading-relaxed text-sm text-slate-650 dark:text-slate-355 text-left"
        >
          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-takinbot-orange" />
              {language === 'zh' ? '从大厂工程师，到深入制造一线' : 'From Tech Offices to car parts Workshops'}
            </h3>
            <p className="text-slate-650 dark:text-slate-400">{t.about.storyText1}</p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 border-t border-slate-200 dark:border-white/5 pt-6">
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-takinbot-cyan" />
              {language === 'zh' ? '打通“技术”与“制造”的跨界信息差' : 'Bridging Tech Code and Mechanical Tolerances'}
            </h3>
            <p className="text-slate-650 dark:text-slate-400">{t.about.storyText2}</p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4 border-t border-slate-200 dark:border-white/5 pt-6">
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Workflow className="w-5 h-5 text-takinbot-orange" />
              {language === 'zh' ? '用键盘和镜头，带中国工厂征战全球' : 'We Conquer Global Importers clearance Pipelines'}
            </h3>
            <p className="text-slate-650 dark:text-slate-400">{t.about.storyText3}</p>
          </div>
        </motion.div>

        {/* CTA values block */}
        <div className="bg-slate-100/50 dark:bg-[#121826]/30 border border-slate-200 dark:border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left space-y-1.5 max-w-xl">
            <h4 className="font-heading text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              {language === 'zh' ? '准备开启您工厂的“海外营销部”吗？' : 'Ready to Launch Your Factory Overseas Dept?'}
            </h4>
            <p className="text-[11px] text-slate-500 font-body leading-relaxed">
              {language === 'zh'
                ? '不收取高额年费，拒绝死板模板套用。与图南直连，我们将在 24 小时内为您工厂的核心产品目录进行出海可行性与技术方案核算。'
                : 'Skip traditional middlemen delays. Talk directly to Tunan and receive a complete preliminary B2B search catalog review in 24 hours.'}
            </p>
          </div>
          <a 
            href="/contact" 
            className="px-5 py-3 rounded-lg bg-takinbot-orange hover:bg-takinbot-orange/95 text-white font-heading text-xs font-bold uppercase tracking-wider transition-all hover:translate-y-[-2px] hover:shadow-[0_0_15px_rgba(255,107,0,0.3)] shrink-0 block text-center cursor-pointer"
          >
            {t.common.contact}
          </a>
        </div>

      </div>
    </div>
  );
}
