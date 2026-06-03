import { OFFERS } from '../data';
import { Tag, Sparkles } from 'lucide-react';

export default function Offers() {
  return (
    <section id="ofertas" className="bg-[#F5F5F5] py-16 scroll-mt-12 overflow-hidden relative">
      {/* Visual Background Details for Design Quality */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 bg-amber-100/60 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-amber-200/50">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Descuentos Semanales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ofertas de la Semana
          </h2>
          <div className="h-1.5 w-16 bg-[#2E8B57] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Ahorra en tus compras familiares con nuestras promociones exclusivas. ¡Vuelve seguido para descubrir nuevos combos!
          </p>
        </div>

        {/* Offers Container Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <article
              key={offer.id}
              id={`offer-card-${offer.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] hover:translate-y-[-4px] transition-all duration-300 border-2 border-white flex flex-col group"
            >
              {/* Product preview or offer graphic */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Red Discount badge */}
                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center space-x-1">
                  <Tag className="h-3.5 w-3.5" />
                  <span>{offer.discount}</span>
                </span>

                {/* Day Badge */}
                <span className="absolute bottom-4 left-4 bg-emerald-900/90 backdrop-blur-sm text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase border border-emerald-500/20">
                  {offer.badge}
                </span>
              </div>

              {/* Offer description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-950 group-hover:text-[#2E8B57] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2E8B57] uppercase tracking-widest">
                    Vence pronto
                  </span>
                  <a
                    href="#productos"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('productos');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-gray-900 hover:text-[#2E8B57] underline transition-colors"
                  >
                    Ver pasillo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

