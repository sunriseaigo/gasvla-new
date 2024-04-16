import { ReactNode } from 'react';
import Header from './header';
import { languages } from '../../i18n/settings';

import { ActivityIcon } from 'lucide-react';
import { StarIcon } from 'lucide-react';
import { BarChartBigIcon } from 'lucide-react';

import { SidebarNav } from './siderbar';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

type Props = {
    children: ReactNode;
    params: {
        lng: string;
    };
};

const sidebarNavItems = [
    {
        title: "Activity",
        href: "/admins",
        icon: <ActivityIcon />
    },
    {
        title: "Reviews",
        href: "/admins/customers",
        icon: <StarIcon />

    },
    {
        title: "Performance",
        href: "/admins/partners",
        icon: <BarChartBigIcon />
    },
]

export default function PartnerLayout({ children, params: { lng } }: Props) {
    return (
        <div className="h-screen flex flex-col">
            <Header params={{ lng }} />
            <div className="flex w-full w-auto h-full">
                <SidebarNav params={{ lng }} />
                {children}
            </div>
            {/* <Footer params={{ lng }} /> */}
        </div>
    );
}