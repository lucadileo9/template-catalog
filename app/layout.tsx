// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'Template Catalog',
  description: 'Un catalogo di template Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        {/* Pulsante per tornare al catalogo */}
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <a href="/" style={{ padding: '10px 20px', background: '#33FF57', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
            Torna al Catalogo
          </a>
        </div>
      </body>
    </html>
  );
}