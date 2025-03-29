import { Header } from '../components/Header';
import { Footer } from '../components/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Benvenuti al Centro Estetico Bellezza</h1>
        <p className="text-lg">
          Scopri i nostri trattamenti di bellezza e prenota un appuntamento.
        </p>
      </main>
      <Footer />
    </>
  );
}