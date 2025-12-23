import { useState } from 'react';

const Partners = () => {
  const realPartners = [
    { id: 1, name: 'شريك 1', logo: `/saady/partners/1.jpg` },
    { id: 2, name: 'شريك 2', logo: `/saady/partners/2.jpg` },
    { id: 3, name: 'شريك 3', logo: `/saady/partners/3.jpg` },
    { id: 4, name: 'شريك 4', logo: `/saady/partners/4.jpg` },
    { id: 5, name: 'شريك 5', logo: `/saady/partners/5.jpg` },
  ];

  return (
    <section id="partners" className="py-20 lg:py-32 bg-muted/30">
      <div className="container-rtl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            الشركاء
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            شركاؤنا في النجاح
          </p>
        </div>

        {/* Simple responsive flex row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {realPartners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-white rounded-xl p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 p-4"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;