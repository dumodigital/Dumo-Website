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
    id: 'savannah-bee',
    companyName: 'Savannah Bee Company',
    image: '/images/$50k.png',
    url: 'https://savannahbee.com'
  },
  {
    id: 'charlies-crunch',
    companyName: "Charlie's Crunch",
    image: '/placeholder.svg',
    url: 'https://charliescrunch.com'
  },
  {
    id: 'hungry-monkey',
    companyName: 'Hungry Monkey Baking',
    image: '/placeholder.svg',
    url: 'https://hungrymonkeybaking.com/products/trio-of-plain-banana-breads'
  },
  {
    id: 'savannah-wholesale',
    companyName: 'Savannah Bee Wholesale',
    image: '/placeholder.svg',
    url: 'https://wholesale.savannahbee.com'
  },
  {
    id: 'ohio-state',
    companyName: 'Ohio State University',
    image: '/placeholder.svg',
    url: '#'
  },
  {
    id: 'klaviyo-partner',
    companyName: 'Klaviyo Integration',
    image: '/placeholder.svg',
    url: '#'
  },
  {
    id: 'meta-campaigns',
    companyName: 'Meta Advertising',
    image: '/placeholder.svg',
    url: '#'
  },
  {
    id: 'shopify-development',
    companyName: 'Shopify Development',
    image: '/placeholder.svg',
    url: '#'
  }
];

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...caseStudies, ...caseStudies];

  // Infinite scroll animation with 3D effects
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8; // Slightly faster for 3D effect
    
    // Calculate card width based on viewport size
    const getCardWidth = () => {
      const width = window.innerWidth;
      if (width < 640) return 264; // 240px + 24px gap
      if (width < 768) return 304; // 280px + 24px gap
      if (width < 1024) return 344; // 320px + 24px gap
      return 424; // 400px + 24px gap
    };
    
    const cardWidth = getCardWidth();
    const totalWidth = caseStudies.length * cardWidth;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one full set
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
        
        // Apply 3D transforms to individual cards
        const cards = scrollContainer.children;
        const containerRect = scrollContainer.getBoundingClientRect();
        const viewportCenter = window.innerWidth / 2;
        
        Array.from(cards).forEach((card, index) => {
          const cardElement = card as HTMLElement;
          const cardRect = cardElement.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
          const maxDistance = window.innerWidth / 2 + cardRect.width;
          
          // Calculate 3D transforms based on distance from center
          const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
          const rotateY = (cardCenter < viewportCenter ? 1 : -1) * normalizedDistance * 25;
          const scale = 1 - normalizedDistance * 0.2;
          const opacity = 1 - normalizedDistance * 0.3;
          
          cardElement.style.transform = `rotateY(${rotateY}deg) scale(${scale})`;
          cardElement.style.opacity = opacity.toString();
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
              className="flex gap-6 w-fit"
              style={{transformStyle: 'preserve-3d'}}
            >
              {duplicatedCards.map((study, index) => (
                <div
                  key={`${study.id}-${Math.floor(index / caseStudies.length)}`}
                  className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[400px] flex-shrink-0"
                  style={{transformStyle: 'preserve-3d'}}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group">
                    {/* 2:3 aspect ratio container for 2000x3000 images */}
                    <div className="aspect-[2/3] w-full">
                      <img 
                        src={study.image} 
                        alt={study.companyName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Bottom overlay with button */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8 z-20">
                      <a 
                        href={study.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/30 inline-block z-30"
                        style={{fontFamily: 'Poppins, sans-serif', pointerEvents: 'auto'}}
                      >
                        View Results
                      </a>
                    </div>
                    
                    {/* Company name overlay on hover */}
                    <div className="absolute top-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold text-white bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                        {study.companyName}
                      </h3>
                    </div>
                    
                    {/* Accent Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#7BB9E8]/60 transition-all duration-300"></div>
                  </div>
                </div>
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
