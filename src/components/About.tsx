
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg overflow-hidden">
              <motion.img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Marci Metzger" 
                className="w-full h-[500px] object-cover object-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-[hsl(var(--gold))] p-6 rounded-lg shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-white font-medium">
                <span className="block text-2xl font-bold">15+</span>
                Years of Experience
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Meet Marci Metzger</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                With over 15 years of experience in the San Francisco real estate market, 
                I've helped hundreds of clients find their perfect homes and make smart investment decisions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                My approach combines deep market knowledge, personalized service, and 
                a genuine passion for connecting people with properties that enhance their lives.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                As a long-time San Francisco resident, I have intimate knowledge of the city's diverse 
                neighborhoods, schools, amenities, and community dynamics that can't be found through 
                online research alone.
              </motion.p>
            </div>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div>
                <p className="text-3xl font-bold text-[hsl(var(--gold))]">350+</p>
                <p className="text-sm">Properties Sold</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[hsl(var(--gold))]">98%</p>
                <p className="text-sm">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[hsl(var(--gold))]">$500M+</p>
                <p className="text-sm">Sales Volume</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button className="mt-8 bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
