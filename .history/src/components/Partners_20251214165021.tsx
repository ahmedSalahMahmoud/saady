import { useState } from 'react';

const Partners = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Partner logos - replace these with actual partner logo images
  // You can add partner logos to the public folder and reference them here
  const partners = [
    { id: 1, name: 'شريك 1', logo: '/placeholder.svg' },
    { id: 2, name: 'شريك 2', logo: '/placeholder.svg' },
    { id: 3, name: 'شريك 3', logo: '/placeholder.svg' },
    { id: 4, name: 'شريك 4', logo: '/placeholder.svg' },
    { id: 5, name: 'شريك 5', logo: '/placeholder.svg' },
    { id: 6, name: 'شريك 6', logo: '/placeholder.svg' },
    { id: 7, name: 'شريك 7', logo: '/placeholder.svg' },
    { id: 8, name: 'شريك 8', logo: '/placeholder.svg' },
    { id: 9, name: 'شريك 9', logo: '/placeholder.svg' },
    { id: 10, name: 'شريك 10', logo: '/placeholder.svg' },
  ];

  // Duplicate partners for seamless infinite scroll (2 sets for perfect loop)
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-32 lg:py-40 bg-muted/30">
      <div className="container-rtl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            الشركاء
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            شركاؤنا في النجاح
          </p>
        </div>

        {/* Partners Slider - CSS Animation Based */}
        <div 
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex pb-8"
            style={{
              animation: isPaused ? 'none' : 'scrollSteps 60s infinite',
              width: 'max-content',
              gap: '2rem'
            }}
          >
            {/* Render partners multiple times for seamless loop */}
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-56 md:w-64 lg:w-72 xl:w-80 group"
              >
                <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 h-40 md:h-48 lg:h-56 flex items-center justify-center border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style>{`
          @keyframes scrollSteps {
            0%, 8% {
              transform: translateX(0);
            }
            10%, 18% {
              transform: translateX(calc(-50% / 5));
            }
            20%, 28% {
              transform: translateX(calc(-50% * 2 / 5));
            }
            30%, 38% {
              transform: translateX(calc(-50% * 3 / 5));
            }
            40%, 48% {
              transform: translateX(calc(-50% * 4 / 5));
            }
            50%, 58% {
              transform: translateX(-50%);
            }
            60%, 100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Partners;

