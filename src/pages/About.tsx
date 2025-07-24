import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Globe, Users, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-darker text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About LEHCOF TECHNIC</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Leading industrial equipment and lubricants supplier serving the Middle East 
            with premium solutions and decades of experience.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  LEHCOF TECHNIC LLC is a leading industrial equipment and lubricants supplier 
                  that has established strong operations in the Middle Eastern region, with its 
                  headquarters in the UAE. We have built a solid foundation on core values, 
                  sincere customer relationships and extensive experience in the field that 
                  spans over decades.
                </p>
                <p>
                  We are known for being one of the region's leading suppliers of a diverse range of 
                  European & American made technical products. Through our "One Stop Shop" approach 
                  to all your engineering & consumables needs, we cover a comprehensive range of 
                  products, after sales services and rentals across a wide landscape of Industries.
                </p>
                <p>
                  Our commitment to quality, reliability, and customer satisfaction has made us a 
                  trusted partner for businesses across the Middle East and beyond.
                </p>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="LEHCOF TECHNIC facility"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our business operations and customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
                <p className="text-muted-foreground">
                  We source only the highest quality products from trusted European and American manufacturers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Building sincere, long-lasting relationships with our customers through exceptional service.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  Serving customers across 30+ countries worldwide with reliable logistics and support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Decades of experience ensuring consistent delivery and minimal downtime for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your industrial needs with our "One Stop Shop" approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <h3 className="text-xl font-semibold mb-4">Product Supply</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Industrial Lubricants & Oils</li>
                  <li>• Heavy Duty Batteries</li>
                  <li>• Concrete Pump Spares</li>
                  <li>• Technical Equipment</li>
                  <li>• Hydraulic Components</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <h3 className="text-xl font-semibold mb-4">After Sales Service</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Technical Support</li>
                  <li>• Installation Assistance</li>
                  <li>• Maintenance Programs</li>
                  <li>• Troubleshooting</li>
                  <li>• Training Services</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <h3 className="text-xl font-semibold mb-4">Equipment Rental</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Short-term Rentals</li>
                  <li>• Long-term Leasing</li>
                  <li>• Flexible Terms</li>
                  <li>• Maintenance Included</li>
                  <li>• Quick Deployment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-darker text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the LEHCOF TECHNIC difference. Contact us today to discuss 
            your industrial equipment and lubricant needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-primary hover:bg-industrial-accent-hover text-primary-foreground">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-industrial-dark">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;