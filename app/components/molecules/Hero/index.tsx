// components/molecules/Hero/index.tsx

import React from "react";
import HeroProps from "./index.types";
import TemplateList from "@app/components/atoms/TemplateList";

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="flex-1 container mx-auto px-4 py-16">
      <div
        className="max-w-md mx-auto text-center bg-[#FDF7F7] rounded-lg shadow-lg p-6"
        style={{ backgroundColor: "#FDF7F7" }} // Fallback per assicurarsi che il colore sia applicato
      >
        <h1 className="text-3xl font-bold text-[#222C7C] mb-6">Elenco Template</h1>
        <TemplateList />
      </div>
    </section>
  );
};

export default Hero;