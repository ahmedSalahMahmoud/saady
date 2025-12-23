import React from 'react';

type Partner = {
  id: number;
  name: string;
  logo: string;
};

const Partners: React.FC = () => {
  // Logic to handle 41 partners - using Array.from to simulate the full list
  const partners: Partner[] = Array.from({ length: 41 }, (_, i) => ({
    id: i + 1,
    name: `شريك ${i + 1}`,
    logo: `/saady/partners/${i + 1}.jpg`,
  }));

  const LOOP_COUNT = 3;

  return (
    <section className="py-16 lg:py-20 overflow-hidden bg-background" dir="rtl">
      <style>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          /* Added vertical padding so the translateY hover effect doesn't clip */
          padding: 30px 0;
          margin: -30px 0; 
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee__track {
          display: flex;
          width: max-content;
          /* Duration increased to 70s because items are larger */
          animation: marquee-scroll 70s linear infinite;
        }

        .marquee-container:hover .marquee__track {
          animation-play-state: paused;
        }

        .marquee__item {
          flex: 0 0 auto;
          width: 280px; 
          height: 180px;
          margin-inline: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          padding: 30px;
          position: relative;
        }

        .marquee__item:hover {
          /* Now moves up freely without hiding */
          transform: translateY(-12px); 
          border-color: hsl(var(--primary));
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
          z-index: 10;
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(33.333%); }
        }
      `}</style>

      <div className="container-rtl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-cairo">
            شركاء النجاح
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="marquee-container">
          <div className="marquee__track">
            {Array.from({ length: LOOP_COUNT }).map((_, loopIndex) => (
              <React.Fragment key={`loop-${loopIndex}`}>
                {partners.map((partner) => (
                  <div key={`${loopIndex}-${partner.id}`} className="marquee__item">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      /* max-h-28 (112px) makes the logos significantly larger */
                      className="max-h-28 w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;