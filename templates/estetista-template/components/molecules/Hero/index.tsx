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
                  Welcome to Beauty Salon
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Discover a world of beauty and relaxation. Our professional team is dedicated to enhancing your
                  natural beauty.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button variant="outline" className="px-8 bg-secondary text-primary">
                    Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 text-primary">
                    Contact Us
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