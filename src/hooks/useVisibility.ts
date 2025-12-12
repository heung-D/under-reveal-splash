import { useEffect, useState, useRef, RefObject } from "react";

interface UseVisibilityOptions {
  threshold?: number;
  resetOnExit?: boolean;
}

/**
 * Hook for detecting when an element is visible in the viewport
 * Replaces duplicated IntersectionObserver patterns across components
 */
export function useVisibility<T extends HTMLElement = HTMLDivElement>(
  options: UseVisibilityOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.3, resetOnExit = false } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (resetOnExit) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, resetOnExit]);

  return [ref, isVisible];
}
