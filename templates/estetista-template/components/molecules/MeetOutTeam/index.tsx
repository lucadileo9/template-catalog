import React, { FC } from "react";
import MeetOutTeamProps from "./index.types"
import Image from "next/image";

const MeetOutTeam: FC<MeetOutTeamProps> = ({ }) => {
  return <>
  <div className="space-y-6 bg-gradient-to-b from-[var(--tertiary)] to-[var(--primary)] py-8">
          <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl">
            Conosci il Nostro Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-8">
            {[
              {
                name: "Sofia Martinez",
                role: "Fondatrice ed Estetista Capo",
                bio: "Con oltre 15 anni di esperienza, Sofia è appassionata di aiutare i clienti a sentirsi e apparire al meglio.",
                image: "/estetista/images/01_staff.png",
              },
              {
                name: "Elena Rodriguez",
                role: "Estetista Senior",
                bio: "Elena si specializza nei trattamenti viso ed ha un talento nel risolvere vari problemi della pelle.",
                image:"/estetista/images/02_staff.png"
              },
              {
                name: "Isabella Garcia",
                role: "Tecnica delle Unghie",
                bio: "Isabella è nota per la sua precisione e creatività nell'arte delle unghie e nei trattamenti.",
                image: "/estetista/images/03_staff.png"
              },
              {
                name: "Gabriela Lopez",
                role: "Massaggiatrice",
                bio: "I massaggi terapeutici di Gabriela sono progettati per alleviare lo stress e promuovere il rilassamento.",
                image: "/estetista/images/04_staff.png"
              },
              {
                name: "Carmen Sanchez",
                role: "Estetista",
                bio: "Carmen è dedicata a fornire trattamenti personalizzati che soddisfano le esigenze individuali.",
                image: "/estetista/images/05_staff.png"
              },
              {
                name: "Maria Perez",
                role: "Receptionist",
                bio: "Maria assicura che ogni esperienza del cliente inizi e finisca con una nota positiva.",
                image: "/estetista/images/06_staff.png"
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary" >
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-secondary" >
                  {member.role}
                </p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        </>
}

export default MeetOutTeam