
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Marci Metzger" 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[hsl(var(--gold))] p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-white font-medium">
                <span className="block text-2xl font-bold">15+</span>
                Years of Experience
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Meet Marci Metzger</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                With over 15 years of experience in the San Francisco real estate market, 
                I've helped hundreds of clients find their perfect homes and make smart investment decisions.
              </p>
              <p>
                My approach combines deep market knowledge, personalized service, and 
                a genuine passion for connecting people with properties that enhance their lives.
              </p>
              <p>
                As a long-time San Francisco resident, I have intimate knowledge of the city's diverse 
                neighborhoods, schools, amenities, and community dynamics that can't be found through 
                online research alone.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-8">
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
            </div>
            
            <Button className="mt-8 bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
