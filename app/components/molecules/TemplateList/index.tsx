import React, { FC } from "react";
import TemplateListProps from "./index.types"
import { validTemplates } from 'config/templates';
import CardComponent from "@app/components/atoms/CardComponent";

const TemplateList: FC<TemplateListProps> = ({ }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {validTemplates.map((template) => (
      <CardComponent
        key={template.name}
        title={template.name.charAt(0).toUpperCase() + template.name.slice(1)}
        description={template.description}
        imageUrl={`/template_screenshots/${template.name}.png`}
        href={`/${template.name}`}
      />
    ))}
  </div>  );
};

export default TemplateList;  