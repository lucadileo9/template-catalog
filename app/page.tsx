import Link from 'next/link';

const templates = [
  { name: 'Pizzeria', slug: 'pizzeria' },
  { name: 'Estetista', slug: 'estetista' },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Elenco Template</h1>
      <ul>
        {templates.map((template) => (
          <li key={template.slug} className="mb-2">
            <Link href={`/${template.slug}`} className="text-blue-500 hover:underline">
            {template.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}