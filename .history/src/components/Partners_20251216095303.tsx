import { useState } from 'react';

const Partners = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Only your REAL 5 partners
  const realPartners = [
    { id: 1, name: 'شريك 1', logo: `/saady/partners/1.jpg` },
    { id: 2, name: 'شريك 2', logo: `/saady/partners/2.jpg` },
    { id: 3, name: 'شريك 3', logo: `/saady/partners/3.jpg` },
    { id: 4, name: 'شريك 4', logo: `/saady/partners/4.jpg` },
    { id: 5, name: 'شريك 5', logo: `/saady/partners/5.jpg` },
  ];

  // Create enough copies for seamless infinite scroll
  // We'll use 5 copies (25 total) to ensure smooth loop
  const partnerCopies = [
    ...realPartners,
    ...realPartners,
    ...realPartners,
    ...realPartners,
    ...realPartners,
  ];

  return (
    <section id="partners" className="py-20 lg:py-32 bg-muted/30">
      <div className="container-rtl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            الشركاء
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            شركاؤنا في النجاح
          </p>
        </div>

        {/* Partners Slider */}
        <div
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />

          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

          <div
            className={`flex pb-8 ${isPaused ? '' : 'animate-scroll-rtl'}`}
            style={{
              width: 'max-content',
              gap: '3rem', // More gap for fewer items
              paddingLeft: '2rem',
              paddingRight: '2rem'
            }}
          >
            {partnerCopies.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-64 md:w-72 lg:w-80 xl:w-96 group"
              >
                <div className="bg-white rounded-xl p-8 md:p-10 lg:p-12 h-48 md:h-56 lg:h-64 flex items-center justify-center border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollRTL {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-20%);
            }
          }
          
          .animate-scroll-rtl {
            animation: scrollRTL 40s linear infinite;
          }
          
          /* Pause animation on reduced motion preference */
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll-rtl {
              animation: none;
            }
          }
          
          /* Slower on mobile */
          @media (max-width: 768px) {
            .animate-scroll-rtl {
              animation-duration: 60s;
            }
          }
        `}</style>
      </div>ffff
    </section>
  );
};

export default Partners;