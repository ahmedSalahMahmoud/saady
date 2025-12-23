import { useEffect, useRef } from 'react';

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

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    const speed = 0.5; // px per frame (adjust speed here)

    let rafId: number;

    const animate = () => {
      x -= speed;
      track.style.transform = `translateX(${x}px)`;

      const firstItem = track.firstElementChild as HTMLElement;
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;

        // When first item fully leaves screen → move it to end
        if (-x >= itemWidth) {
          x += itemWidth;
          track.appendChild(firstItem);
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <style>{`
        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee__track {
          display: flex;
          will-change: transform;
        }

        .marquee__item {
          flex: 0 0 auto;
          width: 300px;
          height: 150px;
          margin-right: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.08);
        }
      `}</style>

      <div className="container-rtl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">الشركاء</h2>
        </div>

        <div className="marquee">
          <div ref={trackRef} className="marquee__track">
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
        </div>
      </div>
    </section>
  );
};

export default Partners;
