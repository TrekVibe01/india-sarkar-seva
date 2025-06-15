
import Hero from "@/components/home/Hero";
import PopularServices from "@/components/home/PopularServices";
import StateSelector from "@/components/home/StateSelector";
import HowToAccess from "@/components/home/HowToAccess";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PopularServices searchQuery={searchQuery} />
      <StateSelector searchQuery={searchQuery} />
      <HowToAccess />
    </div>
  );
};

export default Index;
