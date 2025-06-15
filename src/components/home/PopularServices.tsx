
import { serviceCategories } from "@/data/services";
import ServiceCard from "../ServiceCard";

interface PopularServicesProps {
  searchQuery: string;
}

const PopularServices = ({ searchQuery }: PopularServicesProps) => {
  const lowercasedQuery = searchQuery.toLowerCase();

  const filteredCategories = serviceCategories
    .map((category) => {
      if (!lowercasedQuery) {
        return category;
      }
      const filteredServices = category.services.filter(
        (service) =>
          service.name.toLowerCase().includes(lowercasedQuery) ||
          service.description.toLowerCase().includes(lowercasedQuery)
      );
      return { ...category, services: filteredServices };
    })
    .filter((category) => category.services.length > 0);

  return (
    <div id="popular-services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 opacity-0 animate-slide-up-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          All Government Services
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Quickly access a wide range of central and state government services.
        </p>
      </div>

      {filteredCategories.length > 0 ? (
        filteredCategories.map((category) => (
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
        ))
      ) : (
        <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No services found for "{searchQuery}".</p>
            <p>Try searching for something else.</p>
        </div>
      )}
    </div>
  );
};

export default PopularServices;
