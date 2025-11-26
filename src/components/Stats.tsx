const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50M+', label: 'Tasks Completed' },
  { value: '150+', label: 'Countries' },
];

const Stats = () => {
  return (
    <section className="px-6 max-w-7xl mx-auto py-20">
      <div className="rounded-3xl border border-border bg-card/30 backdrop-blur p-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 mesh-bg opacity-30" />
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-gradient">Trusted by teams worldwide</span>
            </h2>
            <p className="text-muted-foreground">
              Join thousands of companies building better products
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;