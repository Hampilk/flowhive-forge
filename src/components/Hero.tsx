import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [tagline, setTagline] = useState('Collaborate');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const tags = ['Collaborate', 'Automate', 'Deliver'];
    let i = 0;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTagline(tags[(++i) % tags.length]);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center py-20 px-4 max-w-5xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-full glass border border-border text-muted-foreground mb-8 animate-fade-in-up">
        <Zap className="h-4 w-4 text-primary" />
        <span>New: AI-powered building tools</span>
      </div>

      {/* Hero Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
        <span className="text-gradient">Stay Organized,</span>
        <br />
        <span className="relative inline-block">
          <span 
            className={`text-primary transition-opacity duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {tagline}
          </span>
        </span>
        <span className="text-gradient">,</span>
        <br />
        <span className="text-gradient">Deliver Excellence</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
        A unified platform for seamless project management, team collaboration, 
        and goal achievement. No code required—unless you want it.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold text-base px-8"
        >
          Try for free
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="glass border-border hover:bg-surface text-base px-8"
        >
          Watch demo
        </Button>
      </div>

      {/* Trusted by badge */}
      <div className="mt-16 text-sm text-muted-foreground animate-fade-in-up">
        Trusted by 10,000+ teams worldwide
      </div>
    </section>
  );
};

export default Hero;