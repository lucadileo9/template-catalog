import React, { FC } from "react";
import TestimonialProps from "./index.types"
// import "@estetista/styles/globals.css";
const Testimonial: FC<TestimonialProps> = ({ }) => {
  return <>
  <section className="bg-gradient-to-b from-[var(--primary)] to-[var(--tertiary)]  py-10 md:py-18 lg:py-24 " >
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cosa Dicono i Nostri Clienti</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ascolta le testimonianze dei nostri clienti soddisfatti
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Il trattamento viso è stato fantastico! La mia pelle si sente così rinfrescata e ringiovanita.",
                author: "Maria G.",
              },
              {
                quote: "Adoro l'attenzione ai dettagli nelle loro manicure. Il personale è professionale e cordiale.",
                author: "Laura S.",
              },
              {
                quote: "La terapia massaggi ha aiutato a ridurre il mio mal di schiena. Tornerò sicuramente!",
                author: "Anna P.",
              },
              {
                quote: "Ho avuto un'esperienza meravigliosa al salone. L'atmosfera è rilassante e lo staff è molto competente.",
                author: "Sofia R.",
              },
              {
                quote: "Il servizio di epilazione è stato veloce e quasi indolore. Lo consiglio vivamente a tutti!",
                author: "Clara T.",
              },
              {
                quote: "Mi piace la varietà di servizi che offrono. Il team è sempre professionale e cordiale.",
                author: "Elena M.",
              },


            ].map((testimonial, index) => (
              <div key={index} className="rounded-xl border bg-[var(--secondary)] p-6 shadow-sm">
                <p className="mb-4 text-black">&quot;{testimonial.quote}&quot;</p>
                <p className="font-medium text-secondary">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  </>
}

export default Testimonial