import Link from 'next/link';
import { validTemplates } from 'config/templates';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import Hero from './components/molecules/Hero';
import ButtonHome from './components/atoms/ButtonHome';
const templates = [
  { name: 'Pizzeria', slug: 'pizzeria' },
  { name: 'Estetista', slug: 'estetista' },
];

export default function HomePage() {
  return (    <>  
  <html lang="it">
    <body>
    <div className='relative flex flex-col min-h-screen bg-[#222C7C]'>
      <Header /> 
        <div className='container mx-auto flex-grow  '>
        <Hero />    
        </div>
      <Footer />
    </div>
    </body>
  </html>
  </>
  );
}