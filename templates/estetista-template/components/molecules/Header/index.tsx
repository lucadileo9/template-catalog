// components/molecules/Estetista/index.tsx

import React from "react";
import EstetistaProps from "./index.types";
import Link from 'next/link';
import Image from "next/image";
import {templateConfig} from "@estetista/config";
import { Button } from '@global-ui/button';


const Header: React.FC<EstetistaProps> = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#D8CFC4] backdrop-blur supports-[backdrop-filter]:bg-[#D8CFC4]/60">
    <div className="container flex h-16 items-center justify-between">
      <Link href="/estetista/" className="flex items-center">
        <Image
          src="/estetista/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-10 w-auto rounded-full"
        />
      </Link>
      <nav className="flex gap-6">
      {templateConfig.menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="text-sm font-medium hover:underline"
            >
            {item.label}
            </Link>
            ))}
          </nav>
      </div>
    </header>
  );
};

export default Header;