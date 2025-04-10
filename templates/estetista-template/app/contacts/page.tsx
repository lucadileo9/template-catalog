// templates/estetista-template/app/contacts/page.tsx

import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function ContactsPage() {
  return (
    <>
       <div className="bg-primary px-4 py-12">
      <div className="container mx-auto max-w-4xl space-y-8 bg-secondary p-8 rounded-lg shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary">Contattaci</h1>
          <p className="mt-4 text-lg text-gray-500">Saremmo felici di sentirti. Mettiti in contatto con noi.</p>
        </div>

        <div className="mx-auto max-w-2xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-primary">Informazioni di Contatto</h2>
            <p className="text-gray-600">Puoi raggiungerci utilizzando i seguenti dettagli di contatto.</p>
          </div>

          <div className="space-y-4 rounded-lg p-6 text-primary ">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-600" />
              <div>
                <h3 className="font-medium">Indirizzo</h3>
                <p className="text-sm text-gray-600">Via Ganaceto 44, Modena</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-gray-600" />
              <div>
                <h3 className="font-medium">Telefono</h3>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-gray-600">info@beautysalon.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-gray-600" />
              <div>
                <h3 className="font-medium">Orari</h3>
                <div className="text-sm text-gray-600">
                  <p>Lunedì - Venerdì: 9:00 - 20:00</p>
                  <p>Sabato: 9:00 - 18:00</p>
                  <p>Domenica: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.4876067729174!2d10.922029375691816!3d44.64838848750062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fef13dd158f3d%3A0x51258ed00ccc5826!2sVia%20Ganaceto%2C%2044%2C%2041121%20Modena%20MO!5e0!3m2!1sit!2sit!4v1743785002031!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}