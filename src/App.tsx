import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Offers from './components/Offers';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem } from './types';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync with localStorage so user data doesn't get wiped out on page reloads
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedCart = window.localStorage.getItem('acosta_paz_cart');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      }
    } catch (error) {
      console.warn('Unable to access localStorage on load due to iframe security constraints:', error);
    }
  }, []);

  const saveCartToStorage = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('acosta_paz_cart', JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.warn('Unable to write to localStorage due to iframe security constraints:', error);
    }
  };

  // 1. ADD TO CART
  const handleAddToCart = (product: Product) => {
    const existingIndex = cartItems.findIndex((item) => item.product.id === product.id);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      saveCartToStorage(updated);
    } else {
      const updated = [...cartItems, { product, quantity: 1 }];
      saveCartToStorage(updated);
    }
  };

  // 2. UPDATE QUANTITY (plus or minus)
  const handleUpdateQuantity = (productId: string, delta: number) => {
    const existingIndex = cartItems.findIndex((item) => item.product.id === productId);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      const newQuantity = updated[existingIndex].quantity + delta;
      
      if (newQuantity <= 0) {
        updated.splice(existingIndex, 1);
      } else {
        updated[existingIndex].quantity = newQuantity;
      }
      saveCartToStorage(updated);
    }
  };

  // 3. REMOVE SINGLE ITEM ENTIRELY
  const handleRemoveItem = (productId: string) => {
    const updated = cartItems.filter((item) => item.product.id !== productId);
    saveCartToStorage(updated);
  };

  // 4. CLEAR THE CART
  const handleClearCart = () => {
    saveCartToStorage([]);
  };

  // Scroll event detector for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Calculate distinct and total cart quantities
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div id="app-root-wrapper" className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth">
      
      {/* 1. FIXED NAVIGATION HEADER */}
      <Header cartCount={totalCartCount} onCartClick={() => setIsCartOpen(true)} />

      {/* MAIN CONTAINER FOR ACCESSIBILITY */}
      <main id="app-main-content">
        {/* 2. HERO HIGHLIGHT ZONE */}
        <Hero />

        {/* 3. PRODUCT CATALOG SEARCH & FILTER */}
        <Products onAddToCart={handleAddToCart} />

        {/* 4. WEEKLY OFFERS BANNER */}
        <Offers />

        {/* 5. ABOUT BRAND & VALUES STORY */}
        <About />

        {/* 6. CONTACT FORM & HOURS BOX */}
        <Contact />
      </main>

      {/* 7. DETAILED INFORMATIONAL FOOTER */}
      <Footer />

      {/* 8. CAROUSEL / SLIDEOUT CART DRAWER ROW */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 9. BOTTOM FLOATING BACK TO TOP TRIGGER */}
      <button
        id="scroll-to-top-floating-btn"
        onClick={handleScrollToTop}
        aria-label="Volver arriba"
        className={`fixed bottom-6 right-6 p-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 transform focus:outline-none focus:ring-4 focus:ring-emerald-500/20 active:scale-90 ${
          showBackToTop
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
      >
        <ChevronUp className="h-5 w-5 stroke-[2.5]" />
      </button>

    </div>
  );
}
export { App };
