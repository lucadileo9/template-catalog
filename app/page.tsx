import Link from 'next/link';
import { validTemplates } from 'config/templates';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import Hero from './components/organism/Hero';
import ButtonHome from './components/atoms/ButtonHome';
const templates = [
  { name: 'Pizzeria', slug: 'pizzeria' },
  { name: 'Estetista', slug: 'estetista' },
];

export default function HomePage() {
  return (    <>  
  <html lang="it">
    <body>
    <div className='relative flex flex-col min-h-screen'>
      <Header /> 
        <div className='flex-grow '>
        <Hero />  
        {/* <div className='bg-[var(--bianco-latte)]'>
        <div className="py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Chi Siamo</h2>
          <p className="text-lg text-gray-700">
            Siamo un team dedicato a fornire soluzioni innovative per aiutare le aziende a creare siti web professionali e accattivanti. 
            La nostra missione è rendere il processo di creazione del sito semplice e accessibile per tutti.
          </p>
        </div>
        </div> */}
        </div>
      <Footer />
    </div>
    </body>
  </html>
  </>
  );
}