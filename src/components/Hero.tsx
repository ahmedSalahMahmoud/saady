import { ArrowLeft, Shield, Building2, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="فريق العمل"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              شريككم الموثوق في البناء والسلامة
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-200">
            نخبة سعد المتقدمة
            <span className="block text-gradient mt-2">للمقاولات وأعمال السلامة</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl animate-fade-up animation-delay-400">
            نقدم خدمات متكاملة في مجال المقاولات العامة وأنظمة الحريق والسلامة، 
            مع التزامنا بأعلى معايير الجودة والاحترافية في المملكة العربية السعودية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up animation-delay-600">
            <a
              href="#contact"
              className="btn-accent flex items-center gap-2 text-lg"
            >
              تواصل معنا
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/20 transition-all"
            >
              خدماتنا
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 animate-fade-up animation-delay-600">
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Building2 className="w-6 h-6 text-accent" />
                <span className="text-3xl md:text-4xl font-bold text-primary-foreground">+150</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">مشروع منجز</p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Wrench className="w-6 h-6 text-accent" />
                <span className="text-3xl md:text-4xl font-bold text-primary-foreground">+20</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">سنة خبرة</p>
            </div>
            <div className="text-center md:text-right col-span-2 md:col-span-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Shield className="w-6 h-6 text-accent" />
                <span className="text-3xl md:text-4xl font-bold text-primary-foreground">100%</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">رضا العملاء</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
