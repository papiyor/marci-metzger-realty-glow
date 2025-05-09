
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export interface PropertyProps {
  id: string;
  image: string;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  new?: boolean;
}

const PropertyCard = ({
  image,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  new: isNew,
}: PropertyProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full">
        <div className="relative overflow-hidden h-64">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          {isNew && (
            <Badge className="absolute top-3 left-3 bg-[hsl(var(--gold))] text-white">
              New Listing
            </Badge>
          )}
        </div>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <p className="text-sm line-clamp-1">{address}</p>
          </div>
          <p className="mt-3 font-semibold text-lg">{price}</p>
        </CardContent>
        <CardFooter className="border-t border-border pt-3 flex justify-between">
          <div className="flex items-center gap-3">
            <div className="text-sm">
              <span className="font-medium">{bedrooms}</span> <span className="text-muted-foreground">bd</span>
            </div>
            <div className="text-sm">
              <span className="font-medium">{bathrooms}</span> <span className="text-muted-foreground">ba</span>
            </div>
            <div className="text-sm">
              <span className="font-medium">{squareFeet}</span> <span className="text-muted-foreground">sqft</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
