import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'القصة' },
    { href: '#why-us', label: 'نقاط القوة' },
    { href: '#services', label: 'الخدمات' },
    { href: '#partners', label: 'الشركاء' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md py-6'
          : 'bg-transparent py-12'
        }`}
    >
      <div className="container-rtl">
        <div className="flex items-center justify-between">
          {/* Logo - Right side for RTL */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="نخبة سعد المتقدمة"
              className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base md:text-lg font-medium transition-colors duration-300 relative group ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Language Switcher - Left side */}
          <div className="hidden lg:flex items-center">
            <button className={`text-sm md:text-base font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
              }`}>
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
        >
          <nav className="flex flex-col gap-2 pb-4 bg-background/95 backdrop-blur-md rounded-xl p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
