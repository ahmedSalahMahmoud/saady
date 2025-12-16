import { useState } from 'react';
import { ArrowLeft, Building2, Shield, Wrench, Snowflake, Hammer, SparklesIcon } from 'lucide-react';
import serviceElectro from '@/assets/service-electro.jpg';
import serviceSafety from '@/assets/service-safety.jpg';

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'contracting',
      title: 'المقاولات العامة',
      icon: Building2,
      description: 'تبنت شركة سعد النخبة مبدأ تنفيذ أحدث أنظمة البناء بأساليب متطورة ذات الجودة العالية في مجالات البناء والتشييد حيث أنجزت الشركة العديد من مشاريع الإنشاءات في مجالات متعددة منها التجاري والتعليمي والسكني والصحي كما تحتل الشركة مكانة مميزة في سوق المملكة العربية السعودية.',
      stats: [
        { value: '+500', label: 'عامل' },
        { value: '+30', label: 'معدة ثقيلة' },
        { value: '1st', label: 'شهادة مقاولين' },
      ],
      image: serviceElectro,
    },
    {
      id: 'safety',
      title: 'أنظمة السلامة والحريق',
      icon: Shield,
      description: 'نوفر وننفذ أحدث الأنظمة والمنتجات والخدمات ذات الجودة العالية في مجالات أنظمة السلامة المتكاملة وأنظمة الإطفاء والإنذار. نحتل مكانة رائدة وموثوق بها في تقديم الحلول المتكاملة من خلال مواردنا البشرية المتميزة.',
      stats: [
        { value: '+100', label: 'مهندس تقني' },
        { value: '2', label: 'مكتب هندسي' },
      ],
      image: serviceSafety,
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="container-rtl">
        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((activeService, index) => (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${activeTab % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <activeService.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    {activeService.title}
                  </h3>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {activeService.description}
                </p>


                <div className="flex flex-wrap gap-8 mb-8">
                  {activeService.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>


                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-full text-base md:text-lg font-medium hover:bg-primary/90 transition-all group">
                  <span>المزيد</span>
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

              </div>

              <div className={`order-1 ${activeTab % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>

            </div>

          ))
          }
        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;
