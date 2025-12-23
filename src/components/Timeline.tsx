import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const milestones = [
    {
      year: '2008',
      title: 'بداية الرحلة',
      services: ['المقاولات العامة', 'صيانة المباني'],
    },
    {
      year: '2012',
      title: 'التوسع في الخدمات',
      services: ['أنظمة السلامة', 'صيانة أنظمة الحريق'],
    },
    {
      year: '2015',
      title: 'الكهروميكانيك',
      services: ['صيانة الكهروميكانيك', 'أنظمة التكييف'],
    },
    {
      year: '2021',
      title: 'التميز والريادة',
      services: ['الترميم والتأهيل', 'المشاريع الكبرى'],
    },
    {
      year: '2024',
      title: 'نحو المستقبل',
      services: ['التقنيات الحديثة', 'الحلول الذكية'],
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="container-rtl text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-accent/10 text-accent text-base md:text-lg font-semibold mb-6">
            منذ أكثر من 15 عاماً
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            لقد بدأنا الرحلة بشغف لجلب الابتكار
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            في كل مجال نلمسه
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="container-rtl flex items-center gap-4 mb-8 justify-start">
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Scroll Container - Full Width */}
        <div className="w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div
            ref={scrollRef}
            className="flex gap-6 pb-8 px-4 md:px-4 lg:px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 md:w-80 group"
              >
                {/* Card */}
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:border-primary/30 hover:shadow-hover transition-all duration-300">
                  {/* Year */}
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                    {milestone.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {milestone.title}
                  </h3>

                  {/* Services */}
                  <ul className="space-y-3">
                    {milestone.services.map((service, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm md:text-base flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Line */}
                <div className="relative mt-6 pt-6 border-t-2 border-border/50">
                  <div className="absolute top-0 right-6 w-4 h-4 rounded-full bg-accent transform -translate-y-1/2 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;