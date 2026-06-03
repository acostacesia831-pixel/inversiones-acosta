export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'Abarrotes' | 'Bebidas' | 'Limpieza' | 'Frescos';
  description: string;
  unit: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  description: string;
  badge: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}
