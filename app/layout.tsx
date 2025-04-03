// app/layout.tsx
import { Button } from '@global-ui/button';
import './globals.css';
import { LogOut } from 'lucide-react';
import Button2 from './components/button';
import HomeButton from './components/button';

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
        <HomeButton></HomeButton>
      </body>
    </html>
  );
}