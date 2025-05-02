import React, { useState } from 'react';
import { Search, Home, Users, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('accommodation');
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden pt-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Find Your Perfect <span className="text-orange-400">Living Space</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connect with roommates, discover PGs, and find your ideal flat - all in one place.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'accommodation' 
                  ? 'text-blue-800 border-b-2 border-blue-800' 
                  : 'text-gray-500 hover:text-blue-800'
              }`}
              onClick={() => setActiveTab('accommodation')}
            >
              <div className="flex items-center justify-center">
                <Home className="w-5 h-5 mr-2" />
                <span>Find Accommodation</span>
              </div>
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'roommate' 
                  ? 'text-blue-800 border-b-2 border-blue-800' 
                  : 'text-gray-500 hover:text-blue-800'
              }`}
              onClick={() => setActiveTab('roommate')}
            >
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Find Roommate</span>
              </div>
            </button>
          </div>

          {/* Search Form */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter city, area or locality"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {activeTab === 'accommodation' && (
                <div className="flex-1">
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    id="type"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Any Type</option>
                    <option value="pg">PG</option>
                    <option value="flat">Flat</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>
              )}

              <div className="flex-1">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                <select
                  id="budget"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Any Budget</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000-15000">₹10,000 - ₹15,000</option>
                  <option value="15000-20000">₹15,000 - ₹20,000</option>
                  <option value="20000+">₹20,000+</option>
                </select>
              </div>

              <div className="md:pt-6">
                <button className="w-full bg-blue-800 text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 transition-colors shadow-md flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-white mb-2">1500+</div>
            <div className="text-blue-100">Verified Properties</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-white mb-2">5000+</div>
            <div className="text-blue-100">Happy Room Seekers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-blue-100">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;