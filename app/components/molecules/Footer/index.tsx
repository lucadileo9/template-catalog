import React, { FC } from "react";
import FooterProps from "./index.types"
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer: FC<FooterProps> = ({ }) => {
  
  const links1 = [
    { text: "Home", href: "/" },
    { text: "Contatti", href: "https://jemore.it/contattaci/" },
    { text: "Aree", href: "https://jemore.it/chisiamo/" },
    { text: "Candidati", href: "https://jemore.it/unisciti-a-noi/" },
    ];

  const link2 = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms & Conditions", href: "#" },
    { text: "Cookies", href: "#" },
    { text: "FAQ", href: "#" },
  ];
  
  return <>
  <footer className="bg-[#1e2b7c] text-[var(--bianco-latte)] md:py-8 md:px-32 px-8 sm:px-4">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20">
               <Link href="/">
                <Image
                  src="/bianco_verticale_scritta.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
               </Link>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
            <div className="space-y-1">
              {links1.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-xs text-[var(--bianco-latte)] hover:text-[var(--giallo)]"
                >
                  {link.text}
                </Link>
                ))}
            </div>
            <div className="space-y-1">
              {link2.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-xs text-[var(--bianco-latte)] hover:text-[var(--giallo)]"
                >
                  {link.text}
                </Link>
                ))}
            </div>

          {/* Right Logo */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white text-[#1e2b7c] p-2 rounded">
              <Link href="https://jeitaly.org/">
              <div className="text-2xl font-bold">JE</div>
              <div className="text-xs">Junior Enterprise</div>
              <div className="text-xs">Italy</div>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-8 border-[var(--bianco-latte)]" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-2">
          <div className="text-xs">©2024 Powered by Jemore</div>

          <div className="text-xs text-center">Contattaci, siamo sempre aperti a nuove proposte e collaborazioni.</div>

          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/jemore_consulting/" className="bg-[var(--bianco-latte)] p-2 rounded-full hover:bg-[var(--blu-scuro)] text-[var(--blu)] hover:text-[var(--bianco-latte)]">
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com/company/jemore/posts/?feedView=all" className="bg-[var(--bianco-latte)] p-2 rounded-full hover:bg-[var(--blu-scuro)] text-[var(--blu)] hover:text-[var(--bianco-latte)]">
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://jemore.it/contattaci/" className="bg-[var(--bianco-latte)] p-2 rounded-full hover:bg-[var(--blu-scuro)] text-[var(--blu)] hover:text-[var(--bianco-latte)]">
              <FaEnvelope />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>

     
    </footer>
</>
}

export default Footer