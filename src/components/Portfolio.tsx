import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

interface CaseStudy {
  id: string;
  companyName: string;
  image: string;
  url: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'savannah-wholesale',
    companyName: 'Savannah Bee Wholesale',
    image: '/images/4.png',
    url: 'https://wholesale.savannahbee.com'
  },
  {
    id: 'riot-project',
    companyName: 'The Riot Project',
    image: '/images/5.png',
    url: 'https://theriotprjct.com/'
  },
  {
    id: 'charlies-crunch',
    companyName: "Charlie's Crunch",
    image: '/images/3.png',
    url: 'https://charliescrunch.com'
  },
  {
    id: 'savannah-bee',
    companyName: 'Savannah Bee Company',
    image: '/images/$50k.png',
    url: 'https://savannahbee.com'
  },
  {
    id: 'hungry-monkey',
    companyName: 'Hungry Monkey Baking',
    image: '/images/hun.png',
    url: 'https://hungrymonkeybaking.com/products/trio-of-plain-banana-breads'
  }
];

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Create enough duplicates for seamless infinite scroll
  const duplicatedCards = [...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies];

  // Clean infinite scroll animation with 3D effects
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.6;
    let animationId: number;
    
    // Calculate card width based on viewport size
    const getCardWidth = () => {
      const width = window.innerWidth;
      if (width < 640) return 252; // 240px + 12px gap
      if (width < 768) return 292; // 280px + 12px gap
      if (width < 1024) return 332; // 320px + 12px gap
      return 412; // 400px + 12px gap
    };
    
    const cardWidth = getCardWidth();
    const oneSetWidth = caseStudies.length * cardWidth;
    const totalWidth = duplicatedCards.length * cardWidth;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled past the second set (while third set is visible)
      // This ensures the reset happens off-screen
      if (scrollPosition >= oneSetWidth * 2) {
        scrollPosition = oneSetWidth;
      }
      
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
        
        // Apply 3D transforms to individual cards
        const cards = scrollContainer.children;
        const viewportCenter = window.innerWidth / 2;
        
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          const cardContent = cardElement.querySelector('.card-content') as HTMLElement;
          if (!cardContent) return;
          
          const cardRect = cardElement.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
          const maxDistance = window.innerWidth / 2 + cardRect.width;
          
          // Calculate 3D transforms based on distance from center
          const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
          const rotateY = (cardCenter < viewportCenter ? 1 : -1) * normalizedDistance * 20;
          const rotateX = normalizedDistance * 3;
          const scale = 1 - normalizedDistance * 0.15;
          const opacity = 1 - normalizedDistance * 0.25;
          const translateZ = -normalizedDistance * 50;
          
          // Apply transforms to the inner content, keep anchor clickable
          cardContent.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale}) translateZ(${translateZ}px)`;
          cardContent.style.opacity = opacity.toString();
          
          // Ensure anchor remains fully clickable
          cardElement.style.pointerEvents = 'auto';
          cardElement.style.transform = 'none';
        });
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#10151a] to-[#181c22] scroll-mt-12 md:scroll-mt-20 overflow-hidden relative"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 mt-16">
          <span className="block uppercase tracking-[0.25em] text-xs text-neutral-400 font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Ready to Scale? <span className="text-[#7BB9E8]">We've Done It Before</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-[#7BB9E8] mb-6 mt-2 mx-auto" />
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve breakthrough growth. Your success story could be next.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative mb-16">
          <div className="overflow-hidden" style={{perspective: '1000px'}}>
            <div 
              ref={scrollRef}
              className="flex gap-3 w-fit"
              style={{transformStyle: 'preserve-3d'}}
            >
              {duplicatedCards.map((study, index) => (
                <a 
                  href={study.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={`${study.id}-${index}`}
                  className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[400px] flex-shrink-0 block"
                  style={{transformStyle: 'preserve-3d', pointerEvents: 'auto', position: 'relative', zIndex: 1}}
                >
                  <div className="card-content relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer">
                    {/* 2:3 aspect ratio container for 2000x3000 images */}
                    <div className="aspect-[2/3] w-full">
                      <img 
                        src={study.image} 
                        alt={study.companyName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Bottom overlay with button */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8 z-20">
                      <div className="bg-white text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-lg border border-white/30 inline-flex items-center gap-2 z-30"
                        style={{fontFamily: 'Poppins, sans-serif'}}
                      >
                        See Case Study
                        <svg 
                          width="12" 
                          height="12" 
                          viewBox="0 0 12 12" 
                          fill="none" 
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        >
                          <path 
                            d="M3.5 3.5H8.5V8.5M8.5 3.5L3.5 8.5" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                </div>
              </div>

                    {/* Accent Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              Ready to be our <span className="text-[#7BB9E8]">next success story?</span>
            </h3>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join the businesses that chose growth over stagnation.
            </p>
            <Button
              size="lg"
              className="bg-[#7BB9E8] hover:bg-[#5fa6d6] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-[#7BB9E8]/30"
              asChild
            >
              <a
                href="https://calendly.com/charlie-dumo/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Strategy Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
