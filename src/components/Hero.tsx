
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] 
        bg-cover bg-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black/40" 
        />
      </div>
      
      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl"
        >
          Discover Your Dream Home in San Francisco
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/90 mt-6 text-lg md:text-xl max-w-2xl"
        >
          Experienced real estate professional helping you find the perfect property 
          that matches your lifestyle and investment goals.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
