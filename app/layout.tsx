// app/layout.tsx
import ButtonHome from './components/atoms/ButtonHome';
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
        <>
        {children}
        <ButtonHome></ButtonHome>
        </>
);
}