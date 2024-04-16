
import { ReactNode } from 'react';
import Header from './header';
import { languages } from '../../i18n/settings';

import { SidebarNav } from './siderbar';
import { ScrollArea } from "@/components/ui/scroll-area"

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

type Props = {
    children: ReactNode;
    params: {
        lng: string;
    };
};

export default function AdminLayout({ children, params: { lng } }: Props) {
    return (
        <div className="h-screen flex flex-col">
            <Header params={{ lng }} />
            <div className="flex w-full w-auto h-full">
                <SidebarNav params={{ lng }} />
                <ScrollArea className='flex-1'>
                    {children}
                </ScrollArea>
            </div>
            {/* <Footer params={{ lng }} /> */}
        </div>
    );
}