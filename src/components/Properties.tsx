
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PropertyCard, { PropertyProps } from './PropertyCard';

const DUMMY_PROPERTIES: PropertyProps[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Modern Luxury Villa',
    address: 'Pacific Heights, San Francisco',
    price: '$4,250,000',
    bedrooms: 5,
    bathrooms: 4.5,
    squareFeet: 3800,
    new: true
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Downtown Penthouse',
    address: 'Financial District, San Francisco',
    price: '$3,750,000',
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2100
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Charming Victorian',
    address: 'Hayes Valley, San Francisco',
    price: '$2,950,000',
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2800
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Waterfront Residence',
    address: 'Marina District, San Francisco',
    price: '$5,150,000',
    bedrooms: 6,
    bathrooms: 5,
    squareFeet: 4200,
    new: true
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1600566753376-12c4b98e3ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Modern Townhouse',
    address: 'Russian Hill, San Francisco',
    price: '$2,350,000',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1950
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Elegant Condo',
    address: 'Nob Hill, San Francisco',
    price: '$1,850,000',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1450
  },
];

const Properties = () => {
  const [visibleProperties, setVisibleProperties] = useState(3);
  
  const handleLoadMore = () => {
    setVisibleProperties((prev) => Math.min(prev + 3, DUMMY_PROPERTIES.length));
  };

  return (
    <section id="properties" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Properties</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of properties in the most desirable neighborhoods
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DUMMY_PROPERTIES.slice(0, visibleProperties).map((property) => (
            <div 
              key={property.id} 
              className="opacity-0"
              style={{
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: `${parseInt(property.id) * 0.1}s`
              }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
        
        {visibleProperties < DUMMY_PROPERTIES.length && (
          <div className="text-center mt-12">
            <Button 
              onClick={handleLoadMore}
              size="lg"
              className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90"
            >
              Load More Properties
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
