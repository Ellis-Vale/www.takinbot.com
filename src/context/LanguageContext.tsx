'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'zh';

// Detailed translation dictionary for Takinbot B2B website
export const dictionary = {
  en: {
    common: {
      companyName: 'takinbot',
      companySub: 'Automotive Filtration Solutions',
      rfqCart: 'RFQ Cart',
      items: 'items',
      item: 'item',
      addToRFQ: 'Add to RFQ',
      inRFQ: 'Added to RFQ',
      remove: 'Remove',
      fobPrice: 'FOB Price',
      moq: 'MOQ',
      hsCode: 'HS Code',
      sendQuoteRequest: 'Send Quote Request',
      submitting: 'Submitting...',
      success: 'Success',
      quoteRequestSent: 'Your Request for Quote has been sent successfully! Our Shanghai B2B sales team will contact you within 12 hours.',
      emptyCart: 'Your quote basket is empty. Browse our products and add them to request custom wholesale pricing.',
      factoryLocation: 'Shanghai, China',
      allRightsReserved: 'All rights reserved.',
      contactUs: 'Contact Us',
      home: 'Home',
      backToHome: 'Back to Home',
      exploreProducts: 'Explore Products',
      getInTouch: 'Get in Touch',
      readMore: 'Read More',
      viewFactory: 'Take Factory Tour',
      learnOEM: 'OEM Branding Services',
    },
    nav: {
      home: 'Home',
      products: 'Products',
      oem: 'OEM Customizing',
      factory: 'Smart Factory',
      contact: 'Contact & Quote',
    },
    hero: {
      tagline: 'Premium OEM/ODM Automotive Filtration Solutions',
      titleFirst: 'Direct From Shanghai Smart Factory',
      titleSecond: 'To Your Brand\'s Portfolio',
      subtitle: 'We manufacture high-fidelity cabin carbon filters, spin-on oil canisters, and polyurethane air filtration products for global import distributors. Cut out middlemen and secure factory-direct margins.',
      ctaProducts: 'View Catalog',
      ctaOEM: 'Custom Packaging & Branding',
      badge: 'FOB Shanghai • ISO 9001 / IATF 16949 Certified',
    },
    features: {
      title: 'Engineered for Performance. Scaled for Imports.',
      subtitle: 'Why global brands and major warehouse distributors source direct from takinbot.',
      f1Title: 'Premium OEM Standards',
      f1Desc: 'All filters match exact OEM specifications, featuring high dust-holding capacity and structural integrity.',
      f2Title: 'B2B Cost Savings',
      f2Desc: 'Direct-from-factory pricing with custom branding increases retail and wholesale margins by up to 45%.',
      f3Title: 'Advanced R&D Laboratory',
      f3Desc: 'In-house airflow testing, particle counting, and pressure drop profiling using state-of-the-art instruments.',
      f4Title: 'FTZ Logistics Powerhouse',
      f4Desc: 'Conveniently located near the Shanghai Free Trade Zone for rapid export and seamless port dispatch.',
    },
    calculator: {
      title: 'Compare Your Import Margin',
      subtitle: 'Calculate your cost savings by switching from middleman trading companies to direct takinbot sourcing.',
      sliderLabel: 'Annual Import Volume (Units)',
      competitorCost: 'Competitor / Agent Cost (per unit)',
      takinbotCost: 'Takinbot Sourcing Cost (per unit)',
      marginIncrease: 'Estimated Margin Increase',
      annualSavings: 'Estimated Annual Savings',
      disclaimer: 'Based on FOB Shanghai bulk container pricing. Custom branding and bespoke packaging included in calculations.',
      cta: 'Request Custom Sourcing Proposal',
    },
    factoryHighlight: {
      title: 'Shanghai Smart Production Floor',
      subtitle: 'Where technical precision meets manufacturing scale.',
      stats: {
        capacity: '1.2M+ Monthly Capacity',
        precision: '0.01mm Pleating Precision',
        delivery: '30-Day Standard Delivery',
        qa: '100% Quality Checked',
      },
      tabs: {
        pleating: 'Automated Pleating',
        pleatingText: 'Our high-speed pleating machinery achieves absolute spacing uniformity, maximizing active filter surface area and enhancing service lifespan under heavy dust loads.',
        assembly: 'Robotic Assembly',
        assemblyText: 'German-engineered robotic arms seamlessly seal filter elements in polyurethane and plastic frames, eliminating structural leak vectors and aesthetic flaws.',
        testing: 'In-line QA Testing',
        testingText: 'Every batch undergoes rigorous pressure drop, fractional efficiency, and vibration fatigue simulations to verify IATF 16949 compliance before export packing.',
      }
    },
    oemHighlight: {
      title: 'Full-Service Private Label & Packaging',
      subtitle: 'We build your brand\'s physical identity alongside product excellence.',
      step1: '1. 3D & CAD Engineering',
      step1Text: 'Send us samples or drawings. Our R&D team generates 3D CAD files for custom dimension filters within 48 hours.',
      step2: '2. Private Label Marking',
      step2Text: 'Laser-etched or ink-printed part numbers, barcode markings, and brand logos on filter shells and housings.',
      step3: '3. Bespoke B2C Packaging',
      step3Text: 'Rigid corrugated retail boxes, eco-friendly shrink wrap, and master boxes printed with your corporate branding.',
      step4: '4. FOB Shanghai Logistics',
      step4Text: 'Customs clearance, shipping documentation, and freight forwarding direct to your destination port.',
    },
    faq: {
      title: 'Frequently Sourcing Questions',
      q1: 'What is your Minimum Order Quantity (MOQ)?',
      a1: 'Our standard MOQ is 1,000 units per filter SKU. However, for combined container shipments or first-time trial orders, we can accommodate mixed batches of 500 units per SKU.',
      q2: 'Are you certified for OEM distribution?',
      a2: 'Yes, our Shanghai facility is fully certified under ISO 9001 and IATF 16949 (the global standard for automotive quality management systems), ensuring seamless entry into EU, US, and regional markets.',
      q3: 'Can you match custom filter sizes?',
      a3: 'Absolutely. We have an active database of over 4,500 filter models. If you have a custom industrial or rare vehicle sizing, our engineering team can build custom pleating molds to match your exact specs.',
      q4: 'What are your standard payment and shipping terms?',
      a4: 'We operate primarily under FOB Shanghai or CIF destination terms. Payment terms are standard B2B terms: 30% T/T deposit, 70% balance paid upon presentation of the Bill of Lading.',
    },
    products: {
      title: 'OEM Catalog & Tech Specs',
      subtitle: 'Browse our core automotive filtration categories. Select products to add to your custom pricing quote request.',
      filterAll: 'All Categories',
      specifications: 'Technical Specifications',
      material: 'Filter Media',
      efficiency: 'Efficiency Rate',
      lifespan: 'Service Lifespan',
      dimensions: 'Standard Dimensions',
      compatibility: 'OEM Cross-Reference',
      addedSuccess: 'Added to your B2B quote basket!',
    },
    oem: {
      title: 'Industrial OEM / ODM Brand Program',
      subtitle: 'Turn our manufacturing prowess into your brand equity. We specialize in launching premium filter lines for global distributors.',
      heroTitle: 'Private Label Filtration Made Simple',
      heroSubtitle: 'From technical drawing and sample approval to customized packaging design and export shipping, takinbot manages the entire manufacturing chain for your brand.',
      card1Title: 'High-Density Laser Branding',
      card1Text: 'Get your logo, OEM cross-reference part numbers, and batch numbers cleanly laser-etched directly onto the steel canisters or polyurethane frames.',
      card2Title: 'Premium Color Matching',
      card2Text: 'Differentiate your product lineup. Choose custom filter casing colors (including matte black, cyber orange, or high-gloss yellow) to match your brand guidelines.',
      card3Title: 'Retail-Ready Custom Packaging',
      card3Text: 'We design and print high-quality custom boxes, inner polybags, and structural master cases that protect filters during ocean transit and stand out on warehouse shelves.',
      card4Title: 'Frictionless Port Shipping',
      card4Text: 'Our close proximity to the Port of Shanghai allows us to handle FOB documentation, custom container packing, and customs clearance quickly and efficiently.',
      processTitle: 'The Sourcing Timeline',
      p1: 'Sample or CAD Submission',
      p1D: 'Send us the competitor part numbers, physical dimensions, or OEM samples.',
      p2: 'Prototyping & R&D Approval',
      p2D: 'We build prototype molds, perform airflow tests, and ship physical samples for your approval.',
      p3: 'Packaging Design & Print',
      p3D: 'Provide your branding vector files or have our internal design team lay out the box and packaging art.',
      p4: 'Mass Production & Delivery',
      p4D: 'Strict assembly-line quality control. Mass production completes within 30 days, ready for container loading.',
      cta: 'Talk to an OEM Sourcing Engineer',
    },
    factory: {
      title: 'Our Manufacturing Facility & Logistics',
      subtitle: 'Inside our ISO 9001 and IATF 16949 certified Shanghai smart factory.',
      heroTitle: 'Advanced Automation for Filtration Excellence',
      heroSubtitle: 'takinbot operates over 12,000 square meters of state-of-the-art production space. Our automated pleating lines and robotic molding systems ensure zero variance and perfect structural sealing.',
      statCapacity: '15,000,000+',
      statCapacityLabel: 'Annual Filter Output',
      statRobot: '92%',
      statRobotLabel: 'Automation Rate',
      statFail: '< 0.02%',
      statFailLabel: 'QA Rejection Rate',
      certTitle: 'Global Certifications & Quality Controls',
      certDesc: 'Our filters are engineered and certified to meet or exceed international automotive safety standards, assuring clean air and engine integrity under extreme temperature limits.',
      cert1: 'IATF 16949 Automotive Quality Management',
      cert2: 'ISO 9001 Factory Quality Management',
      cert3: 'ISO 14001 Environmental Compliance Standards',
      warehouseTitle: 'Shanghai FTZ Logistics Hub',
      warehouseDesc: 'Located just 45 minutes from the Port of Shanghai, our high-density logistics warehouse is built for rapid export loadouts. We pack, palletize, and seal shipping containers directly on-site to minimize double-handling damage.',
    },
    contact: {
      title: 'Request Custom Sourcing Quote',
      subtitle: 'Build your custom quote request below. Review your selected RFQ items and submit your corporate details.',
      rfqTitle: '1. Review Your Sourcing Basket',
      formTitle: '2. Corporate Sourcing Details',
      companyName: 'Company Name',
      website: 'Company Website',
      name: 'Contact Name',
      email: 'Work Email Address',
      phone: 'Phone / WhatsApp',
      country: 'Country / Region',
      notes: 'Custom OEM/ODM Branding & Logistics Requirements',
      submitBtn: 'Submit Request for Quote',
      contactInfoTitle: 'Direct Global Sourcing Office',
      phoneLabel: 'Direct Phone',
      addressLabel: 'Factory Address',
      addressValue: 'Building 4, Auto-Tech Manufacturing Zone, Shanghai Pudong New Area, China',
      warehouseLabel: 'FTZ Logistics Zone',
      warehouseValue: 'Shanghai Waigaoqiao Free Trade Zone, Storage Hub 3, China',
      hoursLabel: 'Business Hours',
      hoursValue: 'Monday - Friday: 08:30 - 18:00 (GMT+8)',
      imTitle: 'Instant Messaging Sourcing Hub',
      imSubtitle: 'Skip email wait times. Scan to instantly connect with our Sourcing and Logistics Directors.',
      wechatLabel: 'WeChat Sourcing',
      whatsappLabel: 'WhatsApp Chat',
      qqLabel: 'QQ Procurement',
      wechatDesc: 'Scan with WeChat to instantly add Sourcing Director Ellis Vale for active tooling matching.',
      whatsappDesc: 'Scan or click below to connect on WhatsApp for immediate scheduling and bulk production updates.',
      qqDesc: 'Scan with QQ to connect with our logistics team for custom freight and custom clearances.',
      openChat: 'Open Active Session',
    }
  },
  zh: {
    common: {
      companyName: 'takinbot',
      companySub: '汽车过滤解决方案专业制造商',
      rfqCart: '询价篮',
      items: '个商品',
      item: '个商品',
      addToRFQ: '加入询价篮',
      inRFQ: '已加入询价',
      remove: '移除',
      fobPrice: 'FOB 离岸价',
      moq: '最小起订量',
      hsCode: '海关编码',
      sendQuoteRequest: '提交询价申请',
      submitting: '提交中...',
      success: '成功',
      quoteRequestSent: '您的询价单已成功发送！我们的上海 B2B 销售团队将在 12 小时内与您联系，并提供定制采购方案。',
      emptyCart: '您的询价篮目前为空。请浏览我们的产品目录并将所需型号加入询价篮，以获取工厂批发价。',
      factoryLocation: '中国 上海',
      allRightsReserved: '版权所有。',
      contactUs: '联系我们',
      home: '首页',
      backToHome: '返回首页',
      exploreProducts: '产品中心',
      getInTouch: '在线询价',
      readMore: '阅读更多',
      viewFactory: '参观工厂',
      learnOEM: '了解品牌定制',
    },
    nav: {
      home: '首页',
      products: '产品中心',
      oem: '品牌定制 (OEM)',
      factory: '智能工厂',
      contact: '询价与联系',
    },
    hero: {
      tagline: '高品质 OEM/ODM 汽车滤清器专业供应商',
      titleFirst: '上海智能工厂直供',
      titleSecond: '打造您的自主滤清器品牌',
      subtitle: '我们为全球进口商、批发商及连锁品牌代工生产高端空调活性炭滤清器、机油滤清器铁罐和聚氨酯空气滤清器。跳过贸易中间商，直接锁定一手工厂利润。',
      ctaProducts: '产品目录',
      ctaOEM: '私人品牌与包装定制',
      badge: '上海离岸价 (FOB) • 通过 ISO 9001 / IATF 16949 国际质量认证',
    },
    features: {
      title: '专为高性能设计，专为大宗进口扩产',
      subtitle: '为什么全球知名采购商和大型仓储分销商选择与 takinbot 直接合作。',
      f1Title: '严苛 OEM 制造标准',
      f1Desc: '所有滤清器均匹配原厂 OEM 规格，具备极高的容尘量和结构强度，保证引擎健康运转。',
      f2Title: 'B2B 采购成本直降',
      f2Desc: '工厂直接出厂价格结合专属品牌定制服务，相比于向中间外贸代理采购可提升 45% 的利润率。',
      f3Title: '先进研发实验室',
      f3Desc: '配备高精度气流测试仪、悬浮粒子计数器和压差分析仪，实现严格的高物理性能标定。',
      f4Title: '自贸区物流优势',
      f4Desc: '紧邻上海 Waigaoqiao 自贸区及港口，享有快速出口报关及便捷的集装箱装港时效。',
    },
    calculator: {
      title: '测算您的进口采购利润',
      subtitle: '计算从传统的代理/中间贸易商转向 takinbot 上海工厂直供后，您每年可节省的采购成本。',
      sliderLabel: '年进口采购量 (件)',
      competitorCost: '目前向贸易商/中介采购的单价 (美元/件)',
      takinbotCost: 'Takinbot 工厂直发采购单价 (美元/件)',
      marginIncrease: '单件利润率提升幅度',
      annualSavings: '预计每年节省采购成本',
      disclaimer: '基于上海离岸价 (FOB) 大宗货柜运输测算。包装图纸定制与私人品牌标刻已包含在测算成本中。',
      cta: '索取专属采购建议书',
    },
    factoryHighlight: {
      title: '上海现代化智能生产车间',
      subtitle: '以严苛的工业精度，打造规模化汽车滤清器制造高地。',
      stats: {
        capacity: '120 万+ 月产能',
        precision: '0.01 毫米 折纸精度',
        delivery: '30 天 标准交期',
        qa: '100% 质量检验',
      },
      tabs: {
        pleating: '全自动高速折纸',
        pleatingText: '我们引进了伺服电机控制的高速折纸线，使滤纸折距实现绝对均匀，最大化过滤面积，从而极大地延长了高灰尘负荷下的使用寿命。',
        assembly: '机器人框架组装',
        assemblyText: '德国机器人机械臂在无尘区域将折叠好的滤芯与聚氨酯或塑料边缘牢固注塑密封，从根本上消除了空气侧漏和外观毛刺等常见缺陷。',
        testing: '在线出厂质量检测',
        testingText: '每一批次的滤清器都必须通过全面的额定风量压差测试、分级效率评估和抗振疲劳模拟，确保每只滤清器完美通过 IATF 16949 标准。',
      }
    },
    oemHighlight: {
      title: '全方位私人品牌与纸盒包装代工',
      subtitle: '从产品物理性能到品牌外在形象，我们同步为您完美构建。',
      step1: '1. 3D 与 CAD 工程建模',
      step1Text: '您只需提供样品或原始尺寸，我们的研发团队可在 48 小时内为您输出精准的 3D CAD 图纸及开模数据。',
      step2: '2. 专属私人品牌标刻',
      step2Text: '使用高精度光纤激光打标或环保移印技术，在滤清器外壳上清晰标刻您的 Logo、产品编码、条形码。',
      step3: '3. 独立精美包装定制',
      step3Text: '定制高挺度彩色瓦楞零售纸盒、环保收缩膜和专属五层加厚外箱，确保海运途中完好无损，展柜效果出众。',
      step4: '4. 上海 FOB 港口直运',
      step4Text: '一站式办理出口清关、订舱装柜及报关单据，将集装箱高效运抵离岸港口并发运。',
    },
    faq: {
      title: '全球采购常见问题解答',
      q1: '你们的最小起订量 (MOQ) 是多少？',
      a1: '单款滤清器 (SKU) 的标准最小起订量为 1,000 件。对于整柜拼装或首次试销订单，我们支持混合拼箱，单款起订量可放宽至 500 件。',
      q2: '你们工厂是否通过了整车 OEM 资质认证？',
      a2: '是的，我们的上海工厂全面通过了 ISO 9001 以及极其严苛的 IATF 16949 汽车零部件质量管理体系认证，产品能够无缝进入欧美及全球各大整车厂和售后连锁网点。',
      q3: '你们能定制非标或特种滤清器尺寸吗？',
      a3: '没问题。我们现拥有超过 4,500 款常规滤清器模具。如果您有特种工业过滤或极罕见车型需求，我们的模具工程师可在 7-10 天内开发出专用注塑模具。',
      q4: '你们的标准付款方式和运输条款是什么？',
      a4: '我们主要以 FOB 上海或 CIF 目的港进行交易。标准付款条款为国际大宗采购通用的：30% T/T 预付款，70% 尾款在见提单副本 (B/L) 后付清。',
    },
    products: {
      title: 'OEM 滤清器目录与规格参数',
      subtitle: '浏览我们为您精心筛选的核心汽车过滤产品。将需要的型号加入询价篮，即可向上海工厂申请批量采购报价单。',
      filterAll: '全部类别',
      specifications: '产品技术参数',
      material: '滤芯材质',
      efficiency: '过滤效率',
      lifespan: '建议使用寿命',
      dimensions: '标准外观尺寸',
      compatibility: '兼容 OEM 交叉编码',
      addedSuccess: '已成功加入询价篮！',
    },
    oem: {
      title: '自主品牌代工与定制方案',
      subtitle: '将我们的超级制造力化为您的品牌资产。我们已协助多国汽车分销商成功推出高端自营滤清器品牌。',
      heroTitle: '私有品牌滤清器一站式托管',
      heroSubtitle: '从技术图纸绘制、物理样品封样，到个性化彩盒纸箱包装设计和海运发货，takinbot 全程为您保驾护航。您只需关注渠道销售，工厂制造全部交给我们。',
      card1Title: '高精度激光打标标刻',
      card1Text: '在机滤铁壳底座或空气滤清器的塑料/橡胶边框上，用激光打上清晰美观的自主 Logo、原厂 OEM 对照编号及追溯批次号。',
      card2Title: '个性化外观配色匹配',
      card2Text: '打破平庸！可为您的品牌特别定制专属底漆涂装（包括哑光黑、极客橙、高亮黄等），高度契合您品牌的 VI 视觉识别手册。',
      card3Title: '高档零售彩盒与纸箱定制',
      card3Text: '设计并印刷高强度的瓦楞独立包装纸盒、内防潮包装袋和定制强化外箱，增强品牌辨识度，完美应对长途海运挤压。',
      card4Title: '快速无忧的港口发运',
      card4Text: '工厂紧邻上海港，能够快速安排拖车进港、集装箱拼箱和出口报关，让订舱和发运过程高效便捷。',
      processTitle: '定制品牌合作流程',
      p1: '样品或图纸提交',
      p1D: '您只需提供竞争对手的编号、物理外观尺寸或原厂 OEM 实体样品。',
      p2: '打样测试与封样确认',
      p2D: '我们快速开模制作实体样品，完成气流阻力测试，并将样品快递给您进行装车测试与封样确认。',
      p3: '彩盒与纸箱版面确认',
      p3D: '您提供 Logo 的矢量文件，或由我们资深包装设计师免费为您布局彩盒、纸箱的装潢设计版面。',
      p4: '量产、装柜与发运',
      p4D: '流水线进行严格的生产全检。30天内完成大货交付，并在工厂完成集装箱装柜，安全出港。',
      cta: '联系品牌定制顾问工程师',
    },
    factory: {
      title: '现代化智能工厂与物流中心',
      subtitle: '深入了解通过 IATF 16949 国际汽车工业质量认证的上海浦东制造基地。',
      heroTitle: '高度自动化折叠与机器人密封技术',
      heroSubtitle: 'takinbot 拥有超过 12,000 平方米的专业防尘滤清器制造车间。我们采用的自动折纸生产线和全密闭聚氨酯浇注成型系统，保证了产品结构件无缺陷、无溢料、耐高温。',
      statCapacity: '15,000,000+',
      statCapacityLabel: '年产滤清器总量 (只)',
      statRobot: '92%',
      statRobotLabel: '综合产线自动化率',
      statFail: '< 0.02%',
      statFailLabel: '出厂综合不良率',
      certTitle: '全球质量认证体系与质检实验室',
      certDesc: '我们的每一款滤清器均根据国际 ISO 和汽车行业标准进行设计和测试，确保阻隔极细微污染物的同时维持极佳的进气量。',
      cert1: 'IATF 16949 国际汽车零部件质量管理体系认证',
      cert2: 'ISO 9001 质量管理体系认证',
      cert3: 'ISO 14001 环境管理体系标准',
      warehouseTitle: '上海 Waigaoqiao 自贸区物流仓储中心',
      warehouseDesc: '工厂距离洋山港和外高桥集装箱码头仅 45 分钟车程。我们在保税自贸区设立了高密度的物流装箱中心，可在出厂后直接进行拖车集港，大大减少二次搬运对货物造成的磨损。',
    },
    contact: {
      title: '向上海工厂索取批量采购报价',
      subtitle: '在线构建您的询价单。预览您选择的滤清器 SKU，填写您的企业采购需求并提交。',
      rfqTitle: '1. 核对您的询价商品清单',
      formTitle: '2. 填写您的企业采购信息',
      companyName: '公司名称',
      website: '公司网址',
      name: '联系人姓名',
      email: '企业邮箱',
      phone: '电话 / WhatsApp',
      country: '国家 / 地区',
      notes: '特定的品牌定制 (OEM) 要求或目标离岸港口',
      submitBtn: '提交工厂询价单',
      contactInfoTitle: '全球大宗采购对接办公室',
      phoneLabel: '业务电话',
      addressLabel: '制造基地地址',
      addressValue: '中国上海浦东新区汽车科技产业园4号厂房',
      warehouseLabel: '自贸区物流中心',
      warehouseValue: '中国上海 Waigaoqiao 自由贸易区3号保税仓储中心',
      hoursLabel: '工作时间',
      hoursValue: '周一至周五: 08:30 - 18:00 (北京时间 - GMT+8)',
      imTitle: '极速社媒采购对接中心',
      imSubtitle: '免去邮件往来等待。微信、WhatsApp、QQ 扫码直连大宗开模与物流调度总监。',
      wechatLabel: '微信扫码对接',
      whatsappLabel: 'WhatsApp 会话',
      qqLabel: 'QQ 极速采购',
      wechatDesc: '使用微信扫码，可直接添加大宗开模总监，实时比对图纸并核算报价。',
      whatsappDesc: '扫码或直接点击链接，在 WhatsApp 上与我们的大货调度团队即时取得联系。',
      qqDesc: '使用手机 QQ 扫码，快速对接出口清关与港口物流经理，商讨拼箱方案。',
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
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('takinbot_language') as Language;
      if (stored === 'en' || stored === 'zh') {
        setLanguageState(stored);
      } else {
        // Simple browser language detection
        const navLang = navigator.language.toLowerCase();
        if (navLang.startsWith('zh')) {
          setLanguageState('zh');
        }
      }
    } catch (e) {
      console.error('Error loading language setting:', e);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('takinbot_language', lang);
    } catch (e) {
      console.error('Error saving language:', e);
    }
  };

  const t = dictionary[language];

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
