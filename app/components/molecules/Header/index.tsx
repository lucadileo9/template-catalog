import React, { FC } from "react";
import HeaderProps from "./index.types"
import Link from "next/link";
import { Home, Info, Mail } from "lucide-react";
import HeaderMobile from "../HeaderMobile";
import Image from "next/image";
import ButtonContattaci from "@app/components/atoms/ButtonContattaci";

const Header: FC<HeaderProps> = ({ }) => {
  const links = [
  { text: "Chi Siamo", href: "https://jemore.it/chisiamo/" },
  { text: "Servizi", href: "https://jemore.it/servizi-offerti/" },
  { text: "Unisciti a Noi", href: "https://jemore.it/unisciti-a-noi/" },
  ]
  return <>
  <header className="bg-white border-b border-gray sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo_jemore.png" alt="Logo"   width={80} height={80} className="justify-center item-start cursor-pointer" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-16">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-bold text-[var(--blu)] hover:text-[var(--giallo)] "
            >
              {link.text}
            </Link>
        ))}
    </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          
          <ButtonContattaci href="https://jemore.it/contattaci/" />
        </div>

        {/* Mobile Menu */}
        <HeaderMobile />
      </div>
    </header>
  </>
}

export default Header