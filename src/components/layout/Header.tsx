
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { toast } = useToast();

  const handleAuthClick = () => {
    toast({
      title: "Demonstration Feature",
      description: "In a full version, signing up would unlock personalized features. This is a conceptual portal and not an official government website.",
    });
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="/emblem.svg" alt="Indian Emblem" className="h-10 w-10" />
            <a href="/" className="text-xl font-bold text-primary">
              Bharat Sewa Gateway
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={handleAuthClick}>Login</Button>
            <Button onClick={handleAuthClick} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
