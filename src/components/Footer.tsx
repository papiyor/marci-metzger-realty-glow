
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Marci Metzger</h3>
            <p className="text-primary-foreground/70">
              Professional real estate services in the San Francisco Bay Area.
              Dedicated to helping clients find their perfect property.
            </p>
            <p className="mt-4 text-primary-foreground/70">
              DRE License #: 01234567
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Properties", "About", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Residential Sales
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Luxury Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Investment Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Market Analysis
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-primary-foreground/70 mb-4">
              Subscribe to receive updates on new properties and market insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-black rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-[hsl(var(--gold))] px-4 rounded-r-md hover:bg-[hsl(var(--gold))]/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm mt-4 md:mt-0">
            © 2025 Marci Metzger Real Estate. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-[hsl(var(--gold))] p-3 rounded-full hover:bg-[hsl(var(--gold))]/90 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
