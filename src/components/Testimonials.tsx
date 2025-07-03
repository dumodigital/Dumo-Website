import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "“Thank you again for doing such a wonderful job on the B2B site. The ease of use is crazy good! I love how the product images will move on the page based on sales performance. Great job! Both you and Alex did such a good job of listening to our business needs and executing appropriately. And so quickly!!!”",
    author: "Kathy",
    title: "Head of Sales",
    company: "Savannah Bee Company",
    logo: "/images/SavannahBeeLogo.png"
  },
  {
    text: "“I can personally attest to Charlie and Alex's mission to make businesses look smart and sell smarter. This dynamic duo relaunched our shipping program for our 15-year-old baking business this weekend -- and the orders are pouring in. From a website refresh to Klaviyo email campaigns to Instagram design and copy, Dumo Digital doesn't miss an opportunity to be creative.”",
    author: "Cindy",
    title: "Founder",
    company: "Hungry Monkey Baking",
    logo: "/images/hungrymonkeybaking.png"
  },
  {
    text: "“You've got steeze in spades. Excellent creative license—your copywriting looks fantastic. Every word feels intentional and on-brand. It's clear you understand how to capture attention while keeping things true to the voice.”",
    author: "Ryan",
    title: "Founder",
    company: "Gotta B Crepes",
    logo: "/images/gbc.png"
  },
  {
    text: "“HUGE smiles. Beyond happy. Ecstatic. Over the Moon. Blown away. Impressed. Nice. The website development exceeded every expectation. It looks amazing and works even better—can't recommend them enough.”",
    author: "Hannah",
    title: "President",
    company: "Savannah Bee Company",
    logo: "/images/SavannahBeeLogo.png"
  },
  {
    text: "“Just wanted to send a quick note of thanks for all your help getting the Diamond Dots website over the finish line. You both did a fantastic job—responsive, thorough, and easy to work with every step of the way. We really appreciate everything you did. We are so happy to have found you. Looking forward to working together again down the line.”",
    author: "Rayne",
    title: "Co-founder",
    company: "Diamond Dots",
    logo: "/images/Dot.png"
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const total = testimonials.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      slideTo((index + 1) % total, 'right');
    }, 5000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [index, total]);

  function slideTo(newIndex: number, dir: 'left' | 'right') {
    setDirection(dir);
    setSliding(true);
    setTimeout(() => {
      setIndex(newIndex);
      setSliding(false);
    }, 400);
  }

  return (
    <section className="flex flex-col min-h-[35vh] w-full bg-gradient-to-b from-[#7BB9E8]/40 via-[#4A90E2]/60 to-[#181c22]">
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <div className="mx-auto max-w-3xl w-full px-6 md:px-12 flex flex-col items-center justify-center text-center h-full">
          <div
            className={`transition-all duration-400 ease-in-out w-full relative`}
            style={{
              transform: sliding
                ? `translateX(${direction === 'right' ? '100%' : '-100%'})`
                : 'translateX(0)',
              opacity: sliding ? 0 : 1,
            }}
          >
            <blockquote className="flex flex-col items-center justify-center text-white/90 text-base md:text-lg font-normal leading-snug italic mb-4 mx-auto text-center" style={{fontFamily: 'Inter, Satoshi, sans-serif', transition: 'opacity 0.6s', maxWidth: '100%'}}>
              <span className="block px-1 mx-auto">{testimonials[index].text}</span>
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="text-white font-semibold text-sm md:text-base mb-0.5 text-center" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{testimonials[index].author}</div>
              <div className="text-[#7BB9E8]/80 text-xs md:text-sm font-medium tracking-wide uppercase text-center" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                {testimonials[index].title}{testimonials[index].company ? `, ${testimonials[index].company}` : ''}
              </div>
              {testimonials[index].logo && (
                <img src={testimonials[index].logo} alt={testimonials[index].company + ' logo'} className="mt-4 h-16 md:h-24 w-auto mx-auto object-contain" style={{maxWidth: '200px'}} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
