import React, { FC } from "react";
import MeetOutTeamProps from "./index.types"
import Image from "next/image";

const MeetOutTeam: FC<MeetOutTeamProps> = ({ }) => {
  return <>
  <div className="space-y-6 bg-gradient-to-b from-[var(--tertiary)] to-[var(--primary)] py-8">
          <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-8">
            {[
              {
                name: "Sofia Martinez",
                role: "Founder & Lead Aesthetician",
                bio: "With over 15 years of experience, Sofia is passionate about helping clients look and feel their best.",
                image: "/estetista/images/01_staff.png",
              },
              {
                name: "Elena Rodriguez",
                role: "Senior Aesthetician",
                bio: "Elena specializes in facial treatments and has a talent for addressing various skin concerns.",
                image:"/estetista/images/02_staff.png"
              },
              {
                name: "Isabella Garcia",
                role: "Nail Technician",
                bio: "Isabella is known for her precision and creativity in nail art and treatments.",
                image: "/estetista/images/03_staff.png"
              },
              {
                name: "Gabriela Lopez",
                role: "Massage Therapist",
                bio: "Gabriela's therapeutic massages are designed to relieve stress and promote relaxation.",
                image: "/estetista/images/04_staff.png"
              },
              {
                name: "Carmen Sanchez",
                role: "Aesthetician",
                bio: "Carmen is dedicated to providing personalized treatments that address individual needs.",
                image: "/estetista/images/05_staff.png"
              },
              {
                name: "Maria Perez",
                role: "Receptionist",
                bio: "Maria ensures that every client's experience begins and ends on a positive note.",
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