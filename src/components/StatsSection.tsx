import { Card } from "@/components/ui/card";

const stats = [
  {
    number: "120+",
    label: "Happy Customers",
    description: "More Than"
  },
  {
    number: "3",
    label: "Countries",
    description: "Operations in"
  },
  {
    number: "7+",
    label: "Countries Worldwide",
    description: "Exports in"
  },
  {
    number: "100,000+",
    label: "Items in Stock",
    description: "Our Inventory"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Journey of Achievement and Excellence
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {stat.description}
                </p>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;