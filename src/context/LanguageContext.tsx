'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'zh';

// Detailed translation dictionary for Takinbot Outbound Partner (出海合伙人) Portal
export const dictionary = {
  en: {
    common: {
      companyName: 'takinbot',
      companySub: 'Your Going-Global Partner',
      location: 'Shanghai, China',
      allRightsReserved: 'All rights reserved.',
      contactUs: 'Become a Partner',
      home: 'Home',
      story: 'Partner Story',
      business: 'Outbound Weapons',
      contact: 'Get in Touch',
      readMore: 'Learn More',
      viewFiltration: 'Explore Case Study',
      sendRequest: 'Submit Partnership Inquiry',
      submitting: 'Submitting...',
      success: 'Inquiry Submitted Successfully',
      inquirySent: 'Thank you! Your inquiry has been routed directly to Tunan. Expect a preliminary technical and strategic outbound assessment within 12 hours.',
      email: 'tunan@takinbot.com'
    },
    nav: {
      home: 'Home',
      story: 'Philosophy',
      business: 'Three Weapons',
      contact: 'Connect Tunan',
    },
    hero: {
      tagline: 'Former Big-Tech Engineer • Highly Agile • Direct Factory Partnership',
      titleFirst: 'Skip the Middlemen Trading Agencies,',
      titleSecond: 'Your Dedicated Overseas Dept.',
      subtitle: 'I am Tunan. Operating from Shanghai, I design products, write scalable code, and partner directly with SME factories (like Qinghe Auto Filter clusters). No high upfront fees or sales pitches—just ¥5,000 one-time setup and ¥500/month. We leverage custom full-stack code, self-developed pipelines, and AI workflows to scale your factory globally.',
      ctaWork: 'Explore My Model & Services',
      ctaContact: 'Direct Talk with Tunan',
      badge: 'Going-Global Partner Program • Shanghai Design Direct-to-Factory',
    },
    philosophy: {
      title: 'The Outbound Partner Philosophy',
      subtitle: 'Why working with an elite, highly competent independent engineer-partner is the modern path for factories looking to export.',
      col1Title: 'Low Cost, High Binding',
      col1Desc: 'Only ¥5,000 setup and ¥500/month. We do not profit off inflated website templates; we succeed when we capture real SKU data and scale together on transaction commissions.',
      col2Title: 'Full-Stack Big Tech Edge',
      col2Desc: 'Independent portals, inquiry triggers, and tracking systems are entirely self-developed. No SaaS template limits—complex custom OEM catalog tools are launched in hours.',
      col3Title: 'AI-Boosted Operations (10x Speed)',
      col3Desc: 'We deploy in-house AI pipelines to generate multi-language descriptions, social media videos, scripts, and analyze international buyer intent at lightning speeds.',
      col4Title: 'Seamless English & Conversion',
      col4Desc: 'Native-level English negotiations, technical specification support, and a deep understanding of B2B buyers trust workflows, multiplying inquiry conversion rates.',
    },
    divisions: {
      title: 'Three Outbound Weapons & Case Showcases',
      subtitle: 'We only focus on high-impact assets that drive actual traffic and inquiry leads to your workshop.',
      d1Badge: 'Digital Flagship',
      d1Title: 'Premium Multilingual B2B Website',
      d1Desc: 'We build blisteringly fast, elegant B2B portals matching Apple-style aesthetics. Features a full product SKU library, direct RFQ system, custom client templates, and seamless mobile responsiveness.',
      d1CTA: 'Visit filtration.takinbot.com Demo',
      
      d2Badge: 'Social Media Matrix',
      d2Title: 'Global Social Media Operations',
      d2Desc: 'Setup and active daily profiling of YouTube, LinkedIn, Facebook, and Instagram. We target overseas distributors, present raw workshop craftsmanship, and source high-intent global buyers.',
      d2CTA: 'Learn Social Media Details',

      d3Badge: 'Industrial Cinema',
      d3Title: 'Cinema-Quality Video Production',
      d3Desc: 'No cheap stock photos. We script, produce, and edit highly cinematic videos highlighting product specs, heavy-duty assembly lines, and genuine founder stories that command trust.',
      d3CTA: 'Watch Video Standards',

      d4Badge: 'Live Showcase Case Study',
      d4Title: 'Qinghe Filters Portal (filtration.takinbot.com)',
      d4Desc: 'Our successful pilot case for Qinghe automotive filter manufacturers. We consolidated 6,000+ SKUs, designed full private label boxes, and built a live FOB pricing catalog that scales globally.',
      d4CTA: 'Visit Live Pilot Showcase ↗'
    },
    about: {
      title: 'The Story Behind takinbot',
      subtitle: 'Honest, Competent, Hands-on Industrial Partner',
      storyText1: 'takinbot (拓新搏图) is the personal brand of Tunan, a former big-tech full-stack engineer and product designer. Disillusioned by traditional slow, overpriced trading agencies and cookie-cutter SaaS marketing tools, Tunan packed his bags from Shanghai offices and moved directly into automotive filter and manufacturing workshops in Hebei Qinghe and beyond.',
      storyText2: 'Traditional trading companies do not understand mechanical tolerances or web system databases, while giant manufacturing bases struggle with global branding, English negotiation, and SEO. By merging large-scale system engineering (self-developed custom web frameworks, automated translation pipelines) with deep trade logistics, I act as your complete overseas department for the price of a single junior worker.',
      storyText3: 'We do not sell expensive fluff. We provide extreme execution velocity, absolute honesty, and deep partnership. From rendering high-fidelity 3D box styles to coding robust search catalogs and directly presenting technical parameters to German or American buyers, Tunan is sleeping in the factory to ensure your products conquer the global B2B grid.',
    },
    contact: {
      title: 'Establish Direct Contact with Tunan',
      subtitle: 'Skip sales reps. Talk directly to the engineer who codes your portal, shoots your videos, and manages your export.',
      formTitle: 'Submit Factory Outbound Profile',
      formCompany: 'Factory Name',
      formWebsite: 'Current Website (If any)',
      formName: 'Your Name & Title',
      formEmail: 'Email Address',
      formPhone: 'Mobile / WeChat / WhatsApp',
      formType: 'Primary Outbound Support Needed',
      formTypePlaceholder: 'Select Outbound Focus...',
      formTypeFiltration: 'B2B Independent Website Setup (¥5000)',
      formTypeMolding: 'Social Media & Inquiry Generation (¥500/mo)',
      formTypeTech: 'Cinematic Factory Video Production',
      formTypeAI: 'Full Suite Partnership (¥5000 + ¥500/mo)',
      formMessage: 'Describe Your Main Products, SKU Count & Production Capacity',
      formBtn: 'Submit Profile to Tunan',
      imTitle: 'Instant WeChat & WhatsApp Hub',
      imSubtitle: 'Scan directly to start a technical audit of your product catalog. Get feedback within minutes.',
      wechatLabel: 'WeChat Sourcing',
      whatsappLabel: 'WhatsApp Chat',
      qqLabel: 'QQ Procurement',
      wechatDesc: 'Scan to add Founder & Engineer Tunan directly to send product catalogs and tooling specifications.',
      whatsappDesc: 'Click or scan to chat directly with Tunan for international logistics and FOB pricing consultation.',
      qqDesc: 'Scan with QQ to connect with our technical operations team for file transfers and CAD files.',
      openChat: 'Launch Instant Message',
    }
  },
  zh: {
    common: {
      companyName: 'takinbot',
      companySub: '中国工厂的专属“出海合伙人”',
      location: '中国 上海',
      allRightsReserved: '版权所有。',
      contactUs: '成为合伙人',
      home: '首页',
      story: '合伙人主张',
      business: '三大出海武器',
      contact: '直连图南',
      readMore: '了解更多',
      viewFiltration: '查看案例演示站',
      sendRequest: '提交合作意向',
      submitting: '提交中...',
      success: '意向提交成功',
      inquirySent: '感谢您的信任！您的出海诉求已直接发送给图南。我们将在 12 小时内为您输出一份初步的技术与出海渠道评估。',
      email: 'tunan@takinbot.com'
    },
    nav: {
      home: '首页',
      story: '合伙人主张',
      business: '三大出海武器',
      contact: '直连图南',
    },
    hero: {
      tagline: '大厂全栈工程师背景 • 极致敏捷 • 深度绑定工厂',
      titleFirst: '帮助中国工厂跳过外贸中介，',
      titleSecond: '做你专属的“海外事业部”。',
      subtitle: '我是图南。在上海做产品设计与系统研发，直连清河等产业集群车间。我们不玩虚的——首次 ¥5,000 建站，月维护 ¥500。我们用大厂全栈技术、自研系统与 AI 高效提效，把工厂的一手好货通过独立站和社媒真正销往全球。',
      ctaWork: '了解服务与模式',
      ctaContact: '立刻扫码/直连图南',
      badge: '出海合伙人计划 • 上海研发直通车间',
    },
    philosophy: {
      title: '为什么我们需要“出海合伙人”？',
      subtitle: '这不是一家层层转包的广告大厂，也不是只会收昂贵年费的建站公司，而是一个技术、外贸、设计兼备的独立品牌。',
      col1Title: '超低门槛，深度绑定',
      col1Desc: '首次费用 ¥5000，月维护 ¥500。我们不靠建站噱头暴利赚钱，我们通过极低的门槛深度绑定工厂，未来靠 SKU 数据和实际询价抽佣实现共赢。',
      col2Title: '大厂技术，全栈自研',
      col2Desc: '独立站、询价系统、后端数据后台完全自研。没有第三方 SaaS 模板束缚，任何复杂的 OEM 定制需求或品类筛选，数小时内即可上线。',
      col3Title: 'AI 极致效率提效 10 倍',
      col3Desc: '自主部署 AI 工作流，高效生成多语言描述、社媒文案、短视频脚本并精准识别询价客户意图，1 人干出 10 人团队的活。',
      col4Title: '国际化沟通与转化',
      col4Desc: '具备无缝的英语商务谈判与技术答疑能力，理解海外 B2B 买家信任机制，让询价转化率提升 3 倍。',
    },
    divisions: {
      title: '三大出海武器与试点案例',
      subtitle: '只做实实在在能带来询价与流量的事情，没有人力堆砌，全靠技术与效率驱动。',
      d1Badge: '数字化旗舰店',
      d1Title: '高颜值多语言外贸独立站',
      d1Desc: '我们为您开发响应极快、比肩 Apple 官网设计的独立站。具备完整的产品 SKU 信息库、动态维护、自动多语言翻译及精密的询价追踪系统，全面通过移动端自适应。',
      d1CTA: '访问 filtration.takinbot.com 案例演示站',
      
      d2Badge: '海外社媒矩阵',
      d2Title: '海外社媒矩阵代运营',
      d2Desc: '为您搭建并精细化代运营 YouTube、LinkedIn、Facebook、Instagram 等企业主页。通过垂直社媒发布产品实拍与工厂故事，精准匹配海外目标大客户与贸易商。',
      d2CTA: '了解社媒代运营交付细则',

      d3Badge: '工业质感大片',
      d3Title: '短视频与品牌视觉制作',
      d3Desc: '拒绝廉价拼贴图。我们定期策划制作具备极强工业级质感的产品展示视频、生产线作业视频及诚实的工厂故事纪录片，在 YouTube 和独立站树立海外买家的高感信任。',
      d3CTA: '看我们的视频交付标准',

      d4Badge: '试点案例展示',
      d4Title: '清河滤清器案例站 filtration.takinbot.com',
      d4Desc: '作为我们首个成功跑通的试点——清河汽车滤清器案例站。我们为该工厂整理了 6,000+ SKU，设计了全套彩牌贴牌体系与 FOB 询价机制。',
      d4CTA: '点击访问现场案例 ↗'
    },
    about: {
      title: '图南与拓新搏图的故事',
      subtitle: '诚实、极度专业、一人包揽的极简现代工业伙伴',
      storyText1: 'takinbot (拓新搏图) 是创始人图南的个人品牌。图南曾是一名一线互联网大厂的全栈架构师与产品设计师。在看透了传统外贸代理“收费昂贵、效率低下、不懂技术”以及传统广告公司“人海战术、忽悠工厂”的痛点后，他走出高档写字楼，直接睡进了河北清河滤清器厂、塑料注塑厂的车间。',
      storyText2: '传统贸易中介不懂机械模具、更不懂系统代码，而拥有硬核生产能力的中国中小工厂，又缺乏海外品牌推广、搜索引擎优化（SEO）和流畅的英文商务对接能力。通过将大厂级系统工程研发（手写高性能网页、自主开发翻译与询价数据库）与外贸清关海运深度整合，我以一个车间工人的价格，成为您厂里最强悍的“海外事业部”。',
      storyText3: '我们不讲虚伪的行业黑话。我们提供极快的交付速度、纯粹的诚实和生死共存的合伙人关系。从亲自动手绘制高水准的外包装彩盒、手写高吞吐量产品搜索数据库，到直接用流利英语与德国、美国采购商进行长达数小时的工程技术答疑，图南用键盘和镜头，带您的工厂打通全球供应链。',
    },
    contact: {
      title: '直连图南，开启工厂出海之旅',
      subtitle: '免去中介业务员的敷衍转发，直接与掌控代码开发、视频拍摄、海外清关的合伙人面对面。',
      formTitle: '提交工厂合作意向书',
      formCompany: '工厂/企业全称',
      formWebsite: '企业官网/工厂现有网站（如有）',
      formName: '您的姓名与职位',
      formEmail: '您的常用邮箱',
      formPhone: '常用电话 / 微信 / WhatsApp',
      formType: '核心出海诉求',
      formTypePlaceholder: '请选择重点板块...',
      formTypeFiltration: '外贸多语言独立站搭建 (¥5000)',
      formTypeMolding: '海外社媒建站与日常代运营 (¥500/月)',
      formTypeTech: '工业质感宣传视频与产品视频拍摄',
      formTypeAI: '一站式出海合伙人全套合作 (¥5000+¥500/月)',
      formMessage: '描述您工厂的主打产品、SKU数量、目前年产值及设备优势',
      formBtn: '向合伙人图南提交档案',
      imTitle: '极速微信与 WhatsApp 联络处',
      imSubtitle: '免除邮件等待。扫码立刻添加技术合伙人微信，在线评估您工厂的 SKU 目录与出海可行性。',
      wechatLabel: '微信直连图南',
      whatsappLabel: 'WhatsApp 会话',
      qqLabel: 'QQ 极速对接',
      wechatDesc: '微信扫码，可直接添加出海合伙人图南，在线发送您的产品册或模具参数。',
      whatsappDesc: '扫码或直接点击链接，在 WhatsApp 上与我们的大货物流调度团队立刻取得联系。',
      qqDesc: 'QQ 扫码，快速对接出口清关、商检和拼箱发运业务经理，核算离岸价格。',
      openChat: '点击发起即时对话',
    }
  }
} as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof dictionary['en']; // Dictionary structure
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh'); // Primary language default to zh for Chinese factory owners
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('takinbot_main_language') as Language;
      if (stored === 'en' || stored === 'zh') {
        setLanguageState(stored);
      } else {
        const navLang = navigator.language.toLowerCase();
        if (navLang.startsWith('zh')) {
          setLanguageState('zh');
        } else {
          setLanguageState('en');
        }
      }
    } catch (e) {
      console.error('Error loading language setting:', e);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('takinbot_main_language', lang);
    } catch (e) {
      console.error('Error saving language:', e);
    }
  };

  const t = dictionary[language];

  if (!mounted) {
    // Provide a stable initial dictionary structure to prevent server/client mismatched values
    return (
      <LanguageContext.Provider value={{ language, setLanguage, t: dictionary['zh'] }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
