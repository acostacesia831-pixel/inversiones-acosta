import React from 'react';
import { ShoppingBag, ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="inicio"
      className="bg-[#F5F5F5] pt-28 pb-10 px-4 sm:px-6 lg:px-8 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout Wrapper */}
        <div className="relative min-h-[500px] md:min-h-[600px] rounded-3xl overflow-hidden shadow-lg border-2 border-white flex items-center justify-center">
          {/* Background Image with Rich Dark Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-subtle-zoom" 
            style={{
              backgroundImage: `linear-gradient(to right, rgba(5, 46, 22, 0.85) 0%, rgba(3, 7, 18, 0.4) 100%), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=85')`
            }}
          />

          {/* Decorative Light Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Hero Content Box (Left-aligned & Centered responsive layout) */}
          <div className="relative z-10 w-full text-left max-w-4xl mx-auto px-6 sm:px-12 md:px-16 py-16">
            {/* Visual Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/30 text-emerald-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border border-emerald-400/20 mb-6 animate-fade-in-down">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>MINI SÚPER LOCAL</span>
            </div>

            {/* Headings */}
            <h1 
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
            >
              Calidad y frescura <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-white">
                para tu hogar.
              </span>
            </h1>

            <p 
              id="hero-subtitle"
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-medium mb-10 leading-relaxed"
            >
              Bienvenidos a Inversiones Acosta Paz, variedad, calidad y buenos precios para toda la familia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <a
                id="hero-cta-btn"
                href="#productos"
                onClick={(e) => handleScrollClick(e, 'productos')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-900/30 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Ver Productos</span>
              </a>

              <a
                id="hero-secondary-btn"
                href="#contacto"
                onClick={(e) => handleScrollClick(e, 'contacto')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 active:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span>Contacto</span>
              </a>
            </div>
          </div>

          {/* Animated Scroll indicator */}
          <div className="absolute bottom-6 right-8 z-10 hidden sm:flex items-center space-x-2 text-white/50 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest font-semibold font-mono">Deslizar</span>
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

