'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { v2Translations } from './v2/translations';
import {
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Sparkles,
  Database
} from 'lucide-react';

export default function V2Page() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Force language to Chinese (zh) on mount
  useEffect(() => {
    setLanguage('zh');
  }, [setLanguage]);
  
  // General Inquiry form states
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryContactInfo, setInquiryContactInfo] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);

  // Active section for local nav highlighting
  const [activeSection, setActiveSection] = useState('hero');

  // Trigger hydration mounting
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'capabilities', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = v2Translations[language];

  // Simulated general inquiry submission
  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryCompany || !inquiryName || !inquiryContactInfo) return;
    setInquirySubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setInquirySubmitting(false);
    setInquirySubmitted(true);
    // Reset fields
    setInquiryCompany('');
    setInquiryName('');
    setInquiryContactInfo('');
    setInquiryNotes('');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0D253F] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#D32F2F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D253F] text-slate-100 font-sans dark bg-[#0D253F]">
      
      {/* 1. CUSTOM LOCAL HEADER (Pure text Logo, No Icon - Chinese Left, English Right) */}
      <header className="sticky top-0 z-50 bg-[#0D253F]/95 backdrop-blur-md border-b border-white/10 text-white transition-colors duration-300" role="banner">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Typographic Logo (No Icon) - Chinese Only, Bolder */}
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="text-2xl sm:text-3xl font-black tracking-widest font-sans select-none">
              <span className="text-white">拓新</span>
              <span className="text-[#D32F2F] group-hover:text-[#D4AF37] transition-colors">搏图</span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Local Navigation">
            <a href="#hero" className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 relative ${activeSection === 'hero' ? 'text-[#D32F2F]' : 'text-slate-300 hover:text-white'}`}>
              {language === 'en' ? 'Home' : '首页'}
              {activeSection === 'hero' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D32F2F]" />}
            </a>
            <a href="#capabilities" className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 relative ${activeSection === 'capabilities' ? 'text-[#D32F2F]' : 'text-slate-300 hover:text-white'}`}>
              {t.nav.capabilities}
              {activeSection === 'capabilities' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D32F2F]" />}
            </a>
            <a href="#contact" className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 relative ${activeSection === 'contact' ? 'text-[#D32F2F]' : 'text-slate-300 hover:text-white'}`}>
              {t.nav.contact}
              {activeSection === 'contact' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D32F2F]" />}
            </a>
          </nav>

          {/* Right controls - Simplified (No Switchers) */}
          <div className="flex items-center gap-3">
            {/* Direct Link CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-md shadow-[#D32F2F]/20"
            >
              {t.nav.contact}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded hover:bg-white/10 text-slate-300"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D253F] border-b border-white/10 py-4 px-6 flex flex-col gap-4">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-350 hover:text-white font-bold tracking-wider py-2 border-b border-white/5"
            >
              {language === 'en' ? 'Home' : '首页'}
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-350 hover:text-white font-bold tracking-wider py-2 border-b border-white/5"
            >
              {t.nav.capabilities}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded bg-[#D32F2F] text-center text-white text-xs font-bold uppercase tracking-wider block"
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (Compact spacing, deep blue bg, no huge vertical padding) */}
      <section id="hero" className="relative bg-[#0D253F] text-white py-12 md:py-16 overflow-hidden" aria-label="Hero Section">
        {/* Subtle SVG Grid Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Deep navy radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_#173b60,_transparent_60%)] opacity-40 pointer-events-none"></div>

        {/* Abstract Outbound Global Lines SVG backdrop */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="300" cy="300" r="180" stroke="white" strokeWidth="1.5" />
            <path d="M100 300 Q 300 100 500 300" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M100 300 Q 300 500 500 300" stroke="#D32F2F" strokeWidth="2" />
            <circle cx="300" cy="300" r="8" fill="#D32F2F" />
            <circle cx="100" cy="300" r="5" fill="#D4AF37" />
            <circle cx="500" cy="300" r="5" fill="white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-350 tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.hero.badge}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans leading-tight tracking-tight text-[#D4AF37]">
              {t.hero.titleFirst} <br className="hidden sm:block" />
              {t.hero.titleSecond}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-body max-w-2xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded bg-[#D32F2F] hover:bg-[#b71c1c] font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] flex items-center gap-2 shadow-lg shadow-[#D32F2F]/20 text-white cursor-pointer"
              >
                {t.hero.ctaDemo} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics display block */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#D4AF37] font-sans">{t.metrics.m1Val}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 leading-snug">{t.metrics.m1Label}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#D4AF37] font-sans">{t.metrics.m2Val}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 leading-snug">{t.metrics.m2Label}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#D4AF37] font-sans">{t.metrics.m3Val}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 leading-snug">{t.metrics.m3Label}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#D4AF37] font-sans">{t.metrics.m4Val}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 leading-snug">{t.metrics.m4Label}</div>
              </div>
            </div>
          </div>

          {/* Right Structural Visual Component (Outbound Logistics & Trade Hub Image) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group">
              
              {/* Highlight Border Frame Overlay */}
              <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-3xl pointer-events-none z-20" />
              
              {/* The Image generated by nanobanana */}
              <img
                src="/img/takinbot_global_logistics.png"
                alt="Takinbot Global Logistics Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-10"
              />

              {/* Gradient overlay to make text highly readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none" />

              {/* Dynamic Overlay Info Panel */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md rounded-2xl border border-white/10 p-4 z-20">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-pulse shadow-[0_0_10px_#D32F2F]" />
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider font-sans">
                    {language === 'zh' ? '拓新搏图全球渠道整合' : 'Takinbot Global Channels'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-body">
                  {language === 'zh'
                    ? '整合全球一流销售渠道与进口商，协助中国优质工厂拓展海外市场。'
                    : 'Integrating top-tier sales channels and importers to help premium Chinese factories expand global markets.'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE CAPABILITIES SECTION (Grid structure, Navigator Blue accents) */}
      <section id="capabilities" className="py-24 bg-[#F8F9FA] transition-colors duration-300 dark:bg-[#0F172A]" aria-labelledby="cap-title">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-block px-3 py-1 bg-[#0D253F]/10 dark:bg-white/5 text-[#0D253F] dark:text-[#D4AF37] border border-[#0D253F]/15 dark:border-white/10 rounded font-sans text-[10px] font-bold uppercase tracking-widest">
              {language === 'zh' ? '数字化出海壁垒' : 'Core Strategy'}
            </span>
            <h2 id="cap-title" className="text-3xl sm:text-4xl font-black text-[#0D253F] dark:text-white leading-tight">
              {t.capabilities.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-body">
              {t.capabilities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 2: SKU Search */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-[#D32F2F]/30 dark:hover:border-[#D4AF37]/30 transition-all group flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="p-3 bg-[#0D253F]/5 dark:bg-white/5 border border-[#0D253F]/10 dark:border-white/10 rounded-xl w-fit group-hover:bg-[#0D253F] group-hover:text-white transition-colors duration-300">
                  <Database className="w-6 h-6 text-[#0D253F] group-hover:text-white dark:text-[#D4AF37]" />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold tracking-widest text-[#D32F2F] uppercase">{t.capabilities.c2Badge}</span>
                  <h3 className="text-base font-bold text-[#0d253f] dark:text-white tracking-tight">{t.capabilities.c2Title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body">{t.capabilities.c2Desc}</p>
                </div>
              </div>
            </div>

            {/* Card 3: AI Intercept */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-[#D32F2F]/30 dark:hover:border-[#D4AF37]/30 transition-all group flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="p-3 bg-[#0D253F]/5 dark:bg-white/5 border border-[#0D253F]/10 dark:border-white/10 rounded-xl w-fit group-hover:bg-[#0D253F] group-hover:text-white transition-colors duration-300">
                  <Cpu className="w-6 h-6 text-[#0D253F] group-hover:text-white dark:text-[#D4AF37]" />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold tracking-widest text-[#D32F2F] uppercase">{t.capabilities.c3Badge}</span>
                  <h3 className="text-base font-bold text-[#0d253f] dark:text-white tracking-tight">{t.capabilities.c3Title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body">{t.capabilities.c3Desc}</p>
                </div>
              </div>
            </div>

            {/* Card 4: Direct Bridge */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-[#D32F2F]/30 dark:hover:border-[#D4AF37]/30 transition-all group flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="p-3 bg-[#0D253F]/5 dark:bg-white/5 border border-[#0D253F]/10 dark:border-white/10 rounded-xl w-fit group-hover:bg-[#0D253F] group-hover:text-white transition-colors duration-300">
                  <Layers className="w-6 h-6 text-[#0D253F] group-hover:text-white dark:text-[#D4AF37]" />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold tracking-widest text-[#D32F2F] uppercase">{t.capabilities.c4Badge}</span>
                  <h3 className="text-base font-bold text-[#0d253f] dark:text-white tracking-tight">{t.capabilities.c4Title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body">{t.capabilities.c4Desc}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CORPORATE INQUIRY FORM (Inquiry routing to contact@takinbot.com, validation) */}
      <section id="contact" className="py-24 bg-[#0D253F] text-white" aria-labelledby="inquiry-title">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6 text-left self-center">
              <h2 id="inquiry-title" className="text-3xl font-black font-sans leading-tight">
                {t.contact.title}
              </h2>
              
              <p className="text-sm text-slate-350 leading-relaxed font-body">
                {t.contact.subtitle}
              </p>

              <div className="space-y-4 pt-4 border-t border-white/5 font-sans text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded border border-white/10">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase tracking-wider text-[8px] font-bold">{t.contact.emailLabel}</span>
                    <a href="mailto:contact@takinbot.com" className="text-[#D4AF37] font-bold hover:underline">contact@takinbot.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded border border-white/10">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase tracking-wider text-[8px] font-bold">{t.contact.locationLabel}</span>
                    <span className="font-semibold text-white">
                      {language === 'zh' ? '中国 上海浦东张江自贸区' : 'Zhangjiang FTZ, Pudong, Shanghai, China'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/60 rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl relative">
                
                {inquirySubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                    <h3 className="text-lg font-bold font-sans">{language === 'zh' ? '合作意向已提交！' : 'Partnership Inquiry Submitted!'}</h3>
                    <p className="text-xs text-slate-305 leading-relaxed font-body">
                      {t.contact.formSuccess}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4 text-left">
                    <h3 className="text-base font-bold font-sans text-white border-b border-white/5 pb-3">
                      {t.contact.formTitle}
                    </h3>
                    
                    <div className="space-y-3.5">
                      <div>
                        <input
                          type="text"
                          value={inquiryCompany}
                          onChange={(e) => setInquiryCompany(e.target.value)}
                          placeholder={t.contact.formCompany}
                          className="w-full bg-[#09101d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#D4AF37] transition-all"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <input
                          type="text"
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                          placeholder={t.contact.formName}
                          className="w-full bg-[#09101d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#D4AF37] transition-all"
                          required
                        />
                        <input
                          type="text"
                          value={inquiryContactInfo}
                          onChange={(e) => setInquiryContactInfo(e.target.value)}
                          placeholder={t.contact.formContactInfo}
                          className="w-full bg-[#09101d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#D4AF37] transition-all"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          value={inquiryNotes}
                          onChange={(e) => setInquiryNotes(e.target.value)}
                          placeholder={t.contact.formNotes}
                          rows={4}
                          className="w-full bg-[#09101d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#D4AF37] transition-all resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={inquirySubmitting}
                      className="w-full py-3 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D32F2F]/20 mt-2"
                    >
                      {inquirySubmitting ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-3.5 h-3.5" />
                      )}
                      {t.contact.formSubmit}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. LOCAL FOOTER (Wordmark Logo Only, No taxicolor references) */}
      <footer className="bg-[#09101d] text-slate-400 py-16 text-xs border-t border-white/5" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Typographic Logo Column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <span className="flex items-center gap-2 block">
              <span className="text-2xl font-black tracking-widest font-sans select-none">
                <span className="text-white">拓新</span>
                <span className="text-[#D32F2F]">搏图</span>
              </span>
            </span>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'Takinbot helps Chinese manufacturers regain international pricing power.'
                : '拓新搏图  助力中国制造夺回国际定价权。'}
            </p>
          </div>

          {/* Quick links anchors column */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider">
              {language === 'en' ? 'Quick Access' : '快捷访问'}
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">{language === 'en' ? 'Home' : '首页'}</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">{t.nav.capabilities}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4 text-left font-sans">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider">
              {language === 'en' ? 'Outbound Office' : '出海技术支持处'}
            </h4>
            <div className="space-y-2 text-slate-400">
              <p>
                <strong className="text-white">{language === 'en' ? 'Technical Support: ' : '技术支持: '}</strong>
                <a href="mailto:contact@takinbot.com" className="text-[#D4AF37] hover:underline">contact@takinbot.com</a>
              </p>
              <p>
                <strong className="text-white">{language === 'en' ? 'HQ Location: ' : '联络地址: '}</strong>
                {language === 'en' ? 'Pudong Free Trade Zone, Shanghai, China' : '中国 上海市浦东新区自贸区'}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 font-mono text-[10px]">
          <p>&copy; {new Date().getFullYear()} takinbot. {language === 'en' ? 'All rights reserved.' : '版权所有。'}</p>
        </div>
      </footer>

    </div>
  );
}
