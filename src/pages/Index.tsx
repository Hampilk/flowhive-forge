import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated mesh background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 mesh-bg" />
      </div>

      <Header />
      
      <main>
        <Hero />
        <Features />
        <Stats />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default Index;