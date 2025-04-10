// components/molecules/Hero/index.tsx

import React from "react";
import HeroProps from "./index.types";
import TemplateList from "@app/components/molecules/TemplateList";
import SiteList from "@app/components/molecules/SiteList";

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-[var(--blu)] flex-1  py-16 ">

      <div className=" container mx-auto bg-[var(--bianco-latte)] text-center rounded-lg shadow-lg p-6 mb-16">
        <h1 className="text-3xl font-bold text-[var(--blu)] mb-6">Elenco Template</h1>
        <TemplateList />
      </div>

      <div className="container mx-auto bg-[var(--bianco-latte)] text-center rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[var(--blu)] mb-6">Siti Online</h1>
        <SiteList />
      </div>
    </section>
  );
};

export default Hero;