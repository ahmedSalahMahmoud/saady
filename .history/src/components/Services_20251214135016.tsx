import {
  Building2,
  Shield,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'المقاولات العامة',
      description: 'تنفيذ مشاريع الإنشاء بأعلى معايير الجودة والسلامة مع الالتزام بالجدول الزمني المحدد',
    },
    {
      icon: Shield,
      title: 'أنظمة السلامة والحريق',
      description: 'تركيب وصيانة أنظمة الإنذار والإطفاء المتكاملة لحماية المنشآت',
    }
  ];

  return (
    <section id="services" className="py-32 lg:py-40 bg-muted/30">
      <div className="container-rtl mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              الخدمات
            </h2>
            <div className="w-32 h-1.5 bg-accent" />
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                  ? 'bg-accent w-8'
                  : 'bg-border hover:bg-primary/30'
                  }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Horizontal Scroll - Full Width */}
      <div className="w-full overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div
          ref={scrollRef}
          className="flex gap-6 pb-8 px-4 md:px-4 lg:px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] group transition-all duration-300 ${index === activeIndex ? 'scale-100' : 'scale-95 opacity-70'
                }`}
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 hover:shadow-hover transition-all duration-300">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <service.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
