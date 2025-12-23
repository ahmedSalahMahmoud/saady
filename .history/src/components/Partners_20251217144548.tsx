type Partner = {
  id: number;
  name: string;
  logo: string;
};

const Partners: React.FC = () => {
  const partners: Partner[] = [
    { id: 1, name: 'شريك 1', logo: '/saady/partners/1.jpg' },
    { id: 2, name: 'شريك 2', logo: '/saady/partners/2.jpg' },
    { id: 3, name: 'شريك 3', logo: '/saady/partners/3.jpg' },
    { id: 4, name: 'شريك 4', logo: '/saady/partners/4.jpg' },
    { id: 5, name: 'شريك 5', logo: '/saady/partners/5.jpg' },
  ];

  const DUPLICATES = 10;

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <style>{`
        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee__track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
        }

        .marquee__track:hover {
          animation-play-state: paused;
        }

        .marquee__item {
          flex: 0 0 auto;
          width: 220px;
          height: 140px;
          margin-right: 24px; /* simple spacing */
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.08);
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="container-rtl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">الشركاء</h2>
        </div>

        <div className="marquee">
          <div className="marquee__track">
            {Array.from({ length: DUPLICATES }).map((_, i) =>
              partners.map((partner) => (
                <div
                  key={`${i}-${partner.id}`}
                  className="marquee__item"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
