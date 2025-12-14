import { Facebook, Twitter, Instagram, Linkedin, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">س</span>
              </div>
              <div>
                <p className="font-bold text-lg">نخبة سعد المتقدمة</p>
                <p className="text-xs text-primary-foreground/70">للمقاولات وأعمال السلامة</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              شركة متخصصة في المقاولات العامة وأعمال السلامة والوقاية من الحريق في المملكة العربية السعودية
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {["الرئيسية", "الخدمات", "المشاريع", "من نحن", "اتصل بنا"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === "الرئيسية" ? "home" : link === "الخدمات" ? "services" : link === "المشاريع" ? "projects" : link === "من نحن" ? "about" : "contact"}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {["صيانة أنظمة الحريق", "التبريد والتكييف", "الكهروميكانيك", "المقاولات العامة", "تشغيل وصيانة المباني"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-primary-foreground/80">
              <li>
                <p className="text-sm">مكة المكرمة - الشوقية</p>
                <p className="text-sm">شارع عبد القادر كوشك - الدور الرابع</p>
              </li>
              <li dir="ltr" className="text-left">
                <a href="tel:00966502422788" className="hover:text-accent transition-colors">
                  +966 50 242 2788
                </a>
              </li>
              <li>
                <a href="mailto:support@saadelite.com" className="hover:text-accent transition-colors">
                  support@saadelite.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center sm:text-right">
            © {new Date().getFullYear()} نخبة سعد المتقدمة. جميع الحقوق محفوظة.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors"
          >
            <ChevronUp className="w-5 h-5 text-accent-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
