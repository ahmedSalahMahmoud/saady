import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.png';
import project3 from '@/assets/project3.png';
import project4 from '@/assets/project4.png';

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: 'مشروع فندق شقق غيمة',
      category: 'المقاولات العامة',
    },
    {
      image: project2,
      title: 'فيلا الفقيه',
      category: 'المقاولات العامة',
    },
    {
      image: project3,
      title: 'أعالي جدة',
      category: 'المقاولات العامة',
    },
    {
      image: project4,
      title: 'مشروع مدينة الورود',
      category: 'المقاولات العامة',
    },
  ];

  return (
    <section id="projects" className="py-32 lg:py-40 bg-background">
      <div className="container-rtl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            المشاريع
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نفخر بتقديم مجموعة من المشاريع المتميزة التي تعكس خبرتنا والتزامنا بالجودة
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden aspect-square hover:shadow-hover transition-all duration-500"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-xs md:text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
