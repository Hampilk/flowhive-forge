import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border glass">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          FlowHive
        </h1>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
            Pricing
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            About
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
          Sign in
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get started
        </Button>
      </div>
    </header>
  );
};

export default Header;