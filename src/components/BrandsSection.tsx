import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

// Import brand logos
import meclubelogo from "@/assets/brands/meclube-logo-green.png";
import piusiLogo from "@/assets/brands/piusi-logo-blue.png";
import festoLogo from "@/assets/brands/festo-logo.svg";
import carrierMarineLogo from "@/assets/brands/carrier-marine-logo.png";
import wartsilaLogo from "@/assets/brands/wartsila-logo-blue.png";
import threeMlogo from "@/assets/brands/3m-logo-red.png";
import enerpacLogo from "@/assets/brands/enerpac-logo-blue.png";
import karcherLogo from "@/assets/brands/karcher-logo-yellow.png";
import ingersollRandLogo from "@/assets/brands/ingersoll-rand-logo-blue.png";
import caterpillarLogo from "@/assets/brands/caterpillar-logo.svg";
import milwaukeeLogo from "@/assets/brands/milwaukee-logo-red.png";
import msaLogo from "@/assets/brands/msa-logo.png";

const brands = [
  { name: "Meclube", logo: meclubelogo },
  { name: "Piusi", logo: piusiLogo },
  { name: "Festo", logo: festoLogo },
  { name: "Carrier Marine HVAC", logo: carrierMarineLogo },
  { name: "Wärtsilä", logo: wartsilaLogo },
  { name: "3M", logo: threeMlogo },
  { name: "Enerpac", logo: enerpacLogo },
  { name: "Kärcher", logo: karcherLogo },
  { name: "Ingersoll Rand", logo: ingersollRandLogo },
  { name: "Caterpillar", logo: caterpillarLogo },
  { name: "Milwaukee", logo: milwaukeeLogo },
  { name: "MSA Safety", logo: msaLogo },
];

const BrandsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted Brand Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We carry products from the world's leading manufacturers, ensuring quality and reliability for all your industrial needs.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <Card className="p-6 h-32 flex items-center justify-center hover:shadow-lg transition-shadow bg-white border border-gray-100">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-20 w-auto h-auto object-contain filter-none"
                      style={{ maxWidth: '120px', maxHeight: '80px' }}
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;