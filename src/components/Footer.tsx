import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-darker text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">BE</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Bavaria Equipment</h3>
                <p className="text-sm opacity-80">Trading & Services</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Bavaria Equipment Trading (BET) LLC is a German managed company that has expanded 
              operations in the Middle Eastern region, with its Headquarter in the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/lubricants" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Lubricants
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-sm opacity-80">Industrial Lubricants</li>
              <li className="text-sm opacity-80">Hydraulic Oils</li>
              <li className="text-sm opacity-80">Engine Oils</li>
              <li className="text-sm opacity-80">Gear Oils</li>
              <li className="text-sm opacity-80">Industrial Batteries</li>
              <li className="text-sm opacity-80">Equipment Parts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm">+971 6 575 2777</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm">info@bavaria-equipment.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm">UAE Headquarters<br />Middle East Operations</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © 2024 Bavaria Equipment Trading LLC. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;