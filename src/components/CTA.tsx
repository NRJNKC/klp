
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your Capital Calls?
            </h2>
            <p className="text-xl text-gray-300">
              Join hundreds of private equity funds that have streamlined their capital deployment with KapCall.ai. 
              Get started with a personalized demo today.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Phone size={20} className="mr-3 text-emerald-400" />
                <span>Speak with our specialists: (555) 123-PECC</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={20} className="mr-3 text-emerald-400" />
                <span>hello@kapcall.ai</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Demo</h3>
                <p className="text-gray-600">Get a personalized walkthrough of our platform</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-gray-300" />
                  <Input placeholder="Last Name" className="border-gray-300" />
                </div>
                <Input placeholder="Work Email" type="email" className="border-gray-300" />
                <Input placeholder="Fund Name" className="border-gray-300" />
                <Input placeholder="AUM (Optional)" className="border-gray-300" />
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 text-lg">
                Schedule Demo
                <ArrowRight size={20} className="ml-2" />
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our Privacy Policy and Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
