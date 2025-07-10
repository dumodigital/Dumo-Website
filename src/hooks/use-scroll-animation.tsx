import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options?: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0
  } = options || {};

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            setHasAnimated(true);
          }
        } else if (!triggerOnce && !hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { elementRef, isVisible, hasAnimated };
};

// Animation variants for different types of reveals
export const scrollAnimationVariants = {
  fadeUp: {
    initial: { opacity: 0, transform: 'translateY(60px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },
  fadeDown: {
    initial: { opacity: 0, transform: 'translateY(-60px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },
  fadeLeft: {
    initial: { opacity: 0, transform: 'translateX(-60px)' },
    animate: { opacity: 1, transform: 'translateX(0px)' },
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },
  fadeRight: {
    initial: { opacity: 0, transform: 'translateX(60px)' },
    animate: { opacity: 1, transform: 'translateX(0px)' },
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },
  scale: {
    initial: { opacity: 0, transform: 'scale(0.9)' },
    animate: { opacity: 1, transform: 'scale(1)' },
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },
  slideUp: {
    initial: { opacity: 0, transform: 'translateY(100px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
};

// Reusable ScrollReveal component
export const ScrollReveal = ({ 
  children, 
  variant = 'fadeUp', 
  delay = 0, 
  className = '',
  ...options 
}: { 
  children: React.ReactNode;
  variant?: keyof typeof scrollAnimationVariants;
  delay?: number;
  className?: string;
} & Parameters<typeof useScrollAnimation>[0]) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay, ...options });
  const animationVariant = scrollAnimationVariants[variant];

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={{
        ...animationVariant.initial,
        ...(isVisible ? animationVariant.animate : {}),
        transition: animationVariant.transition,
      }}
    >
      {children}
    </div>
  );
}; 