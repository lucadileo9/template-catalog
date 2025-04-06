// templates/estetista-template/app/layout.tsx

import '@estetista/styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '@estetista/components/molecules/Header';
import Footer from '@estetista/components/molecules/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Estetista Template',
  description: 'Un sito web per Estetista',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      // Quando questo template viene usato al di fuori del catalogo, aggiungi <html> e <body> qui
      // Esempio:
      // <html lang="en">
      // <body className={inter.className}>
        <div className='relative flex flex-col min-h-screen'>
        <Header />
        <main className=' flex-grow'>{children}</main>
        <Footer />
        </div>
    //  </body>
    // </html>
  );
}