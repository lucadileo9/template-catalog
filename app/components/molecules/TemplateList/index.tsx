import React, { FC } from "react";
import TemplateListProps from "./index.types"
import { validTemplates } from 'config/templates';
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@global-ui/card";
import Image from "next/image";

const TemplateList: FC<TemplateListProps> = ({ }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {validTemplates.map((template) => (
        <Link href={`/${template.name}`} key={template.name} className="block transform transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
          <Card key={template.name} className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              {/* Immagine o Video */}
              <Image
                src={`/logo_base.png`} // Assicurati di avere le immagini nella cartella `public/screenshots`
                alt={`${template} screenshot`}
                width={500} // Adjust width as needed
                height={192} // Adjust height as needed
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {/* Titolo */}
              <CardTitle className="text-[#222C7C]">
                {template.name.charAt(0).toUpperCase() + template.name.slice(1)}
              </CardTitle>
              {/* Descrizione */}
              <CardDescription className="text-gray-600">
                {template.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default TemplateList;  