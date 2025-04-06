// templates/estetista-template/app/services/page.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@global-ui/card';
import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      category: "Facial Treatments",
      items: [
        {
          name: "Classic Facial",
          description: "A deep cleansing facial that includes exfoliation, extraction, and hydration.",
          duration: "60 min",
          price: "€80",
        },
        {
          name: "Anti-Aging Facial",
          description: "Targets fine lines and wrinkles with specialized serums and techniques.",
          duration: "75 min",
          price: "€95",
        },
        {
          name: "Hydrating Facial",
          description: "Intensive hydration for dry and dehydrated skin.",
          duration: "60 min",
          price: "€85",
        },
        {
          name: "Acne Treatment",
          description: "Specialized treatment for acne-prone skin.",
          duration: "60 min",
          price: "€90",
        },
      ],
    },
    {
      category: "Body Treatments",
      items: [
        {
          name: "Swedish Massage",
          description: "A gentle, relaxing massage that improves circulation and relieves tension.",
          duration: "60 min",
          price: "€90",
        },
        {
          name: "Deep Tissue Massage",
          description: "Targets deeper layers of muscle and connective tissue.",
          duration: "60 min",
          price: "€100",
        },
        {
          name: "Hot Stone Massage",
          description: "Uses heated stones to relax muscles and improve circulation.",
          duration: "75 min",
          price: "€110",
        },
        {
          name: "Body Scrub",
          description: "Exfoliates and rejuvenates the skin, leaving it soft and smooth.",
          duration: "45 min",
          price: "€70",
        },
      ],
    },
    {
      category: "Nail Services",
      items: [
        {
          name: "Classic Manicure",
          description: "Includes nail shaping, cuticle care, and polish application.",
          duration: "30 min",
          price: "€35",
        },
        {
          name: "Gel Manicure",
          description: "Long-lasting gel polish that resists chipping.",
          duration: "45 min",
          price: "€45",
        },
        {
          name: "Classic Pedicure",
          description: "Includes foot soak, exfoliation, nail care, and polish.",
          duration: "45 min",
          price: "€50",
        },
        {
          name: "Spa Pedicure",
          description: "Luxurious pedicure with extended massage and paraffin treatment.",
          duration: "60 min",
          price: "€65",
        },
      ],
    },
    {
      category: "Hair Removal",
      items: [
        {
          name: "Eyebrow Waxing",
          description: "Shapes and defines eyebrows.",
          duration: "15 min",
          price: "€20",
        },
        {
          name: "Lip Waxing",
          description: "Removes unwanted hair from the upper lip.",
          duration: "10 min",
          price: "€15",
        },
        {
          name: "Full Leg Waxing",
          description: "Removes hair from the entire leg.",
          duration: "45 min",
          price: "€60",
        },
        {
          name: "Brazilian Waxing",
          description: "Complete hair removal from the bikini area.",
          duration: "30 min",
          price: "€55",
        },
      ],
    },
  ]

  return (
    <div className=" px-4 py-12 bg-secondary">
      <div className="container mx-auto max-w-5xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary">Our Services</h1>
          <p className="mt-4 text-lg text-gray-500">Explore our range of beauty and wellness services</p>
        </div>

        <div className="space-y-12">
          {services.map((category, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">{category.category}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {category.items.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="overflow-hidden bg-[var(--tertiary)] ">
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription className="text-sm">
                        Duration: {service.duration} | Price: {service.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
