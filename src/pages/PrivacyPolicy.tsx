import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Database, Lock, Share2, CheckCircle } from "lucide-react";

const icons = [
  <Database className="w-6 h-6" />,
  <CheckCircle className="w-6 h-6" />,
  <Lock className="w-6 h-6" />,
  <Share2 className="w-6 h-6" />,
];

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = i18n.language === "ar"
      ? "سياسة الخصوصية - بيان للحلول"
      : "Privacy Policy - Bayan Solutions";
  }, [i18n.language]);

  const sections = [1, 2, 3, 4] as const;

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-black text-gray-900 leading-tight mb-4">
            {t("privacy.title")}
          </h1>
          <p className="text-gray-500">{t("privacy.lastUpdated")}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <p className="text-lg leading-relaxed text-gray-700 mb-12">
          {t("privacy.intro")}
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((num, idx) => {
            const key = `privacy.section${num}` as const;
            const items: string[] = t(`${key}.items`, { returnObjects: true, defaultValue: [] }) as string[];
            const content2 = t(`${key}.content2`, { defaultValue: "" });

            return (
              <section
                key={num}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1 hidden sm:block">
                    {icons[idx]}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {t(`${key}.title`)}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {t(`${key}.content`)}
                    </p>
                    {content2 && (
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {content2}
                      </p>
                    )}
                    {Array.isArray(items) && items.length > 0 && (
                      num === 2 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {items.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-gray-700 text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className={`list-disc space-y-2 text-gray-600 ${i18n.language === 'ar' ? 'mr-5' : 'pl-5'}`}>
                          {items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-primary rounded-2xl text-white relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{t("privacy.ctaTitle")}</h3>
              <p className="text-white/90">{t("privacy.ctaDesc")}</p>
            </div>
            <a
              href="mailto:info@bayansolutions.net"
              className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition whitespace-nowrap"
            >
              {t("privacy.ctaButton")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
