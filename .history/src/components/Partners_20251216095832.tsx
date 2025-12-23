import { useState } from 'react';

const Partners = () => {
  const [isPaused, setIsPaused] = useState(false);

  const realPartners = [
    { id: 1, name: 'شريك 1', logo: `/saady/partners/1.jpg` },
    { id: 2, name: 'شريك 2', logo: `/saady/partners/2.jpg` },
    { id: 3, name: 'شريك 3', logo: `/saady/partners/3.jpg` },
    { id: 4, name: 'شريك 4', logo: `/saady/partners/4.jpg` },
    { id: 5, name: 'شريك 5', logo: `/saady/partners/5.jpg` },
  ];

  // Create 10 copies
  const partnerCopies = Array(10).fill(realPartners).flat();

  return (
    <section id="partners" className="py-20 lg:py-32 bg-muted/30" dir="rtl">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            الشركاء
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            شركاؤنا في النجاح
          </p>
        </div>

        {/* True RTL Animation */}
        <div
          className="overflow-hidden relative py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />

          <div
            className="flex"
            style={{
              animation: isPaused ? 'none' : 'marqueeRTL 25s linear infinite',
              width: `${partnerCopies.length * 320}px` // Dynamic width
            }}
          >
            {partnerCopies.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="mx-8 flex-shrink-0 w-64"
              >
                <div className="bg-white rounded-2xl p-8 h-48 flex items-center justify-center border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 p-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          /* True RTL Animation: Right to Left */
          @keyframes marqueeRTL {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(50%);
            }
          }
          
          /* For mobile */
          @media (max-width: 768px) {
            @keyframes marqueeRTL {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(25%);
              }
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Partners;