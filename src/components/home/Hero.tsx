
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Hero = ({ searchQuery, setSearchQuery }: HeroProps) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById("popular-services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1920&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          One Nation, One Portal
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Your single point of access for all central and state government services.
          Search for any service you need.
        </p>
        <form onSubmit={handleSearch} className="mt-8 max-w-xl mx-auto flex items-center space-x-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="e.g., 'PAN Card', 'Aadhaar Update', 'Passport Application'"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
