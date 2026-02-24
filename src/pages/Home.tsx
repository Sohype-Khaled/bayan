import { useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  LayoutGrid,
  BarChart3,
  ShieldCheck,
  Wallet,
  Settings,
  Receipt,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Database,
  Cloud,
  Table,
  Layers,
  Box,
} from "lucide-react";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className="relative overflow-hidden bg-white min-h-[85vh] flex items-center">
      <div className="absolute inset-0 pattern-bg pointer-events-none"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: i18n.language === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 pt-12 md:pt-0 z-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6 border border-blue-100">
            <TrendingUp className="w-4 h-4 mx-2" />
            {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight mb-6">
            {t('hero.title')} <span className="text-primary">{t('hero.titleAccent')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://forms.gle/4CBFS9wL6FqJQo5X9" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-blue-900 text-white text-lg px-8 py-4 rounded-lg font-medium transition shadow-xl hover:shadow-2xl text-center flex items-center justify-center gap-2">
              <span>{t('hero.ctaPrimary')}</span>
              {i18n.language === 'ar' ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </a>
            <a href="#services" className="bg-white text-gray-800 border border-gray-200 hover:border-primary px-8 py-4 rounded-lg font-medium transition text-center flex items-center justify-center">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mt-12 md:mt-0 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 hover:rotate-0 transition duration-500">
            <img
              src="/hero.png"
              alt="Bayan Financial Solutions"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -bottom-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 ${i18n.language === 'ar' ? '-right-6 md:bottom-10 md:-right-10' : '-left-6 md:bottom-10 md:-left-10'}`}
          >
            <div className="bg-green-100 p-2 rounded-full">
              <Wallet className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">{t('hero.savingsLabel')}</p>
              <p className="text-lg font-bold text-gray-900">40%</p>
            </div>
          </motion.div>
        </motion.div >
      </div>
    </header>
  );
};

const Systems = () => {
  const { t } = useTranslation();
  const systems = [
    { name: "Zoho", icon: <Database className="text-[#d9232e]" /> },
    { name: "QuickBooks", icon: <Box className="text-[#2ca01c]" /> },
    { name: "Xero", icon: <Cloud className="text-[#13b5ea]" /> },
    { name: "Excel", icon: <Table className="text-[#217346]" /> },
    { name: "Odoo", icon: <Layers className="text-[#714b67]" /> },
    { name: "ERP Systems", icon: <Settings className="text-primary" /> },
  ];

  return (
    <section className="py-16 bg-blue-50/50 border-y border-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t('systems.label')}</span>
        <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-gray-900">{t('systems.title')}</h2>
      </div>
      <div className="relative max-w-full overflow-hidden scroller">
        <div className="flex space-x-12 space-x-reverse animate-scroll whitespace-nowrap">
          {[...systems, ...systems].map((system, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group min-w-[150px]">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center p-3 border border-gray-100 group-hover:border-primary/50 transition-colors">
                {system.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700">{system.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const { t } = useTranslation();
  const features = [
    {
      title: t('whyUs.feature1.title'),
      desc: t('whyUs.feature1.desc'),
      icon: <LayoutGrid className="w-8 h-8" />
    },
    {
      title: t('whyUs.feature2.title'),
      desc: t('whyUs.feature2.desc'),
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: t('whyUs.feature3.title'),
      desc: t('whyUs.feature3.desc'),
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: t('whyUs.feature4.title'),
      desc: t('whyUs.feature4.desc'),
      icon: <Wallet className="w-8 h-8" />
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t('whyUs.label')}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900">{t('whyUs.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t('services.service1.title'),
      desc: t('services.service1.desc'),
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: t('services.service2.title'),
      desc: t('services.service2.desc'),
      icon: <Receipt className="w-8 h-8" />
    },
    {
      title: t('services.service3.title'),
      desc: t('services.service3.desc'),
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: t('services.service4.title'),
      desc: t('services.service4.desc'),
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: t('services.service5.title'),
      desc: t('services.service5.desc'),
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('services.title')}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">{t('services.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-300">{s.icon}</div>
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>
              <p className="text-blue-100 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const seo = {
  ar: {
    title: "بيان للحلول المالية | قسم محاسبة متكامل للشركات الناشئة والمتوسطة",
    description: "قسم محاسبة متكامل مخصص للشركات الناشئة والمتوسطة في مصر والشرق الأوسط. حول أرقامك من عبء مرهق إلى لغة واضحة للنمو.",
    ogTitle: "بيان للحلول المالية | Bayan Financial Solutions",
  },
  en: {
    title: "Bayan Financial Solutions | Integrated Accounting for Startups & SMEs",
    description: "An integrated accounting department dedicated to startups and SMEs in Egypt and the Middle East. Transform your numbers from a burden into a clear language for growth.",
    ogTitle: "Bayan Financial Solutions | بيان للحلول المالية",
  },
} as const;

function useSEO() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const lang = (i18n.language === "ar" ? "ar" : "en") as keyof typeof seo;
    const meta = seo[lang];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.ogTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.ogTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.description);
  }, [i18n.language]);
}

export default function Home() {
  const { t } = useTranslation();
  useSEO();

  return (
    <>
      <Hero />

      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t('about.label')}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      <Systems />
      <WhyUs />
      <Services />
    </>
  );
}
