
import { serviceCategories } from "@/data/services";
import ServiceCard from "../ServiceCard";

const PopularServices = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          All Government Services
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Quickly access a wide range of central and state government services.
        </p>
      </div>

      {serviceCategories.map((category) => (
        <div key={category.title} className="mb-16">
          <h3 className="text-2xl font-semibold tracking-tight text-primary/90 mb-6 border-b pb-2">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.services.map((service) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                description={service.description}
                icon={service.icon}
                url={service.url}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularServices;
