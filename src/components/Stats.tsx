import { Users, Building2, Award, Wrench, Car, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '+100',
      label: 'الموظفين',
    },
    {
      icon: Building2,
      value: '3',
      label: 'المكاتب الإقليمية',
    },
    {
      icon: Award,
      value: '+200',
      label: 'مشروع منجز',
    },
    {
      icon: Car,
      value: '+50',
      label: 'أسطول المركبات',
    },
    {
      icon: Globe,
      value: '+15',
      label: 'سنوات الخبرة',
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-20 gradient-dark">
      <div className="container-rtl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            نقاط القوة
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-accent" />
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-white/70 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;