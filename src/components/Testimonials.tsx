import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "“Thank you again for doing such a wonderful job on the B2B site. The ease of use is crazy good! I love how the product images will move on the page based on sales performance. Great job! Both you and Alex did such a good job of listening to our business needs and executing appropriately. And so quickly!!!”",
    author: "Kathy",
    title: "Head of Sales",
    company: "Savannah Bee Company",
    logo: "/images/bee.png"
  },
  {
    text: "“I can personally attest to Charlie and Alex's mission to make businesses look smart and sell smarter. This dynamic duo relaunched our shipping program for our 15-year-old baking business this weekend -- and the orders are pouring in. From a website refresh to Klaviyo email campaigns to Instagram design and copy, Dumo Digital doesn't miss an opportunity to be creative.”",
    author: "Cindy",
    title: "Founder",
    company: "Hungry Monkey Baking",
    logo: "/images/HMB.png"
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
    logo: "/images/bee.png"
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
    <section className="min-h-[38vh] w-full flex items-center justify-center bg-gradient-to-b from-[#181c22] via-[#23344a] to-[#7BB9E8]/30 py-12 relative overflow-hidden" style={{ minHeight: '38vh' }}>
      {/* Noise Texture Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.07\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          opacity: 0.7,
        }}
      />
      <div className="w-full max-w-3xl mx-auto px-2 md:px-0 flex flex-col items-center justify-center relative z-10" style={{ minHeight: '24vh' }}>
        {/* Section Header */}
        <div className="mb-6 text-center mt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white" style={{fontFamily: 'Inter, Satoshi, sans-serif', lineHeight: 1.08}}>
            Real Results, Real Stories
          </h2>
          <div className="mx-auto w-20 h-1 bg-[#7BB9E8] rounded-full mt-3" />
        </div>
        <div className="w-full max-w-3xl flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center bg-[#eaf3fa]/90 border border-[#7BB9E8] rounded-xl shadow-lg w-full max-w-3xl p-4 md:p-6 gap-6" style={{ boxShadow: '0 6px 32px 0 rgba(123,185,232,0.10)', transform: 'translateY(8%)' }}>
            {/* Logo */}
            {testimonials[index].logo && (
              <img
                src={testimonials[index].logo}
                alt={testimonials[index].company + ' logo'}
                className="h-20 w-20 md:h-24 md:w-24 object-contain mb-2"
                style={{ maxWidth: '96px' }}
              />
            )}
            {/* Quote and Author */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <blockquote
                className="relative text-[#222] text-lg md:text-xl font-serif font-medium leading-relaxed mb-2 pl-3 border-l-4 border-[#7BB9E8]"
                style={{ fontFamily: 'Inter, Satoshi, serif' }}
              >
                {testimonials[index].text}
              </blockquote>
              <div className="mt-1">
                <div className="text-[#181c22] font-semibold text-sm md:text-base mb-0.5" style={{ fontFamily: 'Inter, Satoshi, sans-serif' }}>
                  {testimonials[index].author}
                </div>
                <div className="text-[#7BB9E8] text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, Satoshi, sans-serif' }}>
                  {testimonials[index].title}{testimonials[index].company ? `, ${testimonials[index].company}` : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://calendly.com/charlie-dumo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-[#7BB9E8] text-white text-lg font-bold shadow-md hover:bg-[#5fa6db] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7BB9E8] focus:ring-offset-2"
            style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
          >
            Get in touch today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;