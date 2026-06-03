import { Award, Compass, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="bg-[#F5F5F5] py-16 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image Illustration wrapped in Bento Frame */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#2E8B57] rounded-3xl rotate-3 scale-95 group-hover:rotate-1 transition-transform duration-500 opacity-20 pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[4/3] sm:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1534723452862-4c874e70d58d?auto=format&fit=crop&w=700&q=80"
                alt="Mini súper Inversiones Acosta Paz"
                className="w-full h-full object-cover transform scale-102 group-hover:scale-100 transition-transform duration-500"
              />
            </div>
            {/* Overlay statistics badge - styled as a mini Bento badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#2E8B57] text-white p-5 rounded-2xl shadow-xl flex items-center space-x-3 border-2 border-white">
              <span className="text-3xl font-extrabold font-mono">100%</span>
              <div className="text-xs font-bold leading-tight">
                Familiar y <br />Hondureño
              </div>
            </div>
          </div>

          {/* Column 2: Narrative Text wrapped in Bento Frame */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-white shadow-md">
            <span className="text-xs font-bold text-[#2E8B57] uppercase tracking-widest block mb-3">
              ¿Quiénes somos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Nuestra Empresa & Valores
            </h2>
            <div className="h-1.5 w-12 bg-[#2E8B57] mt-4 mb-8 rounded-full" />
            
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              En **Inversiones Acosta Paz**, nos enorgullece ser el punto de encuentro y confianza para las familias hondureñas. Nacimos con el firme propósito de facilitar el acceso a productos esenciales de la canasta básica de manera honesta, fresca y barata.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
              Trabajamos todos los días con productores locales para asegurar que cada fruta, verdura y grano en nuestros estantes cumpla con los estándares de frescura que tu familia se merece.
            </p>

            {/* Mission & Vision Rows with Bento Block styling */}
            <div className="mt-10 space-y-6">
              {/* Mission */}
              <div className="flex items-start space-x-4 bg-[#F5F5F5]/60 p-4 rounded-2xl border border-white hover:bg-neutral-50 transition-colors">
                <div className="p-3 bg-green-50/80 text-[#2E8B57] rounded-xl flex-shrink-0">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 leading-snug">Misión</h3>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                    Facilitar el acceso a alimentos y productos del hogar esenciales mediante un servicio cercano, precios justos y una calidad inigualable que cuida de la economía familiar.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start space-x-4 bg-[#F5F5F5]/60 p-4 rounded-2xl border border-white hover:bg-neutral-50 transition-colors">
                <div className="p-3 bg-green-50/80 text-[#2E8B57] rounded-xl flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 leading-snug">Visión</h3>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                    Ser el mini súper de referencia en nuestra comunidad y expandir nuestra frescura, reconocidos por la calidez de nuestra atención, la honestidad de nuestro pesaje y los mejores precios del mercado.
                  </p>
                </div>
              </div>

              {/* Community values tag */}
              <div className="flex items-start space-x-4 bg-[#F5F5F5]/60 p-4 rounded-2xl border border-white hover:bg-neutral-50 transition-colors">
                <div className="p-3 bg-green-50/80 text-[#2E8B57] rounded-xl flex-shrink-0">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 leading-snug">Valores</h3>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                    Honestidad, amabilidad, higiene y solidaridad. Creemos en el crecimiento comunitario honesto y el bienestar de nuestros vecinos.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
