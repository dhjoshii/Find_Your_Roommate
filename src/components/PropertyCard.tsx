import React from 'react';
import { MapPin, Users, IndianRupee, Star } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-48 object-cover" 
          loading="lazy"
        />
        {property.featured && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded flex items-center">
          <Star className="w-3 h-3 mr-1 fill-current" />
          {property.rating}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm">{property.location}</p>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <p className="text-sm">{property.type === 'pg' ? 'PG' : property.type === 'flat' ? 'Flat' : 'Apartment'}</p>
          </div>
          <div className="flex items-center font-semibold text-blue-800">
            <IndianRupee className="w-4 h-4 mr-1" />
            <p>{property.price.toLocaleString('en-IN')}{property.pricePeriod}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span 
              key={index} 
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded">
              +{property.amenities.length - 3}
            </span>
          )}
        </div>
        
        <button className="w-full bg-blue-800 text-white py-2 rounded transition-colors hover:bg-blue-900">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;