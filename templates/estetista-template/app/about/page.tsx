// templates/estetista-template/app/about/page.tsx

import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className="px-4 py-12 bg-primary">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black" >
            Chi Siamo
          </h1>
          <p className="mt-4 text-lg text-gray-500">Scopri di più sul nostro salone e sul nostro impegno per la bellezza e il benessere</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Image
              src="/estetista/images/about_us.png"
              alt="Il Nostro Salone"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black" >
              La Nostra Storia
            </h2>
            <p className="text-gray-600">
              Fondato nel 2016, il centro JEstetico è nato da una passione per la bellezza e dal desiderio di creare uno spazio dove
              i clienti potessero rilassarsi, rigenerarsi e valorizzare la propria bellezza naturale.
            </p>
            <p className="text-gray-600">
              Nel corso degli anni, siamo cresciuti fino a diventare un salone di bellezza completo, offrendo una vasta gamma di trattamenti e
              servizi progettati per soddisfare le esigenze uniche di ogni cliente.
            </p>
            <p className="text-gray-600">
              Il nostro team di professionisti qualificati è dedicato a fornire un servizio eccezionale e a garantire che ogni
              cliente lasci il nostro salone sentendosi bella e sicura di sé.
            </p>
          </div>
        </div>

        <div className="space-y-4 p-6 rounded-lg text-black">
          <h2 className="text-2xl font-bold text-center text-black" >
            La Nostra Missione
          </h2>
          <p className="text-gray-600 text-center">
            La nostra missione è valorizzare la bellezza naturale dei nostri clienti attraverso trattamenti di alta qualità e un servizio personalizzato.
            Ci impegniamo a creare un ambiente accogliente dove i clienti possano rilassarsi e rigenerarsi ricevendo
            il massimo standard di cura.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-black" >
            I Nostri Valori
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Qualità",
                description:
                  "Utilizziamo solo prodotti e tecniche di alta qualità per garantire i migliori risultati ai nostri clienti.",
              },
              {
                title: "Professionalità",
                description:
                  "Il nostro team è composto da professionisti qualificati che si impegnano a fornire un servizio eccezionale.",
              },
              {
                title: "Soddisfazione del Cliente",
                description:
                  "Diamo priorità alle esigenze e alle preferenze dei nostri clienti per garantire la loro completa soddisfazione.",
              },
            ].map((value, index) => (
              <div key={index} className="rounded-lg  p-4 text-center bg-secondary" >
                <h3 className="text-xl font-bold mb-2 text-black" >
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}