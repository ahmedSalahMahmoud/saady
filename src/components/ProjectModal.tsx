import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Calendar, Building2, ChevronRight, ChevronLeft, X } from "lucide-react";
import { useState } from "react";
import { ProjectDetails } from "@/data/projectsData";

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-card border-border">
        {/* Image Gallery */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Image Navigation */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Image Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-accent w-6"
                        : "bg-background/60 hover:bg-background"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 text-right">
          <DialogHeader className="text-right mb-6">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground text-right">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg">
              <div className="bg-accent/20 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">الموقع</p>
                <p className="font-semibold text-foreground">{project.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg">
              <div className="bg-accent/20 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">سنة الإنجاز</p>
                <p className="font-semibold text-foreground">{project.year}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg">
              <div className="bg-accent/20 p-2 rounded-lg">
                <Building2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">العميل</p>
                <p className="font-semibold text-foreground">{project.client}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-3">تفاصيل المشروع</h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Thumbnail Gallery */}
          {project.images.length > 1 && (
            <div className="mt-6">
              <h4 className="text-lg font-bold text-foreground mb-3">معرض الصور</h4>
              <div className="grid grid-cols-4 gap-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden transition-all ${
                      index === currentImageIndex
                        ? "ring-2 ring-accent"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
