
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] 
        bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl animate-fade-in">
          Discover Your Dream Home in San Francisco
        </h1>
        <p className="text-white/90 mt-6 text-lg md:text-xl max-w-2xl animate-fade-in-slow">
          Experienced real estate professional helping you find the perfect property 
          that matches your lifestyle and investment goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-slower">
          <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-white">
            Browse Properties
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-white text-white hover:bg-white/20"
          >
            Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
