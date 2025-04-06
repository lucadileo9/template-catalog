// components/molecules/Estetista/index.tsx

import React from "react";
import  EstetistaProps from "./index.types";
import Link from 'next/link';

const Footer: React.FC<EstetistaProps> = () => {
  return ( 
    <footer className="w-full border-t py-6" style={{ backgroundColor: "#EAE0D5" }}>
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Beauty Salon. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
            Privacy
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
  
};

export default Footer;