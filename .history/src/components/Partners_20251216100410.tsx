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

        {/* Responsive Grid for 5 partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-12">
          {realPartners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-white rounded-xl p-8 md:p-10 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[200px] md:min-h-[250px]"
            >
              <div className="relative w-full h-32 md:h-40 flex items-center justify-center mb-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground text-center">
                {partner.name}
              </h3>
            </div>
          ))}

          {/* Optional: Add empty placeholder for better grid alignment */}
          <div className="hidden lg:block lg:col-span-3 xl:hidden"></div>
          <div className="hidden sm:block lg:hidden"></div>
        </div>

        {/* Or Horizontal Scroll for mobile with no animation */}
        <div className="lg:hidden mt-12">
          <div className="flex overflow-x-auto gap-8 pb-6 snap-x snap-mandatory scrollbar-hide">
            {realPartners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 w-64 snap-center"
              >
                <div className="bg-white rounded-xl p-8 border border-border/50 h-48 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;