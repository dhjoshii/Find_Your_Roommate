import React from 'react';
import { MapPin, User, Briefcase, Calendar, IndianRupee } from 'lucide-react';
import { Roommate } from '../types';

interface RoommateCardProps {
  roommate: Roommate;
}

const RoommateCard: React.FC<RoommateCardProps> = ({ roommate }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img 
          src={roommate.imageUrl} 
          alt={roommate.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {roommate.verified && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Verified
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{roommate.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <p className="text-sm">{roommate.age} years</p>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <Briefcase className="w-4 h-4 mr-1" />
          <p className="text-sm">{roommate.occupation}</p>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm">{roommate.location}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {roommate.interests.slice(0, 3).map((interest, index) => (
            <span 
              key={index} 
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
            >
              {interest}
            </span>
          ))}
          {roommate.interests.length > 3 && (
            <span className="bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded">
              +{roommate.interests.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex mb-4">
          <div className="px-3 py-1 rounded bg-blue-50 text-blue-800 text-sm mr-2 flex items-center">
            <IndianRupee className="w-3 h-3 mr-1" />
            {roommate.budget.toLocaleString('en-IN')}
          </div>
          <div className="px-3 py-1 rounded bg-orange-50 text-orange-800 text-sm">
            {roommate.moveInDate}
          </div>
        </div>
        
        <button className="w-full bg-blue-800 text-white py-2 rounded transition-colors hover:bg-blue-900">
          Connect
        </button>
      </div>
    </div>
  );
};

export default RoommateCard;