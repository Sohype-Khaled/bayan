import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
  Menu,
  Languages
} from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition text-sm font-medium text-gray-700"
    >
      <Languages className="w-4 h-4" />
      <span>{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/logo-text.png" alt="Bayan Solutions" className="h-12 object-contain" />
            </Link>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition">{t('nav.home')}</Link>
            <a href="/#services" className="text-gray-700 hover:text-primary font-medium transition">{t('nav.services')}</a>
            <a href="/#why-us" className="text-gray-700 hover:text-primary font-medium transition">{t('nav.whyUs')}</a>
            <a href="/#about" className="text-gray-700 hover:text-primary font-medium transition">{t('nav.about')}</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://forms.gle/4CBFS9wL6FqJQo5X9" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {t('nav.freeConsultation')}
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="lg:w-1/3">
            <div className="mb-6">
              <Link to="/">
                <img src="/logo-text.png" alt="Bayan Solutions" className="h-10 object-contain" />
              </Link>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('footer.ctaTitle')}</h3>
            <p className="text-gray-600 mb-8">
              {t('footer.ctaDesc')}
            </p>
            <a href="https://forms.gle/4CBFS9wL6FqJQo5X9" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg">
              {t('footer.ctaButton')}
            </a>
          </div>

          <div className="lg:w-1/3 grid grid-cols-2 gap-8 w-full">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">{t('footer.navTitle')}</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-600 hover:text-primary transition">{t('nav.home')}</Link></li>
                <li><a href="/#services" className="text-gray-600 hover:text-primary transition">{t('nav.services')}</a></li>
                <li><a href="/#about" className="text-gray-600 hover:text-primary transition">{t('nav.about')}</a></li>
                <li><a href="/#why-us" className="text-gray-600 hover:text-primary transition">{t('nav.whyUs')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">{t('footer.legalTitle')}</h4>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-gray-600 hover:text-primary transition">{t('footer.privacy')}</Link></li>
                <li><Link to="/terms-and-conditions" className="text-gray-600 hover:text-primary transition">{t('footer.terms')}</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/3">
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="block text-xs text-gray-500 font-semibold uppercase">{t('footer.emailLabel')}</span>
                  <a href="mailto:info@bayansolutions.net" className="text-gray-700 hover:text-primary transition">info@bayansolutions.net</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="block text-xs text-gray-500 font-semibold uppercase">{t('footer.phoneLabel')}</span>
                  <a href="tel:+201559611939" className="text-gray-700 hover:text-primary transition" dir="ltr">+20 155 961 1939</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="block text-xs text-gray-500 font-semibold uppercase">{t('footer.officeLabel')}</span>
                  <span className="text-gray-700">{t('footer.officeValue')}</span>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="https://www.linkedin.com/company/bayansolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/bayan.solutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/bayansolutions.net/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://bayansolutions.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}. {t('footer.rights')}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  return (
    <div className="font-sans">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
