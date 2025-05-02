import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';
import { Building, MapPin, DollarSign, Filter } from 'lucide-react';

interface PropertySectionProps {
  title: string;
  subtitle: string;
  properties: Property[];
}

const PropertySection: React.FC<PropertySectionProps> = ({ title, subtitle, properties }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <section id="pgs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-4 py-2 rounded-full flex items-center ${
              activeFilter === 'all' 
                ? 'bg-blue-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            <Filter className="w-4 h-4 mr-2" />
            All Types
          </button>
          <button
            className={`px-4 py-2 rounded-full flex items-center ${
              activeFilter === 'pg' 
                ? 'bg-blue-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('pg')}
          >
            <Building className="w-4 h-4 mr-2" />
            PG
          </button>
          <button
            className={`px-4 py-2 rounded-full flex items-center ${
              activeFilter === 'flat' 
                ? 'bg-blue-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('flat')}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Flat
          </button>
          <button
            className={`px-4 py-2 rounded-full flex items-center ${
              activeFilter === 'apartment' 
                ? 'bg-blue-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('apartment')}
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Apartment
          </button>
        </div>

        {/* Properties grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-white text-blue-800 border-2 border-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            View More Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;