
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the form submission here
    alert("Your message has been sent. Marci will contact you soon!");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have questions about buying or selling a property? Get in touch and I'll be happy to help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--gold))]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[hsl(var(--gold))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Address</h3>
                    <p className="text-muted-foreground mt-1">
                      123 Market Street, Suite 200<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--gold))]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[hsl(var(--gold))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground mt-1">
                      (415) 555-1234
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--gold))]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[hsl(var(--gold))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground mt-1">
                      marci@marcimetzger.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--gold))]/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[hsl(var(--gold))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground mt-1">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Full Name" required />
                </div>
                <div>
                  <Input type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" required />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
