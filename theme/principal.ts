import { useState, useEffect, useRef, RefObject, useCallback } from 'react';

export interface Principal {
  // Define interface properties here
  responsive?: boolean;
  breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

/**
 * Custom hook for implementing responsive infinite scroll functionality
 * @param items The complete array of items to be loaded incrementally
 * @param initialBatchSize The number of items to load initially
 * @param incrementSize The number of additional items to load on each scroll
 * @param threshold The distance from the bottom (in pixels) to trigger loading more items
 * @param responsive Enable responsive behavior based on screen size
 */
export function useInfiniteScroll<T>(
  items: T[],
  initialBatchSize: number = 10,
  incrementSize: number = 5,
  threshold: number = 300,
  responsive: boolean = true
): {
  visibleItems: T[];
  containerRef: RefObject<HTMLDivElement>;
  loadMore: () => void;
  hasMore: boolean;
} {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMore, setHasMore] = useState(true);
  // Remove isLoading state from here as it's causing the React error
  const [dynamicIncrement, setDynamicIncrement] = useState(incrementSize);
  const [dynamicThreshold, setDynamicThreshold] = useState(threshold);

  // Adjust parameters based on screen size
  useEffect(() => {
    if (!responsive) return;

    const handleResize = () => {
      const width = window.innerWidth;
      
      // Adjust increment size based on screen width
      if (width < 640) { // Small mobile
        setDynamicIncrement(3);
        setDynamicThreshold(150);
      } else if (width < 768) { // Mobile
        setDynamicIncrement(4);
        setDynamicThreshold(200);
      } else if (width < 1024) { // Tablet
        setDynamicIncrement(6);
        setDynamicThreshold(250);
      } else if (width < 1280) { // Small desktop
        setDynamicIncrement(8);
        setDynamicThreshold(300);
      } else { // Large desktop
        setDynamicIncrement(10);
        setDynamicThreshold(350);
      }
    };

    // Set initial values
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [responsive, incrementSize, threshold]);

  // Initialize with initial batch
  useEffect(() => {
    if (items.length > 0) {
      const initialItems = items.slice(0, Math.min(initialBatchSize, items.length));
      setVisibleItems(initialItems);
      setCurrentIndex(initialItems.length);
      setHasMore(initialItems.length < items.length);
    } else {
      // Reset when items array changes to empty
      setVisibleItems([]);
      setCurrentIndex(0);
      setHasMore(false);
    }
  }, [items, initialBatchSize]);

  // Function to load more items with debounce
  const loadMore = useCallback(() => {
    if (currentIndex >= items.length) {
      setHasMore(false);
      return;
    }

    // Use setTimeout to prevent UI blocking during loading
    const nextIndex = Math.min(currentIndex + dynamicIncrement, items.length);
    const nextBatch = items.slice(currentIndex, nextIndex);
    
    setVisibleItems(prev => [...prev, ...nextBatch]);
    setCurrentIndex(nextIndex);
    setHasMore(nextIndex < items.length);
  }, [currentIndex, items, dynamicIncrement]);

  // Set up scroll event listener with improved performance
  useEffect(() => {
    // Use requestAnimationFrame for better scroll performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current || !hasMore) return;

          const container = containerRef.current;
          const { bottom } = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (bottom - windowHeight < dynamicThreshold) {
            loadMore();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also trigger on resize to handle orientation changes
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [hasMore, loadMore, dynamicThreshold]);

  return { visibleItems, containerRef, loadMore, hasMore };
}
