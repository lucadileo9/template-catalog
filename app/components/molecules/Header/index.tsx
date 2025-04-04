import React, { FC } from "react";
import HeaderProps from "./index.types"
import Link from "next/link";
import { Home, Info, Mail } from "lucide-react";

const Header: FC<HeaderProps> = ({ }) => {
  return <>
  <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Home
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="flex items-center gap-1 hover:text-gray-600">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="https://jemore.it/chisiamo/" className="flex items-center gap-1 hover:text-gray-600">
                  <Info className="h-4 w-4" />
                  <span>Chi siamo</span>
                </Link>
              </li>
              <li>
                <Link href="https://jemore.it/servizi-offerti/" className="flex items-center gap-1 hover:text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>Servizi</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  </>
}

export default Header