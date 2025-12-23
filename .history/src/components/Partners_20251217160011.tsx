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
    <section className="py-20 overflow-hidden bg-muted/30">
      <div className="container-rtl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">الشركاء</h2>
        </div>

        <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory scrollbar-hide">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex-shrink-0 w-56 h-36 bg-white rounded-xl border border-gray-200 flex items-center justify-center snap-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Partners;
