"use client"

import { MenuIcon } from 'lucide-react';
import { useTranslation } from '../../i18n/client'

interface HeaderProps {
    params: {
        lng: string;
    };
}

const Header: React.FC<HeaderProps> = ({ params: { lng } }) => {
    const { t } = useTranslation(lng, "authentication");
    return (
        <header className="w-full  border-b border-gray-300 sm:hidden">
            <div className="h-16 mx-auto flex items-center justify-between px-4">
                <div className="h-12 w-40 bg-gray-200 rounded" style={{ backgroundColor: 'rgb(229 231 235)' }}>
                </div>
                <div className="sm:hidden">
                    <div className="rounded border-gray-300 border flex p-2">
                        <MenuIcon size='22' color="rgb(2, 8, 23)" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header