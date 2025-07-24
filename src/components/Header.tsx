import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b">
      {/* Top bar */}
      <div className="bg-industrial-darker text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+971 6 575 2777</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@bavaria-equipment.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>#1 Supplier For Industrial Lubricants | Batteries | Concrete Pump Spares</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">BE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Bavaria Equipment</h1>
              <p className="text-sm text-muted-foreground">Trading & Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Our Products
            </Link>
            <Link to="/lubricants" className="text-foreground hover:text-primary transition-colors">
              Lubricants
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Button className="bg-primary hover:bg-industrial-accent-hover">
              Contact Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-foreground hover:text-primary transition-colors">
                Our Products
              </Link>
              <Link to="/lubricants" className="text-foreground hover:text-primary transition-colors">
                Lubricants
              </Link>
              <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
                Categories
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Button className="bg-primary hover:bg-industrial-accent-hover w-fit">
                Contact Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;