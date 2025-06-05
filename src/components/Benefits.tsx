
import { Shield, TrendingUp, Clock, Users, Banknote, Lock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Deploy capital in 24-48 hours instead of waiting weeks for LP transfers."
    },
    {
      icon: TrendingUp,
      title: "Maximize Returns",
      description: "Seize time-sensitive investment opportunities without delay."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Reduce counterparty risk with our institutional-grade security framework."
    },
    {
      icon: Users,
      title: "LP Relationship Management",
      description: "Maintain strong LP relationships by providing payment flexibility."
    },
    {
      icon: Banknote,
      title: "Competitive Rates",
      description: "Access capital at institutional rates typically reserved for the largest funds."
    },
    {
      icon: Lock,
      title: "Secure & Compliant",
      description: "Bank-grade security with full regulatory compliance and audit trails."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Why Choose KapCall.ai</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for private equity funds, our PECC lending facility offers 
            unmatched speed, flexibility, and institutional-grade service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl">
                  <benefit.icon size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
