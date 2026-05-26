'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Settings, 
  Terminal, 
  Cpu, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  LineChart,
  MessageSquare,
  Award,
  Laptop,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function HomePage() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [skuCount, setSkuCount] = useState(1000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  // Cost calculator variables
  const alibabaAnnualFee = 29800; // Standard member annual fee (flat rate)
  const alibabaOperatingCost = 15000 + Math.round(skuCount * 1.5); // Keyword promotion / basic ads scale with SKU catalog size
  const traditionalAgencyFee = 35000 + Math.round(skuCount * 5.0); // Traditional dev agencies charge manual entry fees per SKU
  
  const partnerSetupFee = 5000; // takinbot setup (flat rate due to AI/scripts automated upload)
  const partnerMonthlyFee = 500; // takinbot maintenance/ops (flat rate)
  const partnerAnnualTotal = partnerSetupFee + (partnerMonthlyFee * 12); // ¥11,000 first year

  const traditionalTotal = alibabaAnnualFee + alibabaOperatingCost + traditionalAgencyFee;
  const savings = traditionalTotal - partnerAnnualTotal;
  const efficiencyGain = 10; // AI operations are 10x faster

  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-takinbot-orange" />,
      badge: t.philosophy.col1Title,
      title: language === 'zh' ? '极致低门槛绑定' : 'Extremely Low Setup',
      desc: t.philosophy.col1Desc,
    },
    {
      icon: <Laptop className="w-6 h-6 text-takinbot-cyan" />,
      badge: t.philosophy.col2Title,
      title: language === 'zh' ? '大厂全栈自研' : 'Full-Stack Self-Developed',
      desc: t.philosophy.col2Desc,
    },
    {
      icon: <Cpu className="w-6 h-6 text-takinbot-orange" />,
      badge: t.philosophy.col3Title,
      title: language === 'zh' ? 'AI 极致赋能运营' : 'AI-Accelerated Workflows',
      desc: t.philosophy.col3Desc,
    },
    {
      icon: <Globe className="w-6 h-6 text-takinbot-cyan" />,
      badge: t.philosophy.col4Title,
      title: language === 'zh' ? '国际化谈判对接' : 'Direct Global Communication',
      desc: t.philosophy.col4Desc,
    }
  ];

  const faqsList = language === 'zh' ? [
    {
      q: '为什么只收 ¥5000 建站费和 ¥500/月？别的公司都是收几万？',
      a: '因为图南是一个有大厂全栈背景的独立合伙人，没有销售团队的佣金提成，没有写字楼高昂的租金公摊，且所有系统底层、自动化运营脚本和 AI 工作流均为全栈自研。极低的边际成本让我们能以 ¥5000 开荒、¥500 月度维护的“纯工本价”合作。我们不靠建站暴利赚钱，真正的共赢在于深入车间绑定工厂、积累 SKU 数据库，未来通过大货询价抽佣或联合打造自主品牌变现。'
    },
    {
      q: '自研独立站和外面普通的 SaaS（如 Shopify/Shopline）有什么区别？',
      a: 'SaaS 建站虽然快，但存在两大致命短板：一是每年数千至数万的强制年费或交易扣点，且后台无法完全定制；二是无法灵活开发高难度的 B2B OEM 筛选数据库。拓新搏图的独立站采用全栈自研技术，运行在 Cloudflare 全球边缘网络，打开速度提升 3 倍。最重要的是，我们能根据您的产品特征（如汽车滤清器的多重对照 OEM 码、聚氨酯配件的物理拉伸拉力定制表单），在几小时内光速定制开发，无需等待，无需受制于人。'
    },
    {
      q: '海外社媒和视频运营具体包括哪些？我需要提供什么？',
      a: '社媒运营并非枯燥地发广告，而是将工厂最硬核、最诚实的“制作者故事”讲给海外买家。我们会协助您搭建并精细维护 YouTube、LinkedIn、Facebook 和 Instagram 主页。我们会使用 AI 工作流快速编写流利的外贸英文脚本，您只需要配合拍摄或提供几段手机录制的车间产线、开模浇注、质检测试的毛片，我们即可在上海制作出极具工业感和科技度的高级短视频进行分发，精准拦截海外大贸易商。'
    },
    {
      q: '我是清河滤清器厂（或其他行业的厂长），我们没有专职外贸员怎么办？',
      a: '这正是“出海合伙人”的核心价值。图南具备无缝的英语商务谈判与工程答疑能力。当海外买家通过我们的自研独立站或社媒发送大宗采购询盘时，信息不会因为中转翻译而损耗。我们会直接介入进行英文答疑、核算 FOB 价格，并理顺上海港海运通关，相当于用 ¥500/月的成本，直接给您配备了一个身在上海、大厂技术背景的海外营销事业部。'
    }
  ] : [
    {
      q: 'Why only ¥5,000 setup fee and ¥500/month? Traditional agencies charge ten times more.',
      a: 'Because Tunan operates as an independent partner with former big-tech full-stack architect capabilities. There are no sales commissions, no expensive office overhead, and all translation, data collection, and page generation scripts are automated and self-developed. We do not look for short-term quick wins from template sites; we bind with your workshop to consolidate product SKUs, securing long-term profits through commission sharing and brand value growth.'
    },
    {
      q: 'What is the difference between your self-developed B2B site and SaaS templates (like Shopify)?',
      a: 'Standard SaaS templates impose permanent fees, offer zero custom database access, and cannot handle complex automotive or industrial SKU cross-reference tables. Our portals run on bleeding-edge static code deployed to Cloudflare Global Edges, yielding 3x faster page loads. We can program custom B2B features (like OEM number searchers, material load filters) in hours instead of weeks, offering infinite agility.'
    },
    {
      q: 'What does the social media and video operations involve? What do I need to prepare?',
      a: 'Social media is not about boring ads; it is about telling the honest maker story. We manage YouTube, LinkedIn, Facebook, and Instagram. We write professional English scripts with in-house AI and turn raw assembly line videos recorded by your workers into premium industrial visual content that commands trust from major global buyers.'
    },
    {
      q: 'We do not have a dedicated English salesperson at our workshop. How does this work?',
      a: 'That is exactly why you need a Going-Global Partner. Tunan handles the B2B negotiation, technical specifications, and logistics direct clearings with Shanghai FTZ. When an inquiry lands on your custom website, Tunan answers technical buyer questions, quotes FOB details, and manages container clearing, providing a complete overseas marketing division for a fraction of a junior worker\'s cost.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-takinbot-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-takinbot-dark dark:bg-takinbot-dark-soft text-slate-300 text-center text-[10px] sm:text-[11px] py-2.5 px-4 border-b border-white/5 tracking-wider font-semibold">
        💡 <span className="text-takinbot-orange font-bold">{language === 'zh' ? '出海试点捷报：' : 'OUTBOUND PILOT REPORT:'}</span> {language === 'zh' 
          ? '清河滤清器试点案例站 (filtration.takinbot.com) 已上线，6,000+ SKU 跨境独立站及 FOB 询价闭环测试成功，直接拦截一手采购商。' 
          : 'Qinghe auto filter showcase (filtration.takinbot.com) goes live, integrating 6,000+ SKU cross-references & FOB inquiries with great success.'}
      </div>

      {/* 2. Premium Maker Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-16 sm:py-24 overflow-hidden" aria-label="Hero Outbound Strategy">
        {/* Colorful Gradients & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-takinbot-cyan/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-takinbot-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-takinbot-orange/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Hero text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest text-takinbot-orange bg-takinbot-orange/10 border border-takinbot-orange/35 rounded-full uppercase animate-pulse">
              {t.hero.badge}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              {t.hero.titleFirst} <br />
              <span className="bg-gradient-to-r from-takinbot-orange to-amber-500 bg-clip-text text-transparent">
                {t.hero.titleSecond}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-2xl leading-relaxed font-body">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/business" 
                className="px-6 py-3.5 rounded bg-takinbot-orange hover:bg-takinbot-orange/95 font-heading text-xs font-bold uppercase tracking-wider transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] flex items-center gap-2 text-white cursor-pointer"
              >
                {t.hero.ctaWork} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3.5 rounded border border-slate-350 dark:border-white/20 hover:border-takinbot-orange dark:hover:border-takinbot-cyan bg-white/5 hover:bg-takinbot-orange/5 dark:hover:bg-takinbot-cyan/5 text-slate-800 dark:text-white font-heading text-xs font-bold uppercase tracking-wider transition-all hover:translate-y-[-2px]"
              >
                {t.hero.ctaContact}
              </Link>
            </div>
            
            {/* Quick SOHO stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-white/5 font-heading">
              <div>
                <div className="text-2xl font-extrabold text-takinbot-orange">¥5,000</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">{language === 'zh' ? '一次性建站费用' : 'One-Time Setup Fee'}</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-takinbot-orange">¥500/月</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">{language === 'zh' ? '极致代运营维护' : 'Monthly Maintenance'}</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-takinbot-orange">10x Speed</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">{language === 'zh' ? 'AI 赋能内容运营' : 'AI-Powered Content'}</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-takinbot-orange">100% 自研</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">{language === 'zh' ? '拒绝模板/光速定制' : 'Full-Stack Custom'}</div>
              </div>
            </div>
          </motion.div>

          {/* Hero visual: High-tech Glassmorphism dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative group max-w-[380px] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-takinbot-orange to-takinbot-cyan rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="glass-card w-full aspect-[4/5] rounded-3xl flex flex-col justify-between p-6 shadow-2xl relative overflow-hidden border border-slate-200/50 dark:border-white/10">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-takinbot-cyan/30 to-transparent" />
                
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
                  <span className="font-heading text-[10px] font-bold text-slate-500 tracking-widest uppercase">{language === 'zh' ? '出海合伙人运行中心' : 'Outbound Partner Dashboard'}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-takinbot-orange animate-pulse shadow-[0_0_10px_#FF6B00]" />
                </div>

                {/* System Terminal overlay */}
                <div className="my-6 relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex-grow flex flex-col justify-between p-5 text-left font-body">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Sparkles className="w-4 h-4 text-takinbot-cyan" />
                      <span className="text-[10px] font-bold uppercase tracking-wider font-heading">{language === 'zh' ? '全栈 AI 引擎工作流已就绪' : 'All-Stack AI Pipeline Ready'}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full w-5/6 bg-gradient-to-r from-takinbot-cyan to-takinbot-orange rounded-full animate-pulse" />
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-body">
                        {language === 'zh' 
                          ? '清河滤清器案例站部署已同步 Cloudflare 节点。6000+ 滤清器规格对照表及 AI 翻译引擎运行平稳。'
                          : 'Qinghe auto filter case deployed to Cloudflare Global Edges. 6,000+ SKU cross-references live.'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Mock live terminal output */}
                  <div className="bg-black/50 border border-white/5 rounded-lg p-3 text-[9px] font-mono text-emerald-400 space-y-1">
                    <p className="text-slate-500">&gt; takinbot --outbound-status</p>
                    <p>✔ pilot_case: filtration.takinbot.com</p>
                    <p>✔ skus_mapped: 6,184 verified codes</p>
                    <p>✔ custom_oem_form: active_online</p>
                    <p>✔ ai_translation_speed: 120 SKUs/min</p>
                    <p>✔ global_cdn_speed: 18ms (Shanghai &rarr; Global)</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-4 text-center">
                  <p className="font-heading text-[9px] font-extrabold text-slate-500 tracking-wider uppercase">
                    {language === 'zh' ? '图南 • 拓新搏图出海技术支持' : 'Tunan • Outbound Tech Infrastructure'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. The Outbound Comparative Philosophy Section */}
      <section className="py-20 bg-slate-100/50 dark:bg-[#121826]/30 border-y border-slate-200 dark:border-white/5" aria-labelledby="soho-leverage-title">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="font-heading text-[10px] font-bold text-takinbot-orange tracking-widest uppercase">
              {language === 'zh' ? '五大核心竞争壁垒' : 'Core Capabilities'}
            </span>
            <h2 id="soho-leverage-title" className="font-heading text-3xl font-black text-slate-900 dark:text-white leading-tight">
              {t.philosophy.title}
            </h2>
            <p className="text-sm text-slate-500 font-body">
              {t.philosophy.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((col, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-takinbot-dark border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 glow-cyan-hover"
              >
                <div className="p-3 bg-slate-150 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 w-fit">
                  {col.icon}
                </div>
                <div className="space-y-2 flex-grow">
                  <span className="font-heading text-[9px] font-extrabold tracking-widest text-takinbot-orange uppercase">{col.badge}</span>
                  <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{col.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-body">{col.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIGH FIDELITY PILOT CASE SHOWCASE: filtration.takinbot.com */}
      <section className="py-20 max-w-7xl mx-auto px-6" aria-labelledby="pilot-showcase-title">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/50 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-takinbot-cyan/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-takinbot-cyan/35 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Screen Mockup */}
            <div className="lg:col-span-5 relative group flex justify-center">
              <div className="relative w-full max-w-[360px]">
                <div className="absolute -inset-1 bg-gradient-to-tr from-takinbot-cyan to-takinbot-orange rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300" />
                
                {/* Visual Dashboard representing filtration case study */}
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-between p-5 shadow-2xl">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-[9px] font-mono text-slate-400">https://filtration.takinbot.com</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  
                  {/* Central high-tech grid */}
                  <div className="flex-grow my-4 rounded-lg bg-black/40 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden font-body">
                    {/* Visual pattern representing filters */}
                    <div className="grid grid-cols-3 gap-2 opacity-80">
                      <div className="h-10 bg-gradient-to-br from-takinbot-cyan/20 to-transparent rounded-lg border border-takinbot-cyan/30 flex items-center justify-center text-[9px] font-bold text-takinbot-cyan">Cabin Filter</div>
                      <div className="h-10 bg-gradient-to-br from-takinbot-orange/20 to-transparent rounded-lg border border-takinbot-orange/30 flex items-center justify-center text-[9px] font-bold text-takinbot-orange">Oil Filter</div>
                      <div className="h-10 bg-gradient-to-br from-takinbot-cyan/20 to-transparent rounded-lg border border-takinbot-cyan/30 flex items-center justify-center text-[9px] font-bold text-takinbot-cyan">Engine Air</div>
                    </div>
                    
                    {/* Live showcase parameters */}
                    <div className="space-y-2 text-left pt-4">
                      <span className="text-[9px] font-extrabold tracking-wider text-slate-500 uppercase font-heading">{language === 'zh' ? '试点项目成果指标' : 'PILOT STATS'}</span>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-lg font-extrabold text-white font-heading">6,000+</div>
                          <div className="text-[8px] text-slate-500 font-bold uppercase">{language === 'zh' ? '车辆SKU交叉检索' : 'Cross SKUs'}</div>
                        </div>
                        <div>
                          <div className="text-lg font-extrabold text-white font-heading">&lt;18ms</div>
                          <div className="text-[8px] text-slate-500 font-bold uppercase">{language === 'zh' ? '海外分发打开响应' : 'CDN Response'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom visual overlay */}
                    <div className="bg-slate-950/80 border border-white/10 rounded-lg p-2.5 text-[8.5px] font-mono text-slate-400 text-left">
                      <span className="text-emerald-400 font-bold">&gt; client_inquiry: received</span>
                      <p className="mt-1">FOB Shanghai price computed, RFQ routing directly via self-developed engine.</p>
                    </div>
                  </div>

                  {/* Footer link */}
                  <div className="text-center pt-2 border-t border-white/5">
                    <span className="text-[8.5px] font-extrabold tracking-widest text-takinbot-cyan font-heading uppercase">
                      IATF 16949 PILOT SHOWROOM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase text column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="px-2.5 py-1 text-[10px] font-extrabold tracking-widest text-takinbot-cyan bg-takinbot-cyan/15 rounded-full uppercase border border-takinbot-cyan/30 inline-block">
                {language === 'zh' ? '强力推荐：极速出海试点案例' : 'PILOT SHOWCASE CASE STUDY'}
              </span>
              <h2 id="pilot-showcase-title" className="font-heading text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                {t.divisions.d4Title}
              </h2>
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-body">
                {language === 'zh' 
                  ? '这是我们针对“河北清河汽车滤清器产业集群”工厂开发的出海演示站。传统的代运营只会用 WordPress 随意套个卡顿的模板，无法整理庞杂的产品参数。我们深耕滤清器制造多年，利用大厂全栈自研框架，将 6,000+ 车载空气滤、空调滤、机油滤的 OEM/交叉对照码整理成高响应性数据库。海外买家能够瞬间搜索、精准锁定，并配合 100% 诚实的一手 FOB 上海港清关询价系统直接下单。'
                  : 'Our custom-coded showcase built for Hebei Qinghe automotive filter manufacturers. We restructured over 6,000 product models and OEM numbers into a lightning-fast catalog. Direct global distributors can search cross-reference database instantly and initiate direct FOB quotes with absolute transparent cost structures.'}
              </p>
              
              {/* Highlight bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  language === 'zh' ? '6,000+ 滤清器 SKU 数据库集成' : '6,000+ SKU database integrated',
                  language === 'zh' ? '媲美 Apple 的极致极简页面质感' : 'Premium ultra-minimal design style',
                  language === 'zh' ? '全自动中英双语与 FOB 询价触发' : 'Automated multi-language RFQ workflow',
                  language === 'zh' ? '直连上海自贸区拖车出港配套' : 'Direct Pudong Waigaoqiao FTZ support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-350">
                    <CheckCircle2 className="w-4 h-4 text-takinbot-cyan flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <a 
                  href="https://filtration.takinbot.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-takinbot-cyan to-blue-500 text-slate-950 font-heading text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] flex items-center gap-1.5"
                >
                  {t.divisions.d4CTA}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE VALUE & SAVINGS CALCULATOR FOR FACTORY OWNERS */}
      <section className="py-20 bg-slate-100/50 dark:bg-[#121826]/30 border-y border-slate-200 dark:border-white/5" aria-labelledby="savings-calculator-title">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="font-heading text-[10px] font-bold text-takinbot-orange tracking-widest uppercase">
              {language === 'zh' ? '出海效能计算器' : 'SAVINGS CALCULATOR'}
            </span>
            <h2 id="savings-calculator-title" className="font-heading text-3xl font-black text-slate-900 dark:text-white leading-tight">
              {language === 'zh' ? '告别阿里巴巴昂贵会费，算算你能省多少？' : 'Bypass Giant Platforms. Calculate Your Cost Efficiency.'}
            </h2>
            <p className="text-sm text-slate-500 font-body">
              {language === 'zh' 
                ? '我们拖动滑块选择您工厂需要出海的 SKU 数量，直观对比“拓新搏图出海合伙人”与传统大宗外贸代运营或阿里巴巴会员的成本。'
                : 'Slide to adjust your active product SKU count and inspect the cost comparison between our Outbound Partner model and traditional platforms.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Interactive Slider */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold font-heading">
                  <span className="text-slate-600 dark:text-slate-400">{language === 'zh' ? '您工厂拥有的核心产品 SKU 数量' : 'Product SKUs Count'}</span>
                  <span className="text-takinbot-orange text-lg font-black">{skuCount.toLocaleString()} SKU</span>
                </div>
                
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100" 
                  value={skuCount} 
                  onChange={(e) => setSkuCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-white/5 rounded-lg appearance-none cursor-pointer accent-takinbot-orange"
                />
                
                <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                  <span>100 SKUs</span>
                  <span>5,000 SKUs</span>
                  <span>10,000 SKUs</span>
                </div>
              </div>

              {/* Core differences list */}
              <div className="space-y-4 font-body text-xs">
                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl space-y-2">
                  <span className="text-[10px] font-extrabold text-red-500 tracking-wider font-heading uppercase">{language === 'zh' ? '传统阿里巴巴B2B / 广告代理商的痛点' : 'TRADITIONAL PLATFORMS PAIN-POINTS'}</span>
                  <p className="text-slate-550 dark:text-slate-400 leading-relaxed">
                    {language === 'zh'
                      ? '高昂会员年费（¥29,800起）+ 扣点，且需要额外买流量推广。代运营团队毫无技术背景，修改内容动辄等待数周，不懂英语，无法做复杂的参数数据库。'
                      : 'Exorbitant annual fees (¥29,800+) with no direct customer touch. Non-technical marketing staff who cannot customize catalog cross-references or communicate direct tech specs.'}
                  </p>
                </div>
                
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-2">
                  <span className="text-[10px] font-extrabold text-emerald-500 tracking-wider font-heading uppercase">{language === 'zh' ? '拓新搏图“出海合伙人”的颠覆优势' : 'TAKINBOT PARTNER ADVANTAGE'}</span>
                  <p className="text-slate-550 dark:text-slate-400 leading-relaxed">
                    {language === 'zh'
                      ? '首次 ¥5,000 一次性建站（全栈自研自产，终生无年费），月度维护仅 ¥500。配备大厂全栈开发，AI 高效翻译代写提效 10 倍，图南本人流利英语代谈海外客盘。'
                      : '¥5,000 one-time setup and ¥500/mo operations. No SaaS locked platform. 10x faster execution due to custom AI workflows, bilingual developer directly negotiating B2B contracts.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Numerical Comparison Cards */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-white/10 shadow-2xl relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-takinbot-orange/20 to-transparent" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-b border-slate-200 dark:border-white/5 pb-8">
                  <div className="text-left space-y-1">
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
                      {language === 'zh' ? '传统平台首年预估总开销' : 'Traditional Platforms 1st Year Cost'}
                    </p>
                    <h3 className="font-heading text-2xl font-black text-red-500">
                      ¥{traditionalTotal.toLocaleString()}
                    </h3>
                    <p className="text-[9px] text-slate-550 dark:text-slate-400 leading-relaxed">
                      * {language === 'zh' 
                        ? `包含 ¥29,800 年费 + 推广费 ¥${(15000 + Math.round(skuCount * 1.5)).toLocaleString()} + 录入建站费 ¥${(35000 + Math.round(skuCount * 5.0)).toLocaleString()} (按 SKU 数量加收人工录入/翻译费)` 
                        : `Includes ¥29,800 member fee + PPC ¥${(15000 + Math.round(skuCount * 1.5)).toLocaleString()} + manual dev/input fee ¥${(35000 + Math.round(skuCount * 5.0)).toLocaleString()}`}
                    </p>
                  </div>

                  <div className="text-left space-y-1">
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
                      {language === 'zh' ? '出海合伙人首年总成本' : 'takinbot Outbound 1st Year Cost'}
                    </p>
                    <h3 className="font-heading text-2xl font-black text-emerald-500">
                      ¥{partnerAnnualTotal.toLocaleString()}
                    </h3>
                    <p className="text-[9px] text-slate-550 dark:text-slate-400 leading-relaxed">
                      * {language === 'zh' ? '首次一次性开荒 ¥5,000 + ¥500/月度代运营服务（合计 12 个月）' : 'Includes ¥5,000 one-time developer setup + ¥500/mo monthly ops'}
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
                      {language === 'zh' ? '首年为您工厂立省资金' : 'Direct Annual Capital Savings'}
                    </p>
                    <h3 className="font-heading text-4xl font-black text-takinbot-orange drop-shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                      ¥{savings.toLocaleString()}
                    </h3>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 shrink-0 flex flex-col items-center sm:items-start">
                    <div className="font-heading text-lg font-black text-emerald-500">{efficiencyGain}x Efficiency</div>
                    <div className="text-[9px] text-slate-500 uppercase font-bold tracking-wider mt-1">
                      {language === 'zh' ? '大厂全栈自研 + AI 加持提效' : 'Custom AI Operations Rate'}
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 text-left mt-6 leading-relaxed font-body">
                  * {language === 'zh' 
                    ? '计算基于常规外贸工厂运营行情。图南提供的是“纯自研开发与合伙服务”，我们不赚取高昂建站差价，旨在成为您深度绑定的海外事业部。'
                    : 'Calculations are based on industry standards. Tunan serves as a dedicated strategic partner, prioritizing factory volume and commissions over markup.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Outbound Service Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-6" aria-labelledby="divisions-title">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="font-heading text-[10px] font-bold text-takinbot-orange tracking-widest uppercase">
            {language === 'zh' ? '三大出海武器' : 'Outbound Weapons'}
          </span>
          <h2 id="divisions-title" className="font-heading text-3xl font-black text-slate-900 dark:text-white leading-tight">
            {t.divisions.title}
          </h2>
          <p className="text-sm text-slate-500 font-body">
            {t.divisions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              badge: t.divisions.d1Badge,
              title: t.divisions.d1Title,
              desc: t.divisions.d1Desc,
              link: 'https://filtration.takinbot.com',
              isExternal: true,
              label: t.divisions.d1CTA,
              icon: <Laptop className="w-6 h-6 text-takinbot-orange" />
            },
            {
              badge: t.divisions.d2Badge,
              title: t.divisions.d2Title,
              desc: t.divisions.d2Desc,
              link: '/business',
              isExternal: false,
              label: t.divisions.d2CTA,
              icon: <Globe className="w-6 h-6 text-takinbot-cyan" />
            },
            {
              badge: t.divisions.d3Badge,
              title: t.divisions.d3Title,
              desc: t.divisions.d3Desc,
              link: '/business',
              isExternal: false,
              label: t.divisions.d3CTA,
              icon: <Cpu className="w-6 h-6 text-takinbot-orange" />
            }
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-white/10 flex flex-col justify-between space-y-6 shadow-md transition-all duration-300 hover:shadow-glow-orange hover:border-takinbot-orange/30 group"
            >
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-start">
                  <div className="p-3.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl w-fit">
                    {pillar.icon}
                  </div>
                  <span className="px-2.5 py-1 text-[9px] font-extrabold tracking-widest text-takinbot-orange bg-takinbot-orange/15 rounded uppercase">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed font-body">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex justify-between items-center">
                {pillar.isExternal ? (
                  <a
                    href={pillar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-extrabold text-takinbot-orange flex items-center gap-1 hover:underline"
                  >
                    {pillar.label} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href={pillar.link}
                    className="text-xs font-heading font-extrabold text-takinbot-orange flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    {pillar.label} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Comprehensive FAQ Accordion */}
      <section className="py-20 max-w-4xl mx-auto px-6" aria-labelledby="faq-title">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="font-heading text-[10px] font-bold text-takinbot-orange tracking-widest uppercase">
            {language === 'zh' ? '合伙出海答疑' : 'OUTBOUND SUPPORT FAQ'}
          </span>
          <h2 id="faq-title" className="font-heading text-3xl font-black text-slate-900 dark:text-white leading-tight">
            {language === 'zh' ? '出海常见疑问，帮您算明细账' : 'Common Outbound Queries'}
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="border border-slate-200 dark:border-white/5 rounded-2xl bg-white dark:bg-white/3 hover:border-slate-300 dark:hover:border-white/10 transition-colors overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left font-heading text-sm font-bold text-slate-900 dark:text-white transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4.5 h-4.5 text-takinbot-orange flex-shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-650 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-left border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#121826]/20 font-body">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Outbound CTA Section */}
      <section className="py-20 text-center max-w-7xl mx-auto px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden" role="region" aria-label="Outbound Call to Action">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-takinbot-orange/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="space-y-6 max-w-2xl mx-auto relative z-10">
          <span className="font-heading text-[10px] font-bold text-takinbot-orange tracking-widest uppercase">
            {language === 'zh' ? '开启联合出海' : 'Get Started'}
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            {language === 'zh' ? '把您工厂的专属“海外推广部”建起来。' : 'Direct Full-Stack Partnership. Scale Globally.'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-body">
            {language === 'zh' 
              ? '摆脱高年费中介与低效模板。无论是建立多语言极速车载独立站、搭建海外 LinkedIn 客户矩阵，还是拍摄媲美工业纪录片质感的车间大片，与图南携手，直通全球买家。'
              : 'Ditch rigid SaaS platforms and ineffective agencies. Partner with Tunan to deploy fast custom portals, script cinematic factory runs, and negotiate contract terms with absolute direct clarity.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link 
              href="/business" 
              className="px-6 py-3.5 bg-takinbot-orange hover:bg-takinbot-orange/95 text-white font-heading text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] cursor-pointer"
            >
              {t.common.business}
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-350 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 text-slate-800 dark:text-slate-200 font-heading text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
            >
              {t.common.contact}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
