// components/molecules/ExternalSiteList.tsx
import React from "react";
import CardComponent from "@app/components/atoms/CardComponent";
import { externalSites } from "config/externalSites";

const SiteList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {externalSites.map((site) => (
        <CardComponent
          key={site.url}
          title={site.title}
          description={site.description}
          imageUrl={site.imageUrl}
          href={site.url}
        />
      ))}
    </div>
  );
};

export default SiteList;