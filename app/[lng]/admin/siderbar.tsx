"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { LayoutDashboardIcon } from "lucide-react"
import { UsersIcon } from "lucide-react"
import { UserSquare } from "lucide-react"
import { Building2Icon } from "lucide-react"

import { useTranslation } from '../../i18n/client'

const items = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: <LayoutDashboardIcon />
    },
    {
        title: "Customers",
        href: "/admin/customers",
        icon: <UsersIcon />

    },
    {
        title: "Managers",
        href: "/admin/managers",
        icon: <UserSquare />
    },
    {
        title: "Venues",
        href: "/admin/venues",
        icon: <Building2Icon />
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
        <div className="sm:w-[64px] lg:w-[360px] border-r border-gray-300 hidden sm:block h-full h-auto h-screen">
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


