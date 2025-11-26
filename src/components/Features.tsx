import { Command, TrendingUp, FileCode, MessageSquare, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Command,
    title: 'Natural language to code',
    description: 'Describe features in plain English and watch them come to life instantly.',
  },
  {
    icon: TrendingUp,
    title: 'Growth metrics',
    description: 'Visualize performance with interactive dashboards and real-time analytics.',
  },
  {
    icon: FileCode,
    title: 'Production-ready exports',
    description: 'Download complete codebases and documentation with one click.',
  },
  {
    icon: MessageSquare,
    title: 'Centralized feedback',
    description: 'Collect, prioritize, and act on user feedback automatically.',
  },
  {
    icon: Zap,
    title: 'Lightning fast performance',
    description: 'Optimized for speed with sub-second response times and instant updates.',
  },
  {
    icon: Users,
    title: 'Team collaboration',
    description: 'Work together seamlessly with real-time sync and smart notifications.',
  },
];

const Features = () => {
  return (
    <section className="px-6 max-w-7xl mx-auto py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-gradient">Everything you need to succeed</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Powerful features designed to streamline your workflow and boost productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border bg-card/50 backdrop-blur p-6 card-hover"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary flex-shrink-0">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;