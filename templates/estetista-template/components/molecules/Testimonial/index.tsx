import React, { FC } from "react";
import TestimonialProps from "./index.types"
// import "@estetista/styles/globals.css";
const Testimonial: FC<TestimonialProps> = ({ }) => {
  return <>
  <section className="bg-gradient-to-b from-[var(--primary)] to-[var(--tertiary)]  py-10 md:py-18 lg:py-24 " >
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "The facial treatment was amazing! My skin feels so refreshed and rejuvenated.",
                author: "Maria G.",
              },
              {
                quote: "I love the attention to detail in their manicures. The staff is professional and friendly.",
                author: "Laura S.",
              },
              {
                quote: "The massage therapy helped relieve my back pain. I'll definitely be coming back!",
                author: "Anna P.",
              },
              {
                quote: "I had a wonderful experience at the salon. The atmosphere is relaxing and the staff is very skilled.",
                author: "Sofia R.",
              },
              {
                quote:  "The waxing service was quick and virtually painless. Highly recommend for everyone!",
                author: "Clara T.",
              },
              {
                quote: "I love the variety of services they offer. The team is always professional and friendly.",
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