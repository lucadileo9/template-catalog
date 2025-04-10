import React, { FC } from "react";
import MissionSectionProps from "./index.types"

const MissionSection: FC<MissionSectionProps> = ({ }) => {
  return <>
      <section className="py-12 bg-secondary ">
      <div className="container mx-auto max-w-4xl space-y-4 p-6 text-black rounded-full bg-primary">
        <h2 className="text-2xl font-bold text-center text-black">
          La Nostra Missione
        </h2>
        <p className="text-gray-600 text-center">
          La nostra missione è valorizzare la bellezza naturale dei nostri clienti attraverso trattamenti di alta qualità e un servizio personalizzato.
          Ci impegniamo a creare un ambiente accogliente dove i clienti possano rilassarsi e rigenerarsi ricevendo
          il massimo standard di cura.
        </p>
      </div>
    </section>
</>
}

export default MissionSection