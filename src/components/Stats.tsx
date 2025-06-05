
const Stats = () => {
  const stats = [
    {
      value: "$2.5B+",
      label: "Capital Deployed",
      description: "Across 150+ private equity funds"
    },
    {
      value: "24-48hrs",
      label: "Average Approval Time",
      description: "From application to funding"
    },
    {
      value: "99.8%",
      label: "Uptime Guarantee",
      description: "Enterprise-grade reliability"
    },
    {
      value: "500+",
      label: "Successful Transactions",
      description: "Zero payment defaults to date"
    }
  ];

  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-emerald-100 text-xl max-w-2xl mx-auto">
            Our track record speaks for itself. See why the world's leading private equity funds trust KapCall.ai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</div>
              <div className="text-lg font-semibold text-emerald-100">{stat.label}</div>
              <div className="text-emerald-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
