
import { ReactNode } from 'react';

import Header from "./header";
import Footer from './footer';

import { languages } from '../../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type Props = {
  children: ReactNode
  params: {
    lng: string
  }
};

export default async function LoginLayout({ children, params: { lng } }: Props) {

  return (
    <div className="h-screen flex flex-col">
      <Header params={{ lng }} />
      {children}
      <Footer params={{ lng }} />
    </div >
  );
}
