import './globals.css'

import { Roboto} from 'next/font/google';

import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import { NextIntlClientProvider } from 'next-intl';
import classNames from 'classnames';
import { notFound } from 'next/navigation';
import { Metadata } from 'next'

const roboto = Roboto({
  weight: ['400', '700','900'],
  subsets: ['latin'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: 'Camila | Portfólio',
  description: 'Com 2 anos de experiência em desenvolvimento Front End e pós-graduação em Análise e Desenvolvimento de Sistemas, com foco em ReactJS, NextJS e React Native.',
  openGraph: {
    title: 'Camila | Portfólio',
    images: '/images/ogimage.png',
    description: 'Com 2 anos de experiência em desenvolvimento Front End e pós-graduação em Análise e Desenvolvimento de Sistemas, com foco em ReactJS, NextJS e React Native.',
    type: 'website',
  }
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body className={classNames(roboto.variable)}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          
          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'pt'}];
}