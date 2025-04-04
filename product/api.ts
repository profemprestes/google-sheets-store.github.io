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
                }))
              );
            },
            error: (error) => reject(error.message),
          });
        });
      });
  },
};
export default api;
