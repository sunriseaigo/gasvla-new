"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MenuIcon } from 'lucide-react';
import Link from "next/link";

import { useTranslation } from '../../i18n/client'

interface LoginProps {
  params: {
    lng: string;
  };
}

const Login: React.FC<LoginProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "authentication");

  return (
    <>
      <header className="w-full  border-b border-gray-300">
        <div className="h-16 mx-auto max-w-screen-lg flex items-center justify-between px-4">
          <div className="h-12 w-40 bg-gray-200 rounded" >

          </div>
          <div className="hidden md:flex space-x-1">
            <Button variant="ghost"><Link href={`/${lng}/login`}>{t('login')}</Link></Button>
            <Button style={{ backgroundColor: '#364DED' }}><Link href={`/${lng}/register`}>{t('partner')}</Link></Button>
          </div>
          <div className="md:hidden">
            <div className="rounded border-gray-300 border flex p-2">
              <MenuIcon size='22' color="rgb(2, 8, 23)" />
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-screen-lg flex md:items-center md:justify-between px-4 py-100 flex-1">
        <div className="flex-col md:space-y-5 sm:space-y-0">
          <h1 className="text-4xl md:text-6xl lg:text-6xl xl:font-bold md:text-center max-w-screen-sm md:px-10 p-2 pb-0">
            {t("title")}
          </h1>
          <p className="leading-7 max-w-screen-sm md:px-10 md:text-center md:text-lg text-sm p-2 md:p-1 ">
            {t('description')}
          </p>
          <div className="md:px-12 md:flex md:space-x-5 md:mx-12 px-2 md:space-y-0 space-y-2">
            <Input type='email' placeholder={t('email')} />
            <Button style={{ backgroundColor: '#364DED' }}>{t('notify')}</Button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login