import Link from 'next/link';
import { validTemplates } from 'config/templates';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import Hero from './components/molecules/Hero';
const templates = [
  { name: 'Pizzeria', slug: 'pizzeria' },
  { name: 'Estetista', slug: 'estetista' },
];

export default function HomePage() {
  return (    <>  
    <div className='relative flex flex-col min-h-screen'>
      <Header /> 
        <div className='container mx-auto flex-grow'>
        <Hero />    
        </div>
      <Footer />
    </div>
  </>
  );
}