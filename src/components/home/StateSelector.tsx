
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { indianStates } from "@/data/states";

const StateSelector = () => {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Find State-Specific Services
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Select your state to discover local e-governance portals and services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Select>
              <SelectTrigger className="w-full sm:w-[280px]">
                <SelectValue placeholder="Select a State" />
              </SelectTrigger>
              <SelectContent>
                {indianStates.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              Go
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSelector;
