"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from 'react';

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { ActivityIcon } from 'lucide-react';
import { StarIcon } from 'lucide-react';
import { BarChartBigIcon } from 'lucide-react';

import { useTranslation } from '../../i18n/client'

const items = [
    {
        title: "Activity",
        href: "/partner",
        icon: <ActivityIcon />
    },
    {
        title: "Reviews",
        href: "/admin/customers",
        icon: <StarIcon />

    },
    {
        title: "Performance",
        href: "/admin/partners",
        icon: <BarChartBigIcon />
    },
]

type Props = {
    params: {
        lng: string;
    };
};

export const SidebarNav = ({ params: { lng } }: Props) => {
    const pathname = usePathname()
    const { t } = useTranslation(lng, "admins");

    return (
        <div className="md:w-[64px] lg:w-[360px] border-r border-gray-300 hidden md:block">
            <div className="h-16 mx-auto flex items-center justify-between px-4 hidden lg:flex">
                <div className="h-12 w-40 bg-gray-200 rounded" >
                </div>

            </div>
            <div className="px-4 hidden lg:block">
                <nav
                    className={cn(
                        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-3"
                    )}
                >
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                pathname.slice(3) === item.href
                                    ? "bg-[#E8E8E8] hover:bg-[#E8E8E8]"
                                    : "bg-transparent",
                                "justify-start mt-2"
                            )}
                        >
                            {item.icon}
                            <span className="pl-2">
                                {t(`${item.title}`)}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}


