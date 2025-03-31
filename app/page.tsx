import Link from 'next/link';
import { validTemplates } from 'config/templates';
const templates = [
  { name: 'Pizzeria', slug: 'pizzeria' },
  { name: 'Estetista', slug: 'estetista' },
];

export default function HomePage() {
  return (    <>     
  <header> qualcosa </header> {/* Sostituisci con il tuo header */}
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Elenco Template</h1>
      <ul>
        {validTemplates.map((template) => (
          <li key={template} className="mb-2">
            <Link href={`/${template}`} className="text-blue-500 hover:underline">
            {template}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  <footer></footer> {/* Sostituisci con il tuo footer */}
            </>
  );
}