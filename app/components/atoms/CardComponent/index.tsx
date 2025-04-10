import React, { FC } from "react";
import CardComponentProps from "./index.types"
import { Card, CardHeader, CardTitle, CardDescription } from "@global-ui/card";
import Link  from "next/link";
import Image from "next/image";

const CardComponent: FC<CardComponentProps> = ({ title, description, imageUrl, href }) => {
  return <>
      <Link href={href} className="block">
      <Card className="bg-white shadow-md hover:shadow-lg transform transition-transform hover:-translate-y-2 cursor-pointer rounded-lg overflow-hidden">
        
        {/* Contenuto */}
        <CardHeader>
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          width={500}
          height={192}
          className="w-full h-48 object-cover"
        />
          <CardTitle className="text-[var(--blu)]">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>

  </>
}

export default CardComponent