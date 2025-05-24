
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Shopify Support",
      description: "Expert e-commerce website development and optimization on Shopify, delivering clean design, intuitive user experience, and backend simplicity.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Website Creative Design",
      description: "Creating professional and effective online presence with user-friendly and easily manageable solutions tailored to your business needs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Digital Marketing",
      description: "Tailored online marketing plans and high-converting campaign execution to improve client visibility, sales, and brand consistency.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Klaviyo Email & SMS Marketing",
      description: "Strategic email and SMS campaign development using Klaviyo's automation platform, delivering personalized customer communications, effective list segmentation, and revenue-generating flows.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategy and content creation to build brand awareness, engage with your audience, and drive traffic to your online platforms.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Digital Genius Bar",
      description: "On-demand digital expertise and personalized training sessions for business owners, providing hands-on education and problem-solving support.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Book Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
