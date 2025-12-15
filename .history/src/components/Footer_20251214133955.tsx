import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'القصة' },
    { href: '#why-us', label: 'نقاط القوة' },
    { href: '#services', label: 'الخدمات' },
    { href: '#projects', label: 'الشركاء' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="gradient-dark text-white">
      {/* Main Footer */}
      <div className="container-rtl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="نخبة سعد المتقدمة" className="h-20 md:h-24 w-auto mb-6 rounded-lg" />
            <p className="text-sm md:text-base text-white/70 mb-6 leading-relaxed">
              نخبة سعد المتقدمة للمقاولات وأعمال السلامة - خبرة تمتد لأكثر من 15 عاماً في تقديم خدمات متميزة
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base text-white/70">
                  مكة المكرمة - الشوقية شارع عبد القادر كوشك
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <a href="tel:00966502422788" className="text-sm md:text-base text-white/70 hover:text-accent transition-colors" dir="ltr">
                  00966502422788
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <a href="mailto:support@saadelite.com" className="text-sm md:text-base text-white/70 hover:text-accent transition-colors" dir="ltr">
                  support@saadelite.com
                </a>
              </li>
            </ul>
          </div>

          {/* Language & Copyright */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6">اللغة</h3>
            <div className="flex gap-3 mb-8">
              <button className="px-6 py-3 rounded-lg bg-accent text-white text-sm md:text-base font-medium">
                العربية
              </button>
              <button className="px-6 py-3 rounded-lg bg-white/10 text-white/70 text-sm md:text-base hover:bg-white/20 transition-colors">
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-rtl py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm md:text-base text-center md:text-right">
              © {currentYear} نخبة سعد المتقدمة. جميع الحقوق محفوظة
            </p>
            <p className="text-white/60 text-sm md:text-base">
              Advanced Saad Elite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
