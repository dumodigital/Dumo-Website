import { Button } from "@/components/ui/button";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Dumo Digital seriously leveled us up. Charlie and Alex jumped in, cleaned up our Shopify mess, redesigned the site, fixed stuff we didn't even know was broken, and made the whole thing actually convert. They move fast, they're easy to work with, and they just get how to make brands look good online. We're already planning the next project with them.",
      author: "Morgan",
      title: "DTC Founder",
    },
    {
      text: "You've got steeze in spades. Excellent creative license—your copywriting looks fantastic. Every word feels intentional and on-brand. It's clear you understand how to capture attention while keeping things true to the voice.",
      author: "Ryan",
      role: "Satisfied Client",
      rating: 5,
    },
    {
      text: "Thank you again for doing such a wonderful job on the B2B site. The ease of use is crazy good! I love how the product images will move on the page based on sales performance. Great job! Both you and Alex did such a good job of listening to our business needs and executing appropriately. And so quickly!!!",
      author: "Kathy",
      role: "B2B Client",
      rating: 5,
    },
    {
      text: "HUGE smiles. Beyond happy. Ecstatic. Over the Moon. Blown away. Impressed. Nice. The website development exceeded every expectation. It looks amazing and works even better—can't recommend them enough.",
      author: "Hannah",
      role: "Website Client",
      rating: 5,
    },
    {
      text: "I can personally attest to Charlie and Alex's mission to make businesses look smart and sell smarter. This dynamic duo relaunched our shipping program for our 15-year-old baking business this weekend -- and the orders are pouring in. From a website refresh to Klaviyo email campaigns to Instagram design and copy, Dumo Digital doesn't miss an opportunity to be creative.",
      author: "HungryMonkeyBaking",
      role: "E-commerce Client",
      rating: 5,
    },
    {
      text: "Just wanted to send a quick note of thanks for all your help getting the Diamond Dots website over the finish line. You both did a fantastic job—responsive, thorough, and easy to work with every step of the way. We really appreciate everything you did. We are so happy to have found you. Looking forward to working together again down the line.",
      author: "Rayne",
      role: "Diamond Dots",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-blue-600 font-medium">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join our satisfied clients?
            </h3>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a
                href="https://calendly.com/charlie-dumo/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Your Success Story
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
