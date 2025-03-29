// templates/pizzeria-template/app/layout.tsx

import '../styles/globals.css'; // Importa i propri stili globali
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pizzeria Template',
  description: 'Un sito web per pizzerie',
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
    //   <body className={inter.className}>
        <main className={inter.className}>
          <header>
            {/* Header specifico del template */}
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/contacts">Contatti</a></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            {/* Footer specifico del template */}
            <p>&copy; 2023 Pizzeria Template</p>
          </footer>
        </main>
    //   </body>
    // </html>
  );
}