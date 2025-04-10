// components/molecules/Hero/index.tsx

import React from "react";
import HeroProps from "./index.types";
import Link from "next/link";
import { Button } from "@global-ui/button";
import Image from "next/image";

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary " >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Benvenuto nel Centro JEstetico
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                Scopri un mondo di bellezza e relax. Il nostro team di professionisti è dedicato a valorizzare la tua bellezza naturale.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button variant="outline" className="px-8 bg-secondary text-primary">
                    I nostri servizi
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 text-primary">
                    Contattaci
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">

              <Image
                alt="Beauty Salon"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height={310}
                src="/estetista/images/homepage.png"
                width={550}
              />

              </div>
            </div>
          </div>
      </section>
  );
};

export default Hero;