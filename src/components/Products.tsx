import { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import { Search, ShoppingCart, Filter } from 'lucide-react';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = ['Todos', 'Abarrotes', 'Bebidas', 'Limpieza', 'Frescos'];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCartClick = (product: Product) => {
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1200);
  };

  return (
    <section id="productos" className="bg-[#F5F5F5] py-16 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Nuestros Productos
          </h2>
          <div className="h-1.5 w-16 bg-[#2E8B57] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Abastecemos tu hogar con productos frescos, limpios y de primera necesidad. Filtra por departamento para encontrar lo que buscas.
          </p>
        </div>

        {/* Dynamic Filters & Search Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          {/* Category Pill Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <div className="flex bg-white/70 p-1.5 rounded-2xl border-2 border-white shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  id={`cat-filter-${category}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap focus:outline-none ${
                    selectedCategory === category
                      ? 'bg-[#2E8B57] text-white shadow-md'
                      : 'text-gray-600 hover:text-[#2E8B57] hover:bg-[#F5F5F5]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full md:w-80 group">
            <input
              id="product-search-input"
              type="text"
              placeholder="Buscar producto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm bg-white border-2 border-white rounded-2xl focus:border-emerald-500/20 shadow-md focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all placeholder:text-gray-400"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-[#2E8B57] transition-colors" />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-2xl border-2 border-white shadow-md hover:shadow-xl hover:scale-[1.02] hover:translate-y-[-4px] transition-all duration-300 overflow-hidden flex flex-col group relative"
              >
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#2E8B57] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10 border border-emerald-50">
                  {product.category}
                </span>

                {/* Optional discount tag */}
                {product.originalPrice && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-extrabold px-2 py-1 rounded-md shadow-sm z-10">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}

                {/* Product Image Section */}
                <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unit Label */}
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      Medida: {product.unit}
                    </span>
                    
                    {/* Name */}
                    <h3 className="font-bold text-gray-950 group-hover:text-[#2E8B57] transition-colors line-clamp-1 text-sm sm:text-base">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing and Action Button */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <div className="flex items-baseline justify-between mb-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-lg sm:text-xl font-extrabold text-[#2E8B57] font-mono">
                          L. {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through font-mono">
                            L. {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      id={`btn-add-${product.id}`}
                      onClick={() => handleAddToCartClick(product)}
                      className={`w-full py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 ${
                        addedProductId === product.id
                          ? 'bg-[#2E8B57] text-white focus:ring-[#2E8B57]/20 shadow-inner'
                          : 'bg-green-50/60 hover:bg-[#2E8B57] text-[#2E8B57] hover:text-white border border-[#2E8B57]/30 hover:border-[#2E8B57] focus:ring-emerald-500/20 active:scale-95'
                      }`}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>
                        {addedProductId === product.id ? '¡Agregado!' : 'Agregar'}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 bg-white rounded-2xl border-2 border-white shadow-md p-8 max-w-md mx-auto">
            <p className="text-gray-400 text-lg mb-2">No se encontraron productos</p>
            <p className="text-gray-500 text-sm">
              Prueba buscando otro término o seleccionando una categoría diferente.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
              }}
              className="mt-5 inline-flex items-center space-x-2 text-sm font-bold text-[#2E8B57] hover:text-[#236b43]"
            >
              <span>Ver todos los productos</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
