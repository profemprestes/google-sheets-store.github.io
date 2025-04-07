import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  useToast,
  Image,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState, useCallback, useEffect } from 'react';
import { Product as ApiProduct } from '../product/types';
import { getAllCategories, DEFAULT_CATEGORY } from '../product/categoriastypes';

// Extending ApiProduct to include category
interface Product extends ApiProduct {
  category: string;
}

interface BusquedaProductosProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onFilter?: (filteredProducts: Product[]) => void;
}

const BusquedaProductos: React.FC<BusquedaProductosProps> = ({
  products,
  onAddToCart,
  onFilter,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const toast = useToast();
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const grayColor = useColorModeValue('gray.600', 'gray.400');

  // Get categories from categoriastypes.ts instead of extracting from products
  const categories = getAllCategories();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !selectedCategory || (product.category || DEFAULT_CATEGORY) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Notify parent component about filtered products
  useEffect(() => {
    if (onFilter) {
      onFilter(filteredProducts);
    }
  }, [filteredProducts, onFilter]);

  const handleAddToCart = useCallback(
    (product: Product) => {
      onAddToCart(product);
      toast({
        title: 'Producto agregado',
        description: `Se ha agregado ${product.title} al carrito`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
    [onAddToCart, toast]
  );

  return (
    <Box
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="container.xl"
      mx="auto"
      mb={8}
    >
      <VStack spacing={6} align="stretch">
        {/* Encabezado */}
        <Text fontSize="2xl" fontWeight="bold" color={textColor} mb={4}>
          Buscar Productos
        </Text>

        {/* Filtros */}
        <HStack spacing={4}>
          <Box position="relative" w="100%">
            <Input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="lg"
              pr={10}
            />
            <SearchIcon
              position="absolute"
              right={4}
              top="50%"
              transform="translateY(-50%)"
              color={grayColor}
            />
          </Box>
          <Box w="200px">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: borderColor,
                outline: 'none',
              }}
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </Box>
        </HStack>

        {/* Resultados - Only show if there's a search or category filter active */}
        {(searchTerm || selectedCategory) && (
          <VStack spacing={4} align="stretch">
            {filteredProducts.length === 0 ? (
              <Text color={grayColor}>
                No se encontraron productos que coincidan con tu búsqueda
              </Text>
            ) : (
              filteredProducts.map((product) => (
                <Box
                  key={product.id}
                  p={4}
                  borderRadius="md"
                  border="1px"
                  borderColor={borderColor}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                >
                  <HStack spacing={4}>
                    <Box w="80px" h="80px" borderRadius="md" overflow="hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                      />
                    </Box>
                    <VStack align="start" spacing={2} flex={1}>
                      <Text fontSize="lg" fontWeight="bold" color={textColor} noOfLines={1}>
                        {product.title}
                      </Text>
                      <Text color={grayColor} noOfLines={2} fontSize="sm">
                        {product.description || 'Sin descripción disponible'}
                      </Text>
                      <Text color="green.500" fontSize="xl" fontWeight="bold">
                        ${product.price.toLocaleString()}
                      </Text>
                    </VStack>
                    <Button
                      colorScheme="primary"
                      size="sm"
                      onClick={() =>
                        handleAddToCart({
                          ...product,
                          category: product.category || DEFAULT_CATEGORY,
                        })
                      }
                    >
                      Agregar al Carrito
                    </Button>
                  </HStack>
                </Box>
              ))
            )}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default BusquedaProductos;
