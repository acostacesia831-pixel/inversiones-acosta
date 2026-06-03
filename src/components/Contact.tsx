import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Field checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Por favor, completa todos los campos.');
      setFormState('error');
      return;
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      setFormState('error');
      return;
    }

    // Success transition
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      // reset form
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contacto" className="bg-[#F5F5F5] py-16 scroll-mt-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contáctanos
          </h2>
          <div className="h-1.5 w-16 bg-[#2E8B57] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            ¿Tienes alguna duda, necesitas un pedido especial o quieres que te enviemos compras a domicilio? Escríbenos, estamos para servirte.
          </p>
        </div>

        {/* Form and info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Metadata / Infobox */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div className="bg-[#2E8B57] text-white rounded-3xl p-8 shadow-md border-2 border-white relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
              {/* Background graphic */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-700/30 rounded-full translate-x-10 translate-y-10" />
              
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Información de la Tienda</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-emerald-200 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-100">Dirección Oficial</h4>
                    <p className="text-sm mt-1 text-white">Barrio El Centro, frente a la Plaza Pública, Honduras</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-emerald-200 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-100">Teléfono / WhatsApp</h4>
                    <p className="text-sm mt-1 text-white font-mono font-bold">+504 9999-9999</p>
                    <p className="text-xs mt-0.5 text-emerald-200">Atención inmediata por chat</p>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-emerald-200 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-100">Correo Electrónico</h4>
                    <p className="text-sm mt-1 text-white font-mono">contacto@inversionesacostapaz.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-emerald-200 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-100">Horario de Atención</h4>
                    <p className="text-sm mt-1 text-white">Lunes a Sábado: 7:00 AM - 8:00 PM</p>
                    <p className="text-sm text-white">Domingo: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Delivery Map or placeholder graphic */}
            <div className="bg-white border-2 border-white rounded-3xl p-6 flex flex-col justify-between h-48 shadow-md transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center space-x-3 mb-2">
                <span className="flex h-3.5 w-3.5 rounded-full bg-[#2E8B57] animate-pulse" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">
                  Zona de Cobertura de Entrega
                </span>
              </div>
              <p className="text-xs text-gray-500 max-w-sm mb-4 leading-normal">
                Ofrecemos despachos rápidos a todo el Barrio el Centro, Barrio El Calvario, y colonias adyacentes de manera totalmente gratuita.
              </p>
              <div className="h-12 bg-green-50/60 border border-green-150 rounded-xl flex items-center justify-center text-xs font-bold text-[#2E8B57]">
                Llámanos para gestionar tu envío el mismo día.
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form Box */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white border-2 border-white rounded-3xl p-6 sm:p-8 shadow-md transition-all duration-300 hover:scale-[1.01]">
              <h3 className="text-xl font-bold text-gray-950 mb-6 font-sans">Envíanos un mensaje</h3>
              
              {formState === 'success' ? (
                <div id="contact-success-box" className="text-center py-12 flex flex-col items-center">
                  <CheckCircle className="h-16 w-16 text-[#2E8B57] mb-4 animate-bounce-short" />
                  <h4 className="text-lg font-bold text-gray-950 font-sans">¡Mensaje enviado con éxito!</h4>
                  <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto leading-normal">
                    Muchas gracias por escribirnos. Nuestro equipo de atención al cliente revisará tu mensaje y se pondrá en contacto contigo a la brevedad.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 bg-[#2E8B57] hover:bg-[#236b43] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form id="contact-main-form" onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Error Notification */}
                  {formState === 'error' && errorMessage && (
                    <div id="contact-error-box" className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-start space-x-3 text-sm">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5 font-sans">
                      Nombre Completo
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Escribe tu nombre y apellido"
                      disabled={formState === 'loading'}
                      className="w-full px-4 py-3.5 text-sm bg-white border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email-input" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5 font-sans">
                      Correo Electrónico
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ejemplo@correo.com"
                      disabled={formState === 'loading'}
                      className="w-full px-4 py-3.5 text-sm bg-white border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message-input" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5 font-sans">
                      Mensaje
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Escribe tu consulta o pedido aquí..."
                      disabled={formState === 'loading'}
                      className="w-full px-4 py-3.5 text-sm bg-white border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full bg-[#2E8B57] hover:bg-[#236b43] active:scale-95 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/50 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {formState === 'loading' ? (
                      <>
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
