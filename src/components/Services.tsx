import { Flame, Snowflake, Zap, Sparkles, Building, Hammer, Settings, Construction } from "lucide-react";
import fireSafetyImg from "@/assets/fire-safety.jpg";
import hvacImg from "@/assets/hvac-system.jpg";
import electroImg from "@/assets/electromechanical.jpg";

const services = [
  {
    icon: Flame,
    title: "صيانة أنظمة الحريق",
    description: "تركيب وصيانة أحدث أنظمة إنذار ومكافحة الحريق وفق المعايير العالمية",
    image: fireSafetyImg,
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Snowflake,
    title: "التبريد والتكييف",
    description: "صيانة وتركيب أنظمة التكييف المركزي والتبريد للمنشآت التجارية والسكنية",
    image: hvacImg,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "الكهروميكانيك",
    description: "تنفيذ وصيانة مشاريع الأعمال الكهربائية والميكانيكية بأعلى جودة",
    image: electroImg,
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Sparkles,
    title: "نظافة المنشآت",
    description: "خدمات تنظيف شاملة للمباني والمنشآت التجارية والصناعية",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Building,
    title: "تأهيل وترميم المباني",
    description: "إعادة تأهيل المباني القديمة وترميمها وفق أحدث المواصفات",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Settings,
    title: "تشغيل وصيانة المباني",
    description: "إدارة وتشغيل المباني بكفاءة عالية مع خدمات الصيانة الدورية",
    color: "from-slate-500 to-gray-600",
  },
  {
    icon: Construction,
    title: "مشاريع الإنشاء",
    description: "تنفيذ مشاريع البناء والتشييد من الأساسات حتى التسليم",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Hammer,
    title: "المقاولات العامة",
    description: "خدمات مقاولات شاملة لجميع أنواع المشاريع الإنشائية",
    color: "from-teal-500 to-cyan-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold mb-4 animate-fade-up">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up animation-delay-200">
            حلول متكاملة لجميع احتياجاتكم
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up animation-delay-400">
            نقدم مجموعة شاملة من الخدمات في مجال المقاولات والسلامة بأعلى معايير الجودة
          </p>
        </div>

        {/* Featured Services (with images) */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.slice(3).map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card card-hover text-center"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
