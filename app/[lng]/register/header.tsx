"use client"

import { MenuIcon } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useTranslation } from '../../i18n/client'
import Link from 'next/link';

interface HeaderProps {
    params: {
        lng: string;
    };
}

const Header: React.FC<HeaderProps> = ({ params: { lng } }) => {
    const { t } = useTranslation(lng, "authentication");
    return (
        <header className="w-full border-b border-gray-300">
            <div className="h-16 mx-auto max-w-screen-lg flex items-center justify-between px-4">
                <div className="h-12 w-40 bg-gray-200 rounded ">
                </div>
                <div className="hidden md:flex space-x-1">
                    {/* <Button variant="ghost">{t('login')}</Button> */}
                    <Button style={{ backgroundColor: '#364DED' }}> <Link href={"/login"}>{t('login')}</Link></Button>
                </div>
                <div className="md:hidden">
                    <div className="rounded border-gray-300 border flex p-2">
                        <MenuIcon size='22' color="rgb(2, 8, 23)" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header