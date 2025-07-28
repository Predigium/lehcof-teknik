import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock product data - in real app, this would come from your database
const products = [
  {
    id: 1,
    name: "Mobil Delvac 1 ESP 5W-40",
    category: "Engine Oils",
    brand: "Mobil",
    price: "$45.99",
    description: "Fully synthetic heavy duty diesel engine oil for modern low emission engines.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Low Emission", "Fuel Economy", "Extended Drain"]
  },
  {
    id: 2,
    name: "Petronas Hydraulic 46",
    category: "Hydraulic Oils",
    brand: "Petronas",
    price: "$38.50",
    description: "High performance hydraulic fluid for industrial and mobile applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Anti-wear", "Thermal Stability", "Water Resistance"]
  },
  {
    id: 3,
    name: "Industrial Battery 12V 200Ah",
    category: "Batteries",
    brand: "GP",
    price: "$299.00",
    description: "Heavy duty deep cycle battery for industrial applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Deep Cycle", "Maintenance Free", "Long Life"]
  },
  {
    id: 4,
    name: "ENOC Gear Oil 140",
    category: "Gear Oils",
    brand: "ENOC",
    price: "$28.75",
    description: "High performance gear oil for automotive and industrial gearboxes.",
    image: "/placeholder.svg",
    inStock: false,
    features: ["EP Protection", "Thermal Stability", "Corrosion Protection"]
  },
  {
    id: 5,
    name: "Hydraulic Pump Assembly",
    category: "Equipment Parts",
    brand: "Lehcof",
    price: "$1,299.00",
    description: "Complete hydraulic pump assembly for concrete pumps and industrial machinery.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Heavy Duty", "Easy Installation", "1 Year Warranty"]
  },
  {
    id: 6,
    name: "Mobil Grease XHP 222",
    category: "Greases",
    brand: "Mobil",
    price: "$52.30",
    description: "Lithium complex grease for extreme pressure and high temperature applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Extreme Pressure", "High Temperature", "Water Resistant"]
  },
  // Shell Lubricants
  {
    id: 7,
    name: "Shell Rimula R4 X 15W-40",
    category: "Lubricants",
    brand: "Shell",
    price: "$42.50",
    description: "Premium heavy-duty diesel engine oil for mixed fleets and tough operating conditions.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Multi-grade", "Diesel Protection", "Extended Service Life"]
  },
  {
    id: 8,
    name: "Shell Tellus S2 M 46",
    category: "Lubricants",
    brand: "Shell",
    price: "$38.75",
    description: "High-quality hydraulic fluid for industrial and mobile applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Hydraulic Protection", "Anti-wear", "Thermal Stability"]
  },
  {
    id: 9,
    name: "Shell Omala S4 GX 320",
    category: "Lubricants",
    brand: "Shell",
    price: "$65.00",
    description: "Advanced synthetic industrial gear oil for extreme conditions.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Synthetic", "Extreme Pressure", "Long Service Life"]
  },
  {
    id: 10,
    name: "Shell Gadus S3 V100 2",
    category: "Lubricants",
    brand: "Shell",
    price: "$55.20",
    description: "High-performance lithium complex grease for automotive and industrial applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Lithium Complex", "High Temperature", "Water Resistant"]
  },
  // Gulf Marine Oil
  {
    id: 11,
    name: "Gulf Marine SAE 30",
    category: "Lubricants",
    brand: "Gulf Marine Oil",
    price: "$48.90",
    description: "Premium marine engine oil for commercial vessels and offshore applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Marine Grade", "Corrosion Protection", "Salt Water Resistant"]
  },
  {
    id: 12,
    name: "Gulf Marine 2-Stroke Oil",
    category: "Lubricants",
    brand: "Gulf Marine Oil",
    price: "$52.30",
    description: "High-performance 2-stroke marine engine oil for outboard motors.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["2-Stroke Formula", "Clean Burn", "Engine Protection"]
  },
  {
    id: 13,
    name: "Gulf Marine Hydraulic Oil 32",
    category: "Lubricants",
    brand: "Gulf Marine Oil",
    price: "$44.75",
    description: "Marine-grade hydraulic oil for deck machinery and winches.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Marine Approved", "Anti-foam", "Corrosion Inhibitors"]
  },
  {
    id: 14,
    name: "Gulf Marine Gear Oil 140",
    category: "Lubricants",
    brand: "Gulf Marine Oil",
    price: "$46.80",
    description: "Heavy-duty marine gear oil for propulsion systems and deck equipment.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["EP Protection", "Water Separation", "Seal Compatibility"]
  },
  // Condat Grease
  {
    id: 15,
    name: "Condat Bioprex 2 EP",
    category: "Lubricants",
    brand: "Condat Grease",
    price: "$78.50",
    description: "Biodegradable lithium grease for environmentally sensitive applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Biodegradable", "EP Properties", "Environmental Safe"]
  },
  {
    id: 16,
    name: "Condat Altemp Q NB 50",
    category: "Lubricants",
    brand: "Condat Grease",
    price: "$85.20",
    description: "High-temperature synthetic grease for extreme applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["High Temperature", "Synthetic Base", "Long Service Life"]
  },
  {
    id: 17,
    name: "Condat Stabyl 2",
    category: "Lubricants",
    brand: "Condat Grease",
    price: "$68.90",
    description: "Multi-purpose lithium grease for general industrial applications.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Multi-purpose", "Water Resistant", "Good Pumpability"]
  },
  {
    id: 18,
    name: "Condat Marine Grease",
    category: "Lubricants",
    brand: "Condat Grease",
    price: "$72.40",
    description: "Specialized marine grease for shipboard and offshore equipment.",
    image: "/placeholder.svg",
    inStock: true,
    features: ["Marine Grade", "Salt Water Resistant", "Anti-corrosion"]
  }
];

const categories = ["All", "Engine Oils", "Hydraulic Oils", "Gear Oils", "Greases", "Batteries", "Equipment Parts", "Lubricants"];
const brands = ["All", "Mobil", "Petronas", "GP", "ENOC", "Lehcof", "Shell", "Gulf Marine Oil", "Condat Grease"];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-darker text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover our comprehensive range of industrial lubricants, equipment, and accessories 
            from leading European and American manufacturers.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <Badge variant={product.inStock ? "default" : "destructive"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button 
                      disabled={!product.inStock}
                      className="bg-primary hover:bg-industrial-accent-hover"
                    >
                      {product.inStock ? "Contact for Quote" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;