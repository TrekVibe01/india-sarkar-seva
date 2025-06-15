
import { popularServices } from "@/data/services";
import ServiceCard from "../ServiceCard";

const PopularServices = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Popular National Services
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Quickly access the most frequently used central government services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularServices.map((service) => (
          <ServiceCard
            key={service.name}
            name={service.name}
            icon={service.icon}
            url={service.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
