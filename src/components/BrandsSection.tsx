import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

// Import brand logos
import meclubelogo from "@/assets/brands/meclube-logo.png";
import puisiLogo from "@/assets/brands/puisi-logo.png";
import festoLogo from "@/assets/brands/festo-logo.svg";
import carrierMarineLogo from "@/assets/brands/carrier-marine-logo.png";
import wartsilaLogo from "@/assets/brands/wartsila-logo.png";
import threeMlogo from "@/assets/brands/3m-logo.png";
import enerpacLogo from "@/assets/brands/enerpac-logo.png";
import karcherLogo from "@/assets/brands/karcher-logo.png";
import ingersollRandLogo from "@/assets/brands/ingersoll-rand-logo.png";
import caterpillarLogo from "@/assets/brands/caterpillar-logo.svg";
import milwaukeeLogo from "@/assets/brands/milwaukee-logo.png";

const brands = [
  { name: "Meclube", logo: meclubelogo },
  { name: "Puisi", logo: puisiLogo },
  { name: "Festo", logo: festoLogo },
  { name: "Carrier Marine HVAC", logo: carrierMarineLogo },
  { name: "Wärtsilä", logo: wartsilaLogo },
  { name: "3M", logo: threeMlogo },
  { name: "Enerpac", logo: enerpacLogo },
  { name: "Kärcher", logo: karcherLogo },
  { name: "Ingersoll Rand", logo: ingersollRandLogo },
  { name: "Caterpillar", logo: caterpillarLogo },
  { name: "Milwaukee", logo: milwaukeeLogo },
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
                  <Card className="p-6 h-32 flex items-center justify-center hover:shadow-lg transition-shadow bg-white">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
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