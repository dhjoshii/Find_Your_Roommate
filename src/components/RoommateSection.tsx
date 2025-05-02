import React, { useState } from 'react';
import RoommateCard from './RoommateCard';
import { Roommate } from '../types';
import { Users, Briefcase, MapPin, Filter } from 'lucide-react';

interface RoommateSectionProps {
  title: string;
  subtitle: string;
  roommates: Roommate[];
}

const RoommateSection: React.FC<RoommateSectionProps> = ({ title, subtitle, roommates }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredRoommates = activeFilter === 'all' 
    ? roommates 
    : roommates.filter(roommate => {
        if (activeFilter === 'student') return roommate.occupation.toLowerCase().includes('student');
        if (activeFilter === 'professional') return !roommate.occupation.toLowerCase().includes('student');
        return true;
      });

  return (
    <section id="roommates" className="py-16 bg-white">
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
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full flex items-center ${
              activeFilter === 'student' 
                ? 'bg-blue-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('student')}
          >
            <Users className="w-4 h-4 mr-2" />
            Students
          </button>
          <button
            className={`px-4 py-2 rounded-full flex items-center ${
              activeFilter === 'professional' 
                ? 'bg-blue-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('professional')}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Professionals
          </button>
          <button
            className={`px-4 py-2 rounded-full flex items-center ${
              activeFilter === 'verified' 
                ? 'bg-blue-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('verified')}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Verified
          </button>
        </div>

        {/* Roommates grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRoommates.map((roommate) => (
            <RoommateCard key={roommate.id} roommate={roommate} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-white text-blue-800 border-2 border-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            View More Roommates
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoommateSection;