
import { stateData } from "@/data/states";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import React from "react";

interface StateSelectorProps {
  searchQuery: string;
}

const StateSelector = ({ searchQuery }: StateSelectorProps) => {
  const { speak } = useTextToSpeech();
  const lowercasedQuery = searchQuery.toLowerCase();

  const getFilteredData = (data: typeof stateData.states | typeof stateData.unionTerritories) => {
    if (!lowercasedQuery) return data;
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(lowercasedQuery) ||
        item.services.some((service) =>
          service.name.toLowerCase().includes(lowercasedQuery)
        )
    );
  };
  
  const filteredStates = getFilteredData(stateData.states);
  const filteredUnionTerritories = getFilteredData(stateData.unionTerritories);

  if (searchQuery && filteredStates.length === 0 && filteredUnionTerritories.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted opacity-0 animate-slide-up-fade-in" style={{ animationDelay: "0.7s" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Find State-Specific Services
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Below is a list of all Indian states and union territories with key e-governance services and direct links to their official portals.
          </p>
        </div>

        {filteredStates.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-primary/90 mb-6 border-b pb-2">States</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStates.map((state) => (
                <Card key={state.name} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl">{state.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {state.services.map((service) => (
                        <li key={service.name}>
                          <a href={service.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline" onClick={() => speak(service.name)}>
                            {service.name}
                            <ExternalLink className="h-4 w-4 ml-1.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredUnionTerritories.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold tracking-tight text-primary/90 mb-6 border-b pb-2">Union Territories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUnionTerritories.map((ut) => (
                <Card key={ut.name} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl">{ut.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {ut.services.map((service) => (
                        <li key={service.name}>
                          <a href={service.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline" onClick={() => speak(service.name)}>
                            {service.name}
                            <ExternalLink className="h-4 w-4 ml-1.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {!searchQuery && (
          <div className="mt-12 text-center text-muted-foreground bg-background/50 p-4 rounded-lg border">
            <p className="font-semibold">
              Jammu & Kashmir, Ladakh, Andaman & Nicobar, Dadra & Nagar Haveli and Daman & Diu, and Lakshadweep
            </p>
            <p className="text-sm mt-1">
              For these territories, please visit their respective official government websites to find e-governance portals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateSelector;
