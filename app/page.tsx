import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import Hero from './components/organism/Hero';

export default function HomePage() {
  return (    <>  
  <html lang="it">
    <body>
    <div className='relative flex flex-col min-h-screen'>
      <Header /> 
        <div className='flex-grow '>
        <Hero />  
        </div>
      <Footer />
    </div>
    </body>
  </html>
  </>
  );
}