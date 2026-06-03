import { Product, CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, Send, Store } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckoutWhatsApp = () => {
    // Generate order summary for WhatsApp
    const headerText = '🛒 *Inversiones Acosta Paz - Nuevo Pedido* 🛒\n\n';
    let itemsText = '';
    cartItems.forEach((item, index) => {
      itemsText += `${index + 1}. *${item.product.name}* (x${item.quantity}) - L. ${(
        item.product.price * item.quantity
      ).toFixed(2)}\n`;
    });
    const footerText = `\n💰 *Total Estimado:* L. ${totalAmount.toFixed(2)}\n\nMuchas gracias. ¿Me podrían indicar la dirección del envío?`;

    const encodedText = encodeURIComponent(headerText + itemsText + footerText);
    const whatsappUrl = `https://wa.me/50499999999?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      id="cart-drawer-container"
      className={`fixed inset-0 z-[10000] transition-visibility ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      {/* Black Translucent Backdrop */}
      <div
        id="cart-overlay-shadow"
        onClick={onClose}
        className={`absolute inset-0 bg-gray-950/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Slideout Content Element */}
      <div
        id="cart-slideout-box"
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header Block */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white text-gray-950">
          <div className="flex items-center space-x-2.5">
            <Store className="h-5 w-5 text-[#2E8B57]" />
            <h3 className="font-bold text-lg font-sans">Tu Carrito</h3>
            <span className="bg-green-50 text-[#2E8B57] text-xs font-bold px-2 py-0.5 rounded-full border border-green-105">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button
            id="close-cart-drawer-btn"
            onClick={onClose}
            aria-label="Cerrar"
            className="p-1 px-2.5 rounded-xl border border-gray-150 hover:bg-neutral-50 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Block / Items list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <article
                key={item.product.id}
                id={`cart-row-item-${item.product.id}`}
                className="bg-white border border-gray-200 rounded-2xl p-3 flex space-x-3 items-center group relative shadow-sm"
              >
                {/* Img preview */}
                <div className="h-16 w-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Info and quantity modifiers */}
                <div className="flex-1 min-w-0 pr-6">
                  <h4 className="font-bold text-gray-950 text-sm truncate leading-snug">
                    {item.product.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide font-medium">
                    L. {item.product.price.toFixed(2)} / {item.product.unit}
                  </p>

                  <div className="flex items-center space-x-3 mt-3">
                    <div className="flex items-center border border-gray-200 bg-gray-50 rounded-xl">
                      {/* Decrement Button */}
                      <button
                        id={`btn-dec-${item.product.id}`}
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1.5 text-gray-500 hover:text-[#2E8B57] hover:bg-gray-100 rounded-l-xl transition-colors"
                        aria-label="Disminuir"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 text-xs font-bold text-gray-950 font-mono">
                        {item.quantity}
                      </span>
                      {/* Increment Button */}
                      <button
                        id={`btn-inc-${item.product.id}`}
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1.5 text-gray-500 hover:text-[#2E8B57] hover:bg-gray-100 rounded-r-xl transition-colors"
                        aria-label="Aumentar"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <span className="text-xs font-bold text-[#2E8B57] font-mono">
                      L. {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Direct Trash Bin icon */}
                <button
                  id={`btn-trash-${item.product.id}`}
                  onClick={() => onRemoveItem(item.product.id)}
                  aria-label="Quitar del carrito"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-red-650 p-2 rounded-xl hover:bg-red-50/80 transition-colors"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                </button>
              </article>
            ))
          ) : (
            /* Empty State */
            <div className="text-center py-20 flex flex-col items-center justify-center">
              <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center text-[#2E8B57] mb-4 animate-pulse">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-gray-950 text-base font-sans">Tu Carrito Está Vacío</h4>
              <p className="text-gray-500 text-sm mt-1 max-w-xs mx-auto leading-relaxed">
                ¡Empieza a agregar productos de nuestro súper hoy mismo!
              </p>
              <button
                onClick={onClose}
                className="mt-6 bg-[#2E8B57] hover:bg-[#236b43] text-white font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-md active:scale-95"
              >
                Seguir Comprando
              </button>
            </div>
          )}
        </div>

        {/* Footer Billing Block */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-white space-y-4">
            <div className="space-y-2 text-sm text-gray-650">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span className="font-mono font-semibold text-gray-950">L. {totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-[#2E8B57] font-bold">
                <span>Envío (Barrio El Centro)</span>
                <span>Gratis</span>
              </div>
              <hr className="border-gray-100" />
              <div className="flex justify-between items-center text-gray-950 font-extrabold text-lg pt-1 font-sans">
                <span>Total Estimado</span>
                <span className="text-[#2E8B57] font-mono">L. {totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {/* Clear button */}
              <button
                id="clear-cart-act"
                onClick={onClearCart}
                className="py-3 px-4 border border-gray-200 text-gray-500 hover:bg-neutral-50 hover:text-gray-700 text-xs font-bold rounded-xl transition-all uppercase tracking-wider focus:outline-none"
              >
                Vaciar Carrito
              </button>

              {/* Whatsapp checkout option */}
              <button
                id="checkout-wh-act"
                onClick={handleCheckoutWhatsApp}
                className="py-3 px-4 bg-[#2E8B57] hover:bg-[#236b43] active:scale-95 text-white text-xs font-extrabold rounded-xl transition-all flex items-center justify-center space-x-1 uppercase tracking-wider shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/30"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Pedir x WhatsApp</span>
              </button>
            </div>
            
            <p className="text-[10px] text-gray-400 text-center leading-normal">
              La orden se enviará formateada por WhatsApp para programar el despacho express hoy mismo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
