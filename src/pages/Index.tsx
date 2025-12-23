import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import ServiceDetails from '@/components/ServiceDetails';
import Projects from '@/components/Projects';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Stats />
        <Services />
        <ServiceDetails />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
