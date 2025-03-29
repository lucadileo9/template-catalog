import { Header } from '../../components/Header';
import { Footer } from '../../components/footer';

const menuItems = ['Pizza Margherita', 'Pizza Pepperoni', 'Pizza Vegetariana'];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Il nostro Menu</h1>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}