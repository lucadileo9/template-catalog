import React, { FC } from "react";
import AboutSectionProps from "./index.types"
import Image from "next/image";

const AboutSection: FC<AboutSectionProps> = ({ }) => {
  return <>
      <section className="px-4 py-12 bg-primary">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black">
            Chi Siamo
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Scopri di più sul nostro salone e sul nostro impegno per la bellezza e il benessere
          </p>
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
            <h2 className="text-2xl font-bold text-black">
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
      </div>
    </section>
  </>
}

export default AboutSection