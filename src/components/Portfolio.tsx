
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    { name: "Charlie's Crunch", type: "E-commerce store", gradient: "from-yellow-400 to-orange-500" },
    { name: "Gotta B Crepes", type: "Farmers market food business with local delivery", gradient: "from-green-400 to-blue-500" },
    { name: "Savannah Bee Wholesale", type: "B2B E-commerce store", gradient: "from-amber-400 to-yellow-500" },
    { name: "Riot Project", type: "Exclusive Drop-Based Store", gradient: "from-red-500 to-pink-500" },
    { name: "Mamasita's Kitchen", type: "Commercial kitchen rental platform", gradient: "from-purple-500 to-indigo-500" },
    { name: "Diamond Dots", type: "Premium luxury jewelry brand", gradient: "from-blue-400 to-purple-500" },
    { name: "Hungry Monkey Baking", type: "E-commerce website with custom Shopify theme", gradient: "from-pink-400 to-red-500" },
    { name: "Good Stuff Sauce", type: "Brand-focused e-commerce store", gradient: "from-green-500 to-teal-500" },
    { name: "The Handless Handle", type: "Innovative kitchen cabinet solution", gradient: "from-indigo-500 to-blue-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful projects and happy clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Screenshot Placeholder */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-white font-semibold">Website Preview</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.type}</p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Visit Site
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see your business featured here?
            </h3>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
