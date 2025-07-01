import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      name: "Charlie's Crunch",
      type: "E-commerce store",
      gradient: "from-yellow-400 to-orange-500",
      url: "https://charliescrunch.com/",
    },
    {
      name: "Savannah Bee Company",
      type: "Premium honey, beauty, and lifestyle brand",
      gradient: "from-yellow-300 to-amber-500",
      url: "https://savannahbee.com/",
    },
    {
      name: "Savannah Bee Wholesale",
      type: "B2B E-commerce store",
      gradient: "from-amber-400 to-yellow-500",
      url: "https://wholesale.savannahbee.com/?country=US",
    },
    {
      name: "Riot Project",
      type: "Exclusive Drop-Based Store",
      gradient: "from-red-500 to-pink-500",
      url: "https://theriotprjct.com/",
    },
    {
      name: "Gotta B Crepes",
      type: "Farmers market food business with local delivery",
      gradient: "from-green-400 to-blue-500",
      url: "https://www.gottabcrepes.com/",
    },
    {
      name: "Mamasita's Kitchen",
      type: "Commercial kitchen rental platform",
      gradient: "from-purple-500 to-indigo-500",
      url: "https://mamasitaskitchen.com/",
    },
    {
      name: "Diamond Dots",
      type: "Premium luxury jewelry brand",
      gradient: "from-blue-400 to-purple-500",
      url: "https://www.diamonddots.com/?srsltid=AfmBOopbPXaptZsW7NNRvYWLUtdqJEP7YRg3ErTb0G2HMgOBD1TZ7dYH",
    },
    {
      name: "Hungry Monkey Baking",
      type: "E-commerce website with custom Shopify theme",
      gradient: "from-pink-400 to-red-500",
      url: "https://hungrymonkeybaking.com/",
    },
    {
      name: "The Handless Handle",
      type: "Innovative kitchen cabinet solution",
      gradient: "from-indigo-500 to-blue-500",
      url: "https://handlesshandle.com/?srsltid=AfmBOoop1ZnoDIht5y66CoTC7wb5wW9oOdgAM5ab8hotjO60W5Fwu2Oz",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
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
              <div
                className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Removed the Website Preview text */}
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
                  asChild
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
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
              asChild
            >
              <a
                href="https://calendly.com/charlie-dumo/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
