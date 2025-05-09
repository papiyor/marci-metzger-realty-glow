
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer Adams',
    role: 'Homebuyer',
    testimonial: 'Marci helped us find our dream home in Pacific Heights. Her knowledge of the neighborhood and expertise in negotiations saved us thousands. She was patient, responsive, and made the entire process smooth.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '2',
    name: 'Robert Chen',
    role: 'Property Investor',
    testimonial: 'As a real estate investor, I need an agent who understands market trends and investment potential. Marci exceeded my expectations, finding me properties with excellent ROI and handling everything professionally.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    role: 'First-time Seller',
    testimonial: 'Selling our first home was daunting, but Marci made it easy. Her staging advice and marketing strategy resulted in multiple offers above asking price. We couldn\'t be happier with the outcome!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--gold))]/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about their experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[350px] md:h-[250px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === activeTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-24'
                }`}
              >
                <Card className="h-full">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <p className="text-lg italic mb-6">"{testimonial.testimonial}"</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-full w-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeTestimonial 
                    ? 'bg-[hsl(var(--gold))] w-8' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
