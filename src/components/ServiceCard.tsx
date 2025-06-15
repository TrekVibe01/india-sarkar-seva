
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from 'react';

interface ServiceCardProps {
  name: string;
  icon: React.ElementType;
  url: string;
  description: string;
}

const ServiceCard = ({ name, icon: Icon, url, description }: ServiceCardProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block group h-full">
      <Card className="h-full group-hover:border-primary transition-all duration-300 group-hover:shadow-lg flex flex-col justify-between transform group-hover:-translate-y-1">
        <div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">{name}</CardTitle>
            <Icon className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </div>
        <CardContent className="pt-4">
          <div className="flex items-center text-sm text-primary">
            Visit Site
            <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default ServiceCard;
