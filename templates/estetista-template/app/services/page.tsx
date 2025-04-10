// templates/estetista-template/app/services/page.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@global-ui/card';
import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      category: "Trattamenti Viso",
      items: [
        {
          name: "Trattamento Viso Classico",
          description: "Un trattamento viso che include pulizia profonda, esfoliazione, estrazione e idratazione.",
          duration: "60 min",
          price: "€80",
        },
        {
          name: "Trattamento Viso Anti-Età",
          description: "Contrasta rughe e linee sottili con sieri specializzati e tecniche mirate.",
          duration: "75 min",
          price: "€95",
        },
        {
          name: "Trattamento Viso Idratante",
          description: "Idratazione intensiva per pelli secche e disidratate.",
          duration: "60 min",
          price: "€85",
        },
        {
          name: "Trattamento per l'Acne",
          description: "Trattamento specifico per pelli soggette ad acne.",
          duration: "60 min",
          price: "€90",
        },
      ],
    },
    {
      category: "Trattamenti Corpo",
      items: [
        {
          name: "Massaggio Svedese",
          description: "Un massaggio delicato e rilassante che migliora la circolazione e allevia la tensione.",
          duration: "60 min",
          price: "€90",
        },
        {
          name: "Massaggio Tissutale Profondo",
          description: "Agisce sugli strati più profondi dei muscoli e del tessuto connettivo.",
          duration: "60 min",
          price: "€100",
        },
        {
          name: "Massaggio con Pietre Calde",
          description: "Utilizza pietre calde per rilassare i muscoli e migliorare la circolazione.",
          duration: "75 min",
          price: "€110",
        },
        {
          name: "Scrub Corpo",
          description: "Esfolia e rigenera la pelle, lasciandola morbida e liscia.",
          duration: "45 min",
          price: "€70",
        },
      ],
    },
    {
      category: "Servizi Manicure e Pedicure",
      items: [
        {
          name: "Manicure Classica",
          description: "Include modellatura delle unghie, cura delle cuticole e applicazione di smalto.",
          duration: "30 min",
          price: "€35",
        },
        {
          name: "Manicure Semipermanente",
          description: "Smalto semipermanente resistente alle scheggiature.",
          duration: "45 min",
          price: "€45",
        },
        {
          name: "Pedicure Classica",
          description: "Include ammollo dei piedi, esfoliazione, cura delle unghie e smalto.",
          duration: "45 min",
          price: "€50",
        },
        {
          name: "Pedicure Spa",
          description: "Pedicure di lusso con massaggio esteso e trattamento alla paraffina.",
          duration: "60 min",
          price: "€65",
        },
      ],
    },
    {
      category: "Epilazione",
      items: [
        {
          name: "Epilazione Sopracciglia",
          description: "Modella e definisce le sopracciglia.",
          duration: "15 min",
          price: "€20",
        },
        {
          name: "Epilazione Labbro Superiore",
          description: "Rimuove i peli indesiderati dal labbro superiore.",
          duration: "10 min",
          price: "€15",
        },
        {
          name: "Epilazione Gamba Intera",
          description: "Rimuove i peli da tutta la gamba.",
          duration: "45 min",
          price: "€60",
        },
        {
          name: "Epilazione Brasiliana",
          description: "Rimozione completa dei peli dall'area bikini.",
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
          <h1 className="text-4xl font-bold tracking-tight text-primary">I Nostri Servizi</h1>
          <p className="mt-4 text-lg text-gray-500">Scopri la nostra gamma di servizi di bellezza e benessere</p>
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
                        Durata: {service.duration} | Prezzo: {service.price}
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