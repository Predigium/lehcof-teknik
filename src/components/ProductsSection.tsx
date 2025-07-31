import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lubricantsImage from "@/assets/products-lubricants.jpg";
import equipmentImage from "@/assets/products-equipment.jpg";
import batteriesImage from "@/assets/products-batteries.jpg";
import hosesImage from "@/assets/products-hoses.jpg";
import pipesImage from "@/assets/products-pipes.jpg";
import shipSparesImage from "@/assets/products-ship-spares.jpg";
import pumpsImage from "@/assets/products-pumps.jpg";
import electricalsImage from "@/assets/products-electricals.jpg";
import metalsImage from "@/assets/products-metals.jpg";
import fastenersImage from "@/assets/products-fasteners.jpg";
import safetyImage from "@/assets/products-safety.jpg";
import engineSparesImage from "@/assets/products-engine-spares.jpg";
import abrasivesImage from "@/assets/products-abrasives.jpg";
import toolsImage from "@/assets/products-tools.jpg";
import machiningImage from "@/assets/products-machining.jpg";

const products = [
  {
    title: "Industrial Lubricants",
    description: "Premium quality lubricants from leading brands like Mobil, Petronas, GP, and ENOC for all industrial applications.",
    image: lubricantsImage,
    features: ["High Performance", "Extended Life", "Industry Certified"]
  },
  {
    title: "Equipment & Machinery",
    description: "European & American made technical products and equipment for various industrial applications.",
    image: equipmentImage,
    features: ["European Quality", "Technical Support", "Parts Available"]
  },
  {
    title: "Batteries & Power",
    description: "Heavy-duty batteries and power systems for industrial and commercial applications.",
    image: batteriesImage,
    features: ["Long Lasting", "Reliable Power", "Maintenance Free"]
  },
  {
    title: "Hoses and Fittings",
    description: "Industrial hoses, hydraulic fittings, and coupling systems for various applications.",
    image: hosesImage,
    features: ["Pressure Tested", "Multiple Sizes", "Durable Materials"]
  },
  {
    title: "Pipes Valves and Fittings",
    description: "Complete range of pipes, valves, and fittings for industrial and marine applications.",
    image: pipesImage,
    features: ["Corrosion Resistant", "Multiple Standards", "Quality Assured"]
  },
  {
    title: "IMPA Ship Spares",
    description: "Comprehensive marine spare parts following IMPA standards for shipping and offshore industries.",
    image: shipSparesImage,
    features: ["IMPA Certified", "Marine Grade", "Global Standards"]
  },
  {
    title: "Pumps and Motors",
    description: "Industrial pumps and electric motors for various applications and industries.",
    image: pumpsImage,
    features: ["Heavy Duty", "Energy Efficient", "Low Maintenance"]
  },
  {
    title: "Electricals",
    description: "Electrical components, control systems, and wiring solutions for industrial use.",
    image: electricalsImage,
    features: ["Safety Certified", "Weather Resistant", "Professional Grade"]
  },
  {
    title: "Raw Metals",
    description: "Steel, aluminum, and other metal materials for fabrication and manufacturing needs.",
    image: metalsImage,
    features: ["Grade Certified", "Custom Sizes", "Quick Delivery"]
  },
  {
    title: "Fasteners",
    description: "Bolts, nuts, screws, and hardware components for industrial assembly applications.",
    image: fastenersImage,
    features: ["Various Grades", "Corrosion Resistant", "Standard Compliant"]
  },
  {
    title: "Safety",
    description: "Personal protective equipment and safety gear for industrial environments.",
    image: safetyImage,
    features: ["Safety Certified", "Comfort Fit", "Industry Standards"]
  },
  {
    title: "Engine Spares",
    description: "Engine parts and components for marine, industrial, and automotive applications.",
    image: engineSparesImage,
    features: ["OEM Quality", "Wide Compatibility", "Tested Performance"]
  },
  {
    title: "Abrasives",
    description: "Grinding wheels, sandpaper, and polishing materials for surface finishing work.",
    image: abrasivesImage,
    features: ["Long Lasting", "Consistent Finish", "Various Grits"]
  },
  {
    title: "Power Tools and Hand Tools",
    description: "Professional power tools and hand tools for industrial and workshop applications.",
    image: toolsImage,
    features: ["Professional Grade", "Ergonomic Design", "Warranty Included"]
  },
  {
    title: "Machining Tools",
    description: "Precision cutting tools, drills, and CNC tooling for machining operations.",
    image: machiningImage,
    features: ["Precision Made", "Extended Life", "Multiple Coatings"]
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Sell
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Lehco-Teknik is your premier supplier of industry-specific equipment and spares for Defence, Marine, Offshore, and Industrial sectors.
          </p>
          <p className="text-lg text-primary max-w-3xl mx-auto mt-4">
            We offer seamless door-to-door deliveries to Saudi, Qatar, Kuwait, Bahrain, Oman, and Pakistan, handling all port and customs formalities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary hover:bg-industrial-accent-hover">
                  View Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;