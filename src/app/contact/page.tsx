'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Send 
} from 'lucide-react';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'wechat' | 'whatsapp' | 'qq'>('wechat');
  const [copied, setCopied] = useState(false);

  // Form states
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || !inquiryType) return;

    setFormStatus('sending');
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormStatus('success');

    // Reset fields
    setCompany('');
    setWebsite('');
    setName('');
    setEmail('');
    setPhone('');
    setInquiryType('');
    setMessage('');

    setTimeout(() => setFormStatus('idle'), 4000);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-takinbot-dark flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-takinbot-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-takinbot-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 min-h-screen py-16 sm:py-24 relative overflow-hidden">
      
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-takinbot-orange/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest text-takinbot-orange bg-takinbot-orange/10 border border-takinbot-orange/20 rounded-full uppercase">
            {language === 'zh' ? '直连出海合伙人' : 'Direct Collaboration'}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {t.contact.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-body">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Column 1: Interactive consultation Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-white/10 shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-takinbot-orange/25 to-transparent" />
              
              <h3 className="font-heading text-base font-extrabold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/5 pb-4 mb-6 uppercase tracking-wider">
                {t.contact.formTitle}
              </h3>

              {formStatus === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-12 h-12 text-emerald-500 mx-auto bg-emerald-500/10 rounded-full p-2.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center"
                  >
                    <Check className="w-6 h-6" />
                  </motion.div>
                  <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">{t.common.success}</h4>
                  <p className="text-xs text-slate-505 dark:text-slate-400 max-w-md mx-auto leading-relaxed">{t.common.inquirySent}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Grid fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.contact.formCompany}</label>
                      <input 
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors dark:text-white text-slate-800"
                        placeholder={language === 'zh' ? '例如：河北清河某某滤清器制造厂' : 'e.g. Qinghe Auto Parts Factory'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.contact.formWebsite}</label>
                      <input 
                        type="url" 
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors dark:text-white text-slate-800"
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.contact.formName} *</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors dark:text-white text-slate-800"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.contact.formEmail} *</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors dark:text-white text-slate-800"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.contact.formPhone}</label>
                      <input 
                        type="text" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors dark:text-white text-slate-800"
                        placeholder={language === 'zh' ? '电话、微信或 WhatsApp' : 'Mobile or WeChat'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.contact.formType} *</label>
                      <select 
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange text-slate-700 dark:text-slate-350 transition-colors cursor-pointer"
                        required
                      >
                        <option value="" disabled>{t.contact.formTypePlaceholder}</option>
                        <option value="filtration">{t.contact.formTypeFiltration}</option>
                        <option value="molding">{t.contact.formTypeMolding}</option>
                        <option value="software">{t.contact.formTypeTech}</option>
                        <option value="ai">{t.contact.formTypeAI}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.contact.formMessage} *</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors resize-none dark:text-white text-slate-800"
                      placeholder={language === 'zh' ? '请输入您的主营产品（如重型空调滤清器）、现有 SKU 数量以及生产开模能力优势...' : 'Describe product lines, cross references and capabilities...'}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full sm:w-auto px-6 py-3.5 bg-takinbot-orange hover:bg-takinbot-orange/95 disabled:opacity-40 text-white font-heading text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formStatus === 'sending' ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    {t.contact.formBtn}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

          {/* Column 2: Standardized Glowing QR IM Hub */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-white/10 shadow-2xl relative flex-grow flex flex-col justify-between space-y-8">
              
              <div className="space-y-4">
                <h3 className="font-heading text-base font-extrabold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/5 pb-4 uppercase tracking-wider">
                  {t.contact.imTitle}
                </h3>
                <p className="text-xs text-slate-500 font-body leading-relaxed">
                  {t.contact.imSubtitle}
                </p>
              </div>

              {/* Tab Selector */}
              <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10 w-fit mx-auto">
                <button
                  onClick={() => setActiveTab('wechat')}
                  className={`px-4 py-2 text-[10px] font-bold font-heading uppercase rounded-lg transition-all duration-300 cursor-pointer ${
                    activeTab === 'wechat'
                      ? 'bg-takinbot-orange text-white shadow-glow-orange'
                      : 'text-slate-650 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {language === 'zh' ? '微信' : 'WeChat'}
                </button>
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`px-4 py-2 text-[10px] font-bold font-heading uppercase rounded-lg transition-all duration-300 cursor-pointer ${
                    activeTab === 'whatsapp'
                      ? 'bg-takinbot-orange text-white shadow-glow-orange'
                      : 'text-slate-650 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => setActiveTab('qq')}
                  className={`px-4 py-2 text-[10px] font-bold font-heading uppercase rounded-lg transition-all duration-300 cursor-pointer ${
                    activeTab === 'qq'
                      ? 'bg-takinbot-orange text-white shadow-glow-orange'
                      : 'text-slate-650 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  QQ
                </button>
              </div>

              {/* Glowing QR Content Panel */}
              <div className="relative flex justify-center py-4">
                <AnimatePresence mode="wait">
                  {activeTab === 'wechat' && (
                    <motion.div
                      key="wechat"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-48 aspect-square rounded-2xl border border-slate-350 dark:border-white/10 overflow-hidden bg-slate-900 relative shadow-glow-orange dark:shadow-glow-cyan flex items-center justify-center p-3"
                    >
                      <img src="/img/wechat.jpg" alt="WeChat Sourcing QR Code" className="w-full h-full object-cover rounded-xl" />
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-takinbot-orange dark:bg-takinbot-cyan animate-pulse z-15 shadow-[0_0_8px_#FF6B00]" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }} />
                    </motion.div>
                  )}

                  {activeTab === 'whatsapp' && (
                    <motion.div
                      key="whatsapp"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-48 aspect-square rounded-2xl border border-slate-350 dark:border-white/10 overflow-hidden bg-slate-900 relative shadow-glow-orange dark:shadow-glow-cyan flex items-center justify-center p-3"
                    >
                      <img src="/img/whatsapp.jpg" alt="WhatsApp Sourcing QR Code" className="w-full h-full object-cover rounded-xl" />
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-takinbot-orange dark:bg-takinbot-cyan animate-pulse z-15 shadow-[0_0_8px_#FF6B00]" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }} />
                    </motion.div>
                  )}

                  {activeTab === 'qq' && (
                    <motion.div
                      key="qq"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-48 aspect-square rounded-2xl border border-slate-350 dark:border-white/10 overflow-hidden bg-slate-900 relative shadow-glow-orange dark:shadow-glow-cyan flex items-center justify-center p-3"
                    >
                      <img src="/img/whatsapp.jpg" alt="QQ Procurement QR Code" className="w-full h-full object-cover rounded-xl" />
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-takinbot-orange dark:bg-takinbot-cyan animate-pulse z-15 shadow-[0_0_8px_#FF6B00]" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* IM Description & Actions */}
              <div className="border-t border-slate-200 dark:border-white/5 pt-4 text-center space-y-4">
                <p className="text-[11px] text-slate-500 leading-relaxed font-body">
                  {activeTab === 'wechat' && t.contact.wechatDesc}
                  {activeTab === 'whatsapp' && t.contact.whatsappDesc}
                  {activeTab === 'qq' && t.contact.qqDesc}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => handleCopy(t.common.email)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-heading text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 dark:border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? (language === 'zh' ? '已复制' : 'Copied') : (language === 'zh' ? '复制邮箱' : 'Copy Email')}
                  </button>
                  <a
                    href={`mailto:${t.common.email}`}
                    className="px-4 py-2 bg-white hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-350 font-heading text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 dark:border-white/10 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {language === 'zh' ? '直接写信' : 'Direct Mail'}
                  </a>
                  {activeTab === 'whatsapp' && (
                    <a
                      href="https://wa.me/8618301779691"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-takinbot-orange hover:bg-takinbot-orange/95 text-white font-heading text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      {t.contact.openChat} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
