import { useState } from "react";
import { CheckCircle2, Users, Award, Clock, ShieldCheck, Target, ChevronDown, ChevronUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "فريق متخصص",
    description: "كوادر مؤهلة ومدربة على أعلى المستويات",
  },
  {
    icon: Award,
    title: "جودة عالية",
    description: "التزام بأعلى معايير الجودة والسلامة العالمية",
  },
  {
    icon: Clock,
    title: "التزام بالمواعيد",
    description: "تنفيذ المشاريع في الوقت المحدد دون تأخير",
  },
  {
    icon: ShieldCheck,
    title: "ضمان الأعمال",
    description: "نقدم ضمانات شاملة على جميع خدماتنا",
  },
  {
    icon: Target,
    title: "أسعار تنافسية",
    description: "أفضل الأسعار مع الحفاظ على الجودة",
  },
  {
    icon: CheckCircle2,
    title: "خبرة واسعة",
    description: "أكثر من 20 عاماً من الخبرة في السوق",
  },
];

const WhyUs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Content */}
          <div className="lg:col-span-2">
            <span className="inline-block text-accent font-semibold mb-4">من نحن</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              مؤسسة نخبة سعد للمقاولات العامة
            </h2>
            
            <div className="text-primary-foreground/80 text-base mb-6">
              <p>
                لديها فريق مختصون بتحليل متطلبات المشروع منهجياً وتجهيز القوى العاملة لتنفيذ كافة الأعمال، ومن أولى الأعمال التي يقوم بها هذا الفريق وضع الجدول الزمني والتخطيط اللازمين لتنفيذ أعمال المشروع.
              </p>
              
              {expanded && (
                <div className="space-y-3 mt-4 animate-fade-in">
                  <p>
                    بالإضافة إلى ذلك يقوم الفريق بتحديد وحصر النفقات وذلك للإشراف على عملية التنفيذ من وقت البدء. يقوم فريق المشتريات والمهندسين لدى الشركة بتوفير وتوريد المواد اللازمة لتنفيذ مشاريعها بأسعار تنافسية.
                  </p>
                  <p>
                    إن طموح الريادة وشغف التميز يجعلنا في سعي دائم لأن نكون الأفضل في حجم ونوعية استثماراتنا، متسلحين بالتطوير الدائم لأدائنا بما يواكب طموحاتنا.
                  </p>
                  <p>
                    ولنكون واحدة من أولى شركات المقاولات والبناء في المملكة العربية السعودية، يجب أن ينظر إلينا الشركاء والعملاء كجزء لا يتجزأ من عملية نجاحهم.
                  </p>
                  <p>
                    فنحن خُلقنا للمسؤولية أمام المجتمع، ونملك تاريخاً من التخطيط الدقيق وإدارة مواقع عمل آمنة، ملتزمين بالعامل الزمني وتحقيق الجودة والتميز في الأداء.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-accent hover:text-accent/80 font-semibold mt-4 transition-colors"
              >
                {expanded ? "عرض أقل" : "عرض المزيد"}
                {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Checkmarks */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {["مرخصون من الدفاع المدني", "فريق فني متخصص ومؤهل", "خدمة عملاء على مدار الساعة"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-primary-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-accent inline-flex items-center gap-2"
            >
              تواصل معنا الآن
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
