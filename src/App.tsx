import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PropertySection from './components/PropertySection';
import RoommateSection from './components/RoommateSection';
import TestimonialSection from './components/TestimonialSection';
import FeatureSection from './components/FeatureSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { properties } from './data/properties';
import { roommates } from './data/roommates';
import { testimonials } from './data/testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PropertySection 
        title="Find Your Perfect Accommodation" 
        subtitle="Discover verified PGs, flats, and apartments tailored to your budget and preferences."
        properties={properties}
      />
      <RoommateSection 
        title="Connect with Potential Roommates"
        subtitle="Find compatible roommates who match your lifestyle, budget, and preferences."
        roommates={roommates}
      />
      <TestimonialSection testimonials={testimonials} />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;