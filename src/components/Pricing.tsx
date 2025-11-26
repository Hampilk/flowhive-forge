import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for trying out FlowHive',
    features: [
      'Up to 3 team members',
      '10 projects',
      'Basic analytics',
      'Community support',
      '5GB storage',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$29',
    period: '/month',
    description: 'For growing teams and businesses',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      '100GB storage',
      'Custom integrations',
      'API access',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: [
      'Everything in Professional',
      'Dedicated support',
      'Custom SLA',
      'Advanced security',
      'Unlimited storage',
      'On-premise option',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="px-6 max-w-7xl mx-auto py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-gradient">Simple, transparent pricing</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your team. Always know what you'll pay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl border p-8 card-hover ${
              plan.highlighted
                ? 'border-primary bg-card/80 backdrop-blur ring-2 ring-primary/20'
                : 'border-border bg-card/50 backdrop-blur'
            }`}
          >
            {plan.highlighted && (
              <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.period && (
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              {plan.description}
            </p>

            <Button
              className={`w-full mb-6 ${
                plan.highlighted
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 glow-primary'
                  : 'glass border-border hover:bg-surface'
              }`}
              variant={plan.highlighted ? 'default' : 'outline'}
            >
              {plan.cta}
            </Button>

            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;