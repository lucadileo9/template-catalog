"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import React, { FC } from "react";
import HeaderMobileProps from "./index.types"
import ButtonContattaci from "@app/components/atoms/ButtonContattaci";

const HeaderMobile: FC<HeaderMobileProps> = ({ }) => {
  const menuLinks = [
    { id: 1, href: "#chi-siamo", label: "Chi Siamo" },
    { id: 2, href: "#servizi", label: "Servizi" },
    { id: 3, href: "#unisciti", label: "Unisciti a Noi" },
  ];

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 text-[#1e2b7c]" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="p-2 text-[#1e2b7c]" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-8 p-8">
          {menuLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="text-md font-medium text-[var(--blu)] hover:text-[var(--giallo)] transition-colors border-b border-gray-400 pb-2 w-full text-center"
            onClick={toggleMenu}
          >
            {item.label}
          </Link>
        ))}
            <ButtonContattaci href="https://jemore.it/contattaci/" />
          </nav>
        </div>
      )}
    </div>
  )
}

export default HeaderMobile