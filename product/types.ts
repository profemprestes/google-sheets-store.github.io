export interface Product {
  id: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  price: number;
  quantity?: number;
  rating?: number;
  badge?: string;
}

// Interfaz para productos en el carrito
export interface CartItem extends Product {
  quantity: number; // Cantidad es obligatoria en el carrito
}
