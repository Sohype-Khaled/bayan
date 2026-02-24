import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FileText, Handshake, Users, CreditCard, Lock, AlertTriangle, XCircle } from "lucide-react";

const icons = [
  <Handshake className="w-6 h-6" />,
  <Users className="w-6 h-6" />,
  <CreditCard className="w-6 h-6" />,
  <Lock className="w-6 h-6" />,
  <AlertTriangle className="w-6 h-6" />,
  <XCircle className="w-6 h-6" />,
];

export default function TermsAndConditions() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = i18n.language === "ar"
      ? "الشروط والأحكام - بيان للحلول"
      : "Terms and Conditions - Bayan Solutions";
  }, [i18n.language]);

  const sections = [1, 2, 3, 4, 5, 6] as const;

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-gray-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-1/2 -right-1/5 h-[800px] w-[800px] rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute -bottom-1/5 -left-1/10 h-[600px] w-[600px] rounded-full bg-blue-400/20 blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            {t("terms.title")}
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            {t("terms.lastUpdated")}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-10">
          <p className="text-lg leading-relaxed text-gray-700">
            {t("terms.intro")}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((num, idx) => {
            const key = `terms.section${num}` as const;
            const items: string[] | { label: string; value: string }[] = t(`${key}.items`, { returnObjects: true, defaultValue: [] }) as any;
            const content2 = t(`${key}.content2`, { defaultValue: "" });

            return (
              <section
                key={num}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white flex-shrink-0">
                      {num}
                    </span>
                    {t(`${key}.title`).replace(/^[٠-٩0-9]+\.\s*/, "")}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${key}.content`)}
                  </p>
                  {content2 && (
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {content2}
                    </p>
                  )}
                  {Array.isArray(items) && items.length > 0 && (
                    typeof items[0] === "string" ? (
                      <ul className={`mt-4 list-disc space-y-2 text-gray-600 ${i18n.language === 'ar' ? 'mr-5' : 'pl-5'}`}>
                        {(items as string[]).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-start">
                          <tbody className="divide-y divide-gray-200">
                            {(items as { label: string; value: string }[]).map((item, i) => (
                              <tr key={i}>
                                <td className="px-4 py-3 font-medium text-gray-900 bg-gray-50 w-1/3">{item.label}</td>
                                <td className="px-4 py-3 text-gray-600">{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  )}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary px-8 py-10 text-center text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="mb-2 text-2xl font-bold">{t("terms.ctaTitle")}</h3>
            <p className="mb-6 text-white/90">{t("terms.ctaDesc")}</p>
            <a
              href="mailto:info@bayansolutions.net"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-primary transition hover:bg-gray-100"
            >
              {t("terms.ctaButton")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
