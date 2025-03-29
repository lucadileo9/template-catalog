import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Titolo del sito',
  description: 'Questi sono i metadati del sito',
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
          {/* Sostituisci con il tuo header */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Sostituisci con il tuo footer */}
        </footer>
      </body>
    </html>
  );
}