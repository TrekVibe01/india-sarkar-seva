
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from 'react';

interface ServiceCardProps {
  name: string;
  icon: React.ElementType;
  url: string;
}

const ServiceCard = ({ name, icon: Icon, url }: ServiceCardProps) => {
  return (
    <a href={url} className="block group">
      <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">{name}</CardTitle>
          <Icon className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>
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
