// templates/estetista-template/app/layout.tsx
import '@estetista/styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '@estetista/components/molecules/Header';
import Footer from '@estetista/components/molecules/Footer';
import { GlobalStyle } from '@estetista/styles/GlobalStyle';
const inter = Inter({ subsets: ['latin'] });




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="it">
       <GlobalStyle />
      <body className={inter.className}>
        <div className='relative flex flex-col min-h-screen bg-tertiary'>
        <Header />
        <main className=' flex-grow'>{children}</main>
        <Footer />
        </div>
      </body>
     </html>
    </>
  );
}
