import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Store } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      // Blur header after 20px
      setIsScrolled(window.scrollY > 20);

      // Section tracker for active visual indicator
      const sections = ['inicio', 'productos', 'ofertas', 'nosotros', 'contacto'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'productos', label: 'Productos' },
    { id: 'ofertas', label: 'Ofertas' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-gray-800 border-b border-[#2E8B57]/10'
          : 'bg-white py-5 text-gray-800 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Name */}
          <a
            href="#inicio"
            id="nav-logo"
            onClick={(e) => handleLinkClick(e, 'inicio')}
            className="flex items-center space-x-2 text-xl sm:text-2xl font-bold tracking-tight text-[#2E8B57] hover:opacity-90 transition-opacity"
          >
            <Store className="h-6 w-6 text-[#2E8B57] sm:h-7 sm:w-7" />
            <span>
              Inversiones <span className="text-[#2E8B57] font-extrabold">Acosta Paz</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                id={`lnk-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`text-sm font-bold tracking-wide transition-colors relative py-1 hover:text-[#2E8B57] ${
                  activeSection === item.id ? 'text-[#2E8B57]' : 'text-gray-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2E8B57] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Active Shopping Cart Icon with Animation */}
            <button
              id="cart-btn-trigger"
              onClick={onCartClick}
              aria-label="Abrir carrito"
              className="relative p-2.5 rounded-full hover:bg-green-50/60 text-gray-700 hover:text-[#2E8B57] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/20 group"
            >
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span
                  id="cart-badge"
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2E8B57] text-[10px] font-bold text-white ring-2 ring-white animate-bounce-short"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              id="hamburger-btn-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-650 hover:text-[#2E8B57] hover:bg-green-50 md:hidden focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/20"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-150 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-3 bg-white">
          {menuItems.map((item) => (
            <a
              key={item.id}
              id={`mob-lnk-${item.id}`}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`px-4 py-3 rounded-xl text-base font-bold transition-colors flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-green-50/60 text-[#2E8B57]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#2E8B57]'
              }`}
            >
              <span>{item.label}</span>
              <span className={`h-1.5 w-1.5 rounded-full ${activeSection === item.id ? 'bg-[#2E8B57]' : 'bg-transparent'}`} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
