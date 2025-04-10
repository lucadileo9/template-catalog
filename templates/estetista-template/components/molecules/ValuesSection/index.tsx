import React, { FC } from "react";
import ValuesSectionProps from "./index.types"

const ValuesSection: FC<ValuesSectionProps> = ({ }) => {
  const values = [
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
  ];

  
  return <>
  
  <section className="py-12 bg-primary">
      <div className="container mx-auto max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-center text-black">
          I Nostri Valori
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="rounded-lg p-4 text-center bg-secondary">
              <h3 className="text-xl font-bold mb-2 text-black">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
}

export default ValuesSection