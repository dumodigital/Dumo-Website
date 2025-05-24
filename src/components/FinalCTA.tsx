
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Do More with your business?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our block-of-time pricing model makes expert digital support more accessible to early-stage businesses, 
            without committing to full-time contracts or expensive retainers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Set Up A Call
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
            >
              Learn About Pricing
            </Button>
          </div>
          
          {/* Additional benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-2">Flexible</div>
              <div className="text-blue-100">No long-term contracts</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-2">Expert</div>
              <div className="text-blue-100">Proven track record</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-2">Results</div>
              <div className="text-blue-100">Growth-focused approach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
