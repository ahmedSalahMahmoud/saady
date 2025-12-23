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

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <style>{`
        .marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee__inner {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee__inner:hover {
          animation-play-state: paused;
        }

        .marquee__group {
          display: flex;
        }

        .marquee__item {
          flex: 0 0 auto;
          width: 220px;
          height: 140px;
          margin-inline: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="container-rtl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">الشركاء</h2>
        </div>

        <div className="marquee">
          <div className="marquee__inner">
            {/* First group */}
            <div className="marquee__group">
              {partners.map((partner) => (
                <div key={partner.id} className="marquee__item">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>

            {/* Second group (follows seamlessly) */}
            <div className="marquee__group">
              {partners.map((partner) => (
                <div
                  key={`dup-${partner.id}`}
                  className="marquee__item"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
