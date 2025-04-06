// templates/estetista-template/app/about/page.tsx

import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className="px-4 py-12 bg-primary">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black" >
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-500">Learn about our salon and our commitment to beauty and wellness</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Image
              src="/estetista/images/about_us.png"
              alt="Our Salon"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black" >
              Our Story
            </h2>
            <p className="text-gray-600">
              Founded in 2010, Beauty Salon was born from a passion for beauty and a desire to create a space where
              clients could relax, rejuvenate, and enhance their natural beauty.
            </p>
            <p className="text-gray-600">
              Over the years, we have grown into a full-service beauty salon offering a wide range of treatments and
              services designed to meet the unique needs of each client.
            </p>
            <p className="text-gray-600">
              Our team of skilled professionals is dedicated to providing exceptional service and ensuring that every
              client leaves our salon feeling beautiful and confident.
            </p>
          </div>
        </div>

        <div className="space-y-4 p-6 rounded-lg text-black">
          <h2 className="text-2xl font-bold text-center text-black" >
            Our Mission
          </h2>
          <p className="text-gray-600 text-center">
            Our mission is to enhance the natural beauty of our clients through high-quality treatments and personalized
            service. We strive to create a welcoming environment where clients can relax and rejuvenate while receiving
            the highest standard of care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-black" >
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Quality",
                description:
                  "We use only the highest quality products and techniques to ensure the best results for our clients.",
              },
              {
                title: "Professionalism",
                description:
                  "Our team is composed of skilled professionals who are committed to providing exceptional service.",
              },
              {
                title: "Client Satisfaction",
                description:
                  "We prioritize the needs and preferences of our clients to ensure their complete satisfaction.",
              },
            ].map((value, index) => (
              <div key={index} className="rounded-lg  p-4 text-center bg-secondary" >
                <h3 className="text-xl font-bold mb-2 text-black" >
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}