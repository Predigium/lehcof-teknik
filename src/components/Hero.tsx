import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industries.jpg";
const Hero = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`
  }}>
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            #1 SUPPLIER FOR INDUSTRY SPECIFIC
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary">EQUIPMENTS & SPARES</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">DEFENCE | MARINE | OFFSHORE | INDUSTRIAL</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-industrial-accent-hover text-lg px-8 py-4">
              View Our Products
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white text-lg px-8 py-4 text-teal-600">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;