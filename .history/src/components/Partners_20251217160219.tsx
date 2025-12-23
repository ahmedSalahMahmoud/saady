import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Activate Swiper modules
SwiperCore.use([Autoplay]);

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
    <section className="py-20 bg-muted/30">
      <div className="container-rtl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">الشركاء</h2>
          <div className="w-32 h-1.5 bg-accent mx-auto mt-2 mb-6" />
          <p className="text-lg text-muted-foreground">شركاؤنا في النجاح</p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={24}
          slidesPerView={5}
          loop={true} // Infinite loop
          dir="rtl" // Right-to-left
          autoplay={{
            delay: 0, // continuous
            disableOnInteraction: false,
          }}
          speed={3000} // speed of auto scroll
          breakpoints={{
            320: { slidesPerView: 1.5 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="bg-white rounded-xl p-6 border border-border/50 flex items-center justify-center h-36">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
