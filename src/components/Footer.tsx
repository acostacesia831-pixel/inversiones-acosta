import React from 'react';
import { Store, Facebook, Instagram, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-900">
          
          {/* Column 1: App Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#inicio"
              onClick={handleScrollToTop}
              className="inline-flex items-center space-x-2 text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              <Store className="h-6 w-6 text-[#2E8B57]" />
              <span>
                Inversiones <span className="text-[#2E8B57] font-extrabold">Acosta Paz</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Tu mini súper familiar de y para Honduras. Ofrecemos abarrotes, bebidas, frutas, verduras frescas y productos de limpieza con la mejor calidad y servicio del mercado.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500 font-semibold font-sans mt-2">
              <ShieldCheck className="h-4 w-4 text-[#2E8B57] flex-shrink-0" />
              <span>Establecimiento Seguro e Higienizado</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold font-sans">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              {['inicio', 'productos', 'ofertas', 'nosotros', 'contacto'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(section);
                      if (element) {
                        const offset = 80;
                        const pos = element.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top: pos, behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-[#2E8B57] transition-colors capitalize font-semibold"
                  >
                    {section === 'inicio' ? 'Inicio' : section}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold font-sans">Redes y Contacto</h4>
            <p className="text-xs text-gray-500 leading-normal">
              Síguenos en nuestras redes sociales para enterarte antes que nadie de las ofertas especiales del mes. ¡Te esperamos!
            </p>
            
            {/* Social links row */}
            <div className="flex space-x-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 bg-gray-900 border border-gray-800 hover:bg-[#2E8B57] hover:text-white rounded-xl flex items-center justify-center text-gray-300 transition-all shadow-md active:scale-95"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 bg-gray-900 border border-gray-800 hover:bg-[#2E8B57] hover:text-white rounded-xl flex items-center justify-center text-gray-300 transition-all shadow-md active:scale-95"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/50499999999"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 bg-gray-900 border border-gray-800 hover:bg-[#2E8B57] hover:text-white rounded-xl flex items-center justify-center text-gray-300 transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} Inversiones Acosta Paz. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-1">
            <span>Diseñado con</span>
            <Heart className="h-3 w-3 text-[#2E8B57] animate-pulse fill-[#2E8B57]" />
            <span>para la comunidad hondureña.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
