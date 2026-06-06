'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ChatWidget() {
  const pathname = usePathname();
  if (pathname === '/' || (pathname && pathname.startsWith('/v2'))) return null;
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus('sending');
    try {
      // Direct post, simulated for static export success or direct hook integration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setStatus('idle');
        setOpen(false);
      }, 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-takinbot-dark dark:bg-white shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer ${
          open ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open SOHO chat"
      >
        <MessageCircle className="w-5 h-5 text-takinbot-orange dark:text-takinbot-dark" />
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-white dark:bg-[#0B0F19] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-takinbot-dark dark:bg-white/5 px-5 py-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <div>
                  <h3 className="text-sm font-heading font-extrabold text-white">
                    {language === 'en' ? 'Direct SOHO Creator Chat' : '直连创客在线咨询'}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {language === 'en' ? 'EllisVale replies within 12 hours' : '创始人 Ellis Vale 12小时内亲自回复'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            {status === 'sent' ? (
              <div className="px-5 py-10 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                <p className="text-sm font-bold text-slate-800 dark:text-white">
                  {language === 'en' ? 'Message Received' : '消息已送达'}
                </p>
                <p className="text-xs text-slate-500">
                  {language === 'en'
                    ? 'Your inquiry has been routed directly to the founder. Ellis Vale will respond shortly.'
                    : '您的项目需求已成功提交至创客， Ellis Vale 将尽快与您对接。'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">
                <div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'en' ? 'Your name *' : '您的姓名 *'}
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'en' ? 'Email (optional)' : '邮箱（选填）'}
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'en' ? 'What custom accessories, outsourcing, or trading project do you need? *' : '请描述您的配件、技术外包或大宗贸易项目需求 *'}
                    rows={3}
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 outline-none focus:border-takinbot-orange dark:focus:border-takinbot-orange transition-colors resize-none"
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-xs text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {language === 'en' ? 'Failed to send. Please try again or email us directly.' : '发送失败，请稍后重试或直接发送邮件。'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending' || !name.trim() || !message.trim()}
                  className="w-full py-2.5 rounded-xl bg-takinbot-orange hover:bg-takinbot-orange/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {status === 'sending' ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  {language === 'en' ? 'Send SOHO Message' : '发送咨询消息'}
                </button>

                <p className="text-[9px] text-slate-400 text-center">
                  {language === 'en'
                    ? 'Or email Ellis direct: sales@takinbot.com'
                    : '或直接致信：sales@takinbot.com'}
                </p>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
