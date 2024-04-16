'use client'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

import { useTranslation } from '../../i18n/client'

interface HeaderProps {
    params: {
        lng: string
    }
}

const Footer: React.FC<HeaderProps> = ({ params: { lng } }) => {

    const pathname = usePathname()
    const router = useRouter()
    const { t } = useTranslation(lng, "authentication");

    const getSelect = () => {
        const _lang = pathname.slice(1, 3)
        if (_lang == "en") return "EN"
        if (_lang == "ka") return "KA"
        if (_lang == "ru") return "RU"
    }

    const handleChange = (l: string) => {
        router.push(`/${l}/${pathname.slice(4)}`)
    }

    return (
        <header className="w-full border-gray-300">
            <div className="h-[64px] mx-auto flex xl:px-8 px-4 items-center space-x-1">
                <Avatar className="h-7 w-7">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Select onValueChange={(value) => handleChange(value)}>
                    <SelectTrigger className="w-[60px] rounded-full border-none focus:ring-0 focus:ring-none">
                        <SelectValue placeholder={getSelect()} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en" >EN</SelectItem>
                        <SelectItem value="ru">RU</SelectItem>
                        <SelectItem value="ka">KA</SelectItem>
                    </SelectContent>
                </Select>
                <small className="text-sm text-muted-foreground pl-3">{t('privacy')}</small>
                <small className="text-sm text-muted-foreground pl-3">{t('terms')}</small>
            </div>
        </header >
    );
}

export default Footer