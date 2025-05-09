
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
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" 
        />
      </div>
      
      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Text content - now takes half width on larger screens */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-3 bg-[hsl(var(--gold))]/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <p className="text-[hsl(var(--gold))] font-medium text-sm">San Francisco's Premier Real Estate Agent</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight"
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
            <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-white font-medium shadow-lg shadow-[hsl(var(--gold))]/20">
              Browse Properties
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-medium"
            >
              Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Marci's image - takes up half width on larger screens */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-2/5"
        >
          <div className="relative h-[400px] md:h-[500px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--gold))]/20 to-transparent z-10" />
              {/* Placeholder for Marci's image - replace with actual image when available */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Marci Metzger - San Francisco Real Estate Agent" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-4 rounded-xl z-10"
            >
              <h3 className="text-white font-semibold text-xl">Marci Metzger</h3>
              <p className="text-[hsl(var(--gold))]">15+ Years Experience • Top 1% Agent</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
