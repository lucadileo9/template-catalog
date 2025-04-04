// components/molecules/Hero/index.tsx

import React from "react";
import HeroProps from "./index.types";
import { validTemplates } from 'config/templates';
import Link from 'next/link';
import TemplateList from "@app/components/atoms/TemplateList";

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-center mb-6">Elenco Template</h1>
          <TemplateList />
        </div>
      </section>
  );
};

export default Hero;