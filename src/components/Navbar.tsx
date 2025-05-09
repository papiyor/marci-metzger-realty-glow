
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold">
          <span className="text-[hsl(var(--primary))]">MARCI</span>
          <span className="text-[hsl(var(--gold))]">METZGER</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Properties", "About", "Testimonials", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-[hsl(var(--gold))] animate-underline"
            >
              {item}
            </a>
          ))}
          <Button className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90">
            Schedule Showing
          </Button>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 py-4 px-4 absolute w-full shadow-md animate-fade-in">
          {["Home", "Properties", "About", "Testimonials", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-sm font-medium hover:text-[hsl(var(--gold))]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button 
            className="w-full mt-4 bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90"
          >
            Schedule Showing
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
