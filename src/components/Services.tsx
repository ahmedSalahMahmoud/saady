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
    <section id="services" className="py-16 lg:py-20 bg-muted/30">
      <div className="container-rtl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            الخدمات
          </h2>
          <div className="w-32 h-1.5 bg-accent" />
        </div>

        {/* Services Grid - Vertical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group transition-all duration-300">
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
