
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                <CheckCircle size={16} className="mr-2" />
                Trusted by Leading Private Equity Funds
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Bridge Capital Calls with
                <span className="text-emerald-600 block">Smart PECC Lending</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Streamline your private equity operations with our AI-powered capital call lending facility. 
                Get instant access to bridge financing when your LPs need more time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4">
                Request Demo
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-emerald-500 mr-2" />
                No upfront fees
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-emerald-500 mr-2" />
                24-48hr approval
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-emerald-500 mr-2" />
                Up to $500M facilities
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Capital Call Overview</h3>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-gray-600">Total Facility</span>
                    <span className="font-semibold text-slate-900">$125,000,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
                    <span className="text-gray-600">Available Now</span>
                    <span className="font-semibold text-emerald-600">$89,500,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-semibold text-slate-900">L + 250bps</span>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Access Funds Now
                </Button>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
