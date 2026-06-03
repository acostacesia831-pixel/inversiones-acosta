import { Product, Offer } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Arroz Premium Grano Entero',
    price: 25.00,
    originalPrice: 28.00,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    category: 'Abarrotes',
    description: 'Arroz de grano entero pulido de la más alta calidad, ideal para tus comidas diarias.',
    unit: 'Libra'
  },
  {
    id: 'p2',
    name: 'Frijoles Rojos Clasificados',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80',
    category: 'Abarrotes',
    description: 'Frijoles rojos secos cosechados localmente, de rápida cocción y excelente sabor.',
    unit: 'Libra'
  },
  {
    id: 'p3',
    name: 'Aceite Vegetal Multiuso',
    price: 45.00,
    originalPrice: 50.00,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    category: 'Abarrotes',
    description: 'Aceite vegetal refinado sin colesterol, perfecto para freír, cocinar o aderezar.',
    unit: 'Botella 750ml'
  },
  {
    id: 'p4',
    name: 'Azúcar Blanca Refinada',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=80',
    category: 'Abarrotes',
    description: 'Azúcar de caña de disolución rápida, ideal para repostería y endulzar tus bebidas.',
    unit: 'Libra'
  },
  {
    id: 'p5',
    name: 'Refresco Cola Familiar',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    category: 'Bebidas',
    description: 'Bebida carbonatada sabor original para compartir en almuerzos y ocasiones familiares.',
    unit: 'Botella 2 Litros'
  },
  {
    id: 'p6',
    name: 'Detergente en Polvo Activo',
    price: 60.00,
    originalPrice: 68.00,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    category: 'Limpieza',
    description: 'Fórmula enzimática de alta eficacia para la remoción de las manchas más difíciles en tu ropa.',
    unit: 'Bolsa 1 kg'
  },
  {
    id: 'p7',
    name: 'Jugo de Naranja 100% Natural',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=600&q=80',
    category: 'Bebidas',
    description: 'Jugo pasteurizado de naranjas seleccionadas sin azúcares añadidas ni conservantes.',
    unit: 'Envase 1 Litro'
  },
  {
    id: 'p8',
    name: 'Manzanas Rojas Crujientes',
    price: 40.00,
    originalPrice: 48.00,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80',
    category: 'Frescos',
    description: 'Manzanas frescas importadas, dulces y crujientes, ricas en fibra y vitaminas.',
    unit: 'Bolsa 1kg'
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'o1',
    title: 'Combo Desayuno Tradicional',
    discount: '25% Ahorro',
    description: 'Llevate café molido premium de 400g + leche entera de 1L por un precio super reducido.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'o2',
    title: 'Miércoles de Frescos de Campo',
    discount: '15% Descuento',
    description: 'Todo el pasillo de frutas y verduras frescas cosechadas de campos locales con descuento directo.',
    badge: 'Solo Miércoles',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'o3',
    title: 'Fin de Semana de Limpieza',
    discount: 'Paga 2 Lleva 3',
    description: 'En detergentes seleccionados, desinfectantes y jabón lava platos los viernes, sábados y domingos.',
    badge: 'Fin de Semana',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
  }
];
