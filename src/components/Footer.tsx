import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company & Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4">RoomMate</h3>
            <p className="text-gray-400 mb-6">
              Your trusted platform to find the perfect living space and ideal roommates.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:7016665337" className="text-gray-300 hover:text-white transition-colors">
                  +91 70166 65337
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:contact@ganpat.gnu.ac.in" className="text-gray-300 hover:text-white transition-colors">
                  contact@ganpat.gnu.ac.in
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Ganesh Meridian<br />
                  Opp. Cargill Petrol Pump<br />
                  Ahmedabad, Gujarat
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#roommates" className="text-gray-300 hover:text-white transition-colors">Find Roommate</a>
              </li>
              <li>
                <a href="#pgs" className="text-gray-300 hover:text-white transition-colors">PG Accommodations</a>
              </li>
              <li>
                <a href="#pgs" className="text-gray-300 hover:text-white transition-colors">Find Flat</a>
              </li>
              <li>
                <a href="#flatmates" className="text-gray-300 hover:text-white transition-colors">Find Flatmate</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* For Property Owners */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">For Property Owners</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">List Your Property</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Owner Dashboard</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing & Plans</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Advertise With Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Team</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Dhairya Joshi</p>
                <p className="text-gray-400 text-sm">Backend & Database</p>
                <p className="text-blue-400 text-sm">dhairya.joshi@ganpat.gnu.ac.in</p>
                <p className="text-blue-400 text-sm">+91 70166 65337</p>
              </div>
              <div>
                <p className="font-medium">Geet Shastri</p>
                <p className="text-gray-400 text-sm">UI/UX & Frontend</p>
                <p className="text-blue-400 text-sm">geet.shastri@ganpat.gnu.ac.in</p>
                <p className="text-blue-400 text-sm">+91 93134 19472</p>
              </div>
              <div>
                <p className="font-medium">Tanveer Singh</p>
                <p className="text-gray-400 text-sm">API & Integration</p>
                <p className="text-blue-400 text-sm">tanveer.singh@ganpat.gnu.ac.in</p>
                <p className="text-blue-400 text-sm">+91 89055 43703</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 RoomMate. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;