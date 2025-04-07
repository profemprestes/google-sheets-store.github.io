// Available product categories
export enum ProductCategory {
  HOGAR = 'Hogar',
  TECNOLOGIA = 'Tecnologia',
  Otros = 'Otros',
  CUIDADO_PERSONAL = 'Cuidado Personal',
  HERRAMIENTAS = 'Herramientas',
}

// Default category
export const DEFAULT_CATEGORY = ProductCategory.Otros;

// Get all categories as an array
export const getAllCategories = (): string[] => {
  return Object.values(ProductCategory);
};
