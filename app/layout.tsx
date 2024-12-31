import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';

import RegisterModal from './components/Modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/Modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const font = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Airbnb website',
  description: 'Airbnb clone project',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased ${font.className}`}
      >
        <ClientOnly>
          {/* <Modals actionLabel="Submit" title="Hello World" isOpen /> */}
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
