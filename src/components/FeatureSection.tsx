import React from 'react';
import { Shield, Map, Clock, Medal, MessageSquare, Star } from 'lucide-react';

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-blue-100 rounded-lg text-blue-800 mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RoomMate?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're dedicated to making your accommodation hunt as smooth and secure as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<Shield className="w-6 h-6" />}
            title="Verified Listings"
            description="All our properties and roommate profiles are thoroughly verified for your safety and peace of mind."
          />
          
          <Feature 
            icon={<Map className="w-6 h-6" />}
            title="Location Intelligence"
            description="Discover places with detailed neighborhood insights including safety ratings, amenities, and transport options."
          />
          
          <Feature 
            icon={<Clock className="w-6 h-6" />}
            title="Quick Matching"
            description="Our advanced algorithm helps you find compatible roommates based on lifestyle, budget, and preferences."
          />
          
          <Feature 
            icon={<Medal className="w-6 h-6" />}
            title="Quality Assurance"
            description="We maintain high standards for all listed properties ensuring you get value for your money."
          />
          
          <Feature 
            icon={<MessageSquare className="w-6 h-6" />}
            title="Secure Communication"
            description="Connect safely with property owners or potential roommates through our in-app messaging system."
          />
          
          <Feature 
            icon={<Star className="w-6 h-6" />}
            title="Trusted Reviews"
            description="Make informed decisions with authentic reviews and ratings from our community of users."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;