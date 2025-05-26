import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleViewOurWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("our-work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-16">
            <img
              src="/images/dumo-digital-light-bluelogo.png"
              alt="Dumo Digital"
              className="h-32 sm:h-48 lg:h-64 mx-auto"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Do More With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 animate-pulse">
              Dumo!
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your personal digital Genius Bar. Digital strategies that help
            businesses establish, optimize, and grow their online sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
              asChild
            >
              <a
                href="https://calendly.com/charlie-dumo/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Free Consultation
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-full backdrop-blur-sm font-semibold"
              asChild
            >
              <a href="#our-work" onClick={handleViewOurWorkClick}>
                View Our Work
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center animate-bounce">
            <ArrowDown className="text-white/70 w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
