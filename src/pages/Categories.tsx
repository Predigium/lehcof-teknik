import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Zap, Cog, Droplets, Battery, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Engine Oils",
    description: "High-performance engine oils for automotive, marine, and industrial applications.",
    icon: Droplets,
    productCount: 45,
    brands: ["Mobil", "Petronas", "ENOC"],
    features: ["Synthetic & Conventional", "All Viscosity Grades", "OEM Approved"]
  },
  {
    id: 2,
    name: "Hydraulic Oils",
    description: "Premium hydraulic fluids for industrial machinery and mobile equipment.",
    icon: Cog,
    productCount: 32,
    brands: ["Mobil", "Petronas", "GP"],
    features: ["Anti-wear Protection", "Thermal Stability", "Water Resistance"]
  },
  {
    id: 3,
    name: "Gear Oils",
    description: "Specialized gear oils for automotive and industrial gear systems.",
    icon: Package,
    productCount: 28,
    brands: ["ENOC", "Mobil", "Petronas"],
    features: ["EP Protection", "Wide Temperature Range", "Long Service Life"]
  },
  {
    id: 4,
    name: "Industrial Batteries",
    description: "Heavy-duty batteries for industrial applications and backup power systems.",
    icon: Battery,
    productCount: 18,
    brands: ["GP", "Bavaria", "Industrial Pro"],
    features: ["Deep Cycle", "Maintenance Free", "Long Service Life"]
  },
  {
    id: 5,
    name: "Equipment Parts",
    description: "Original and aftermarket parts for concrete pumps and industrial machinery.",
    icon: Wrench,
    productCount: 156,
    brands: ["Bavaria", "OEM Partners"],
    features: ["Original Quality", "Quick Delivery", "Technical Support"]
  },
  {
    id: 6,
    name: "Electrical Components",
    description: "Industrial electrical components and automation equipment.",
    icon: Zap,
    productCount: 89,
    brands: ["Various Manufacturers"],
    features: ["Industrial Grade", "Certified Quality", "Technical Documentation"]
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-darker text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Categories</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore our comprehensive range of industrial products organized by category. 
            Find exactly what you need for your industrial applications.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="bg-muted/50 group-hover:bg-muted transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="font-semibold">
                        {category.productCount} Products
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Available Brands:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.brands.map((brand, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {brand}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link to="/products">
                      <Button className="w-full bg-primary hover:bg-industrial-accent-hover">
                        Browse Products
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of experts can help you find the right products for your specific requirements. 
            Contact us for personalized recommendations and quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-industrial-accent-hover">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;