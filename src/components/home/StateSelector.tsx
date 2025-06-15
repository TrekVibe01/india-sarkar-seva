
import { stateData } from "@/data/states";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const StateSelector = () => {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Find State-Specific Services
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Below is a list of all Indian states and union territories with key e-governance services and direct links to their official portals.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-primary/90 mb-6 border-b pb-2">States</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateData.states.map((state) => (
              <Card key={state.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{state.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {state.services.map((service) => (
                      <li key={service.name}>
                        <a href={service.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
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

        <div className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight text-primary/90 mb-6 border-b pb-2">Union Territories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateData.unionTerritories.map((ut) => (
              <Card key={ut.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{ut.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {ut.services.map((service) => (
                      <li key={service.name}>
                        <a href={service.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
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
        
        <div className="mt-12 text-center text-muted-foreground bg-background/50 p-4 rounded-lg border">
          <p className="font-semibold">
            Jammu & Kashmir, Ladakh, Andaman & Nicobar, Dadra & Nagar Haveli and Daman & Diu, and Lakshadweep
          </p>
          <p className="text-sm mt-1">
            For these territories, please visit their respective official government websites to find e-governance portals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StateSelector;
