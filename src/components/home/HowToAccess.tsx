
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const HowToAccess = () => {
  return (
    <div className="bg-muted opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            How to Access These Services?
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Online Access</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Most services are available online through the{' '}
              <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                National Portal of India
              </a>
              . You can also visit the individual service websites listed above.
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Offline Access</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              For offline assistance, you can visit your nearest{' '}
              <a href="https://csc.gov.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                CSC (Common Service Centre)
              </a>
              , also known as Jan Seva Kendra, or the respective government department offices.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowToAccess;
