import axios from 'axios';
import Papa from 'papaparse';

import { Product } from './types';

const googleSheetLink =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-7rLnyQN3sYzTeG9P6ZplK-C9z-OjUXlSbok066jSp4azjDYQkJzV2yIbQY_aOcDaVu-YOHP9k6DA/pub?gid=755881603&single=true&output=csv';

const api = {
  getProducts: async (): Promise<Product[]> => {
    return axios
      .get(googleSheetLink, { responseType: 'blob' })
      .then((response) => {
        // Papaparse does not use Promises, so we create a new one to use it.
        return new Promise<Product[]>((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => {
              const products = results.data as Product[];
              return resolve(
                products.map((product) => ({
                  ...product,
                  price: Number(product.price),
                  quantity: 1, // Inicializamos la cantidad en 1
                }))
              );
            },
            error: (error) => reject(error.message),
          });
        });
      });
  },
  
  // Método para actualizar la cantidad de un producto
  updateProductQuantity: (product: Product, quantity: number): Product => {
    return {
      ...product,
      quantity: quantity,
    };
  },
  
  // Método para agrupar productos idénticos en el carrito
  groupCartItems: (cart: Product[]): Product[] => {
    const groupedItems = cart.reduce((acc, item) => {
      const existingItem = acc.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + (item.quantity || 1);
        return acc;
      }
      
      return [...acc, { ...item, quantity: item.quantity || 1 }];
    }, [] as Product[]);
    
    return groupedItems;
  }
};

export default api;
