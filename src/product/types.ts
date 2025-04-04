export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  quantity?: number; // Cantidad opcional para el carrito
  rating?: number;   // Rating opcional para los productos
}

// Interfaz para productos en el carrito
export interface CartItem extends Product {
  quantity: number; // Cantidad es obligatoria en el carrito
}
