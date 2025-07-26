import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lubricantsImage from "@/assets/products-lubricants.jpg";
import equipmentImage from "@/assets/products-equipment.jpg";
import batteriesImage from "@/assets/products-batteries.jpg";

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
            Lehco-Teknik is your premier supplier of industry-specific equipment and spares for Defence, Marine, Offshore, and Industrial sectors. We offer seamless door-to-door deliveries to Saudi, Qatar, Kuwait, Bahrain, Oman, and Pakistan, handling all port and customs formalities.
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