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
    <html lang="en">
      <body className={inter.className}>
        <header>
          {/* Header specifico del template */}
         Pippo il fesso
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer specifico del template */}
          <p>&copy; 2023 Pizzeria Template</p>
        </footer>
      </body>
    </html>
  );
}