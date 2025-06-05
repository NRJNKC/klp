
import { Clock, DollarSign, FileCheck, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileCheck,
      title: "Submit Application",
      description: "Quick 15-minute application with your fund documentation and capital call details.",
      time: "15 min"
    },
    {
      icon: Zap,
      title: "AI-Powered Analysis",
      description: "Our AI analyzes your fund performance, LP base, and risk profile for instant underwriting.",
      time: "24-48 hrs"
    },
    {
      icon: DollarSign,
      title: "Receive Funding",
      description: "Get approved for your facility and access funds immediately when capital calls are made.",
      time: "Same day"
    },
    {
      icon: Clock,
      title: "Automatic Repayment",
      description: "Funds automatically repaid when your LPs transfer their committed capital.",
      time: "30-90 days"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900">How PECC Lending Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process gets you from application to funding in record time, 
            giving you the flexibility to move quickly on investment opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl">
                  <step.icon size={32} className="text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium">
                    {step.time}
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-4">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
