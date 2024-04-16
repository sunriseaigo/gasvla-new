"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

import { useTranslation } from '../../../../i18n/client'
import Link from "next/link"

interface LoginProps {
    params: {
        lng: string;
    };
}

const CreatePartner: React.FC<LoginProps> = ({ params: { lng } }) => {
    const { t } = useTranslation(lng, "admins");
    return (
        <div className="flex-1 h-full" >
            <div className="flex flex-col justify-center" style={{ backgroundColor: 'white' }}>
                <div className="flex py-[22px] xl:p-8 md:p-6 p-4 items-center justify-between h-[64px] border-b border-gray-300 hidden sm:flex">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin">{t("Admins")}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/managers">{t("Managers")}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admins/managers/create">{t("Create")}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div >
            <div className='xl:p-8 md:p-6 p-4 space-y-3'>
                <div className='flex justify-end w-full w-auto space-x-2 lg:w-[360px] sm:w-[60%] sm:ml-[20%] lg:ml-0'>
                    <Button variant={'outline'}><Link href="/admin/managers">{t("Cancel")}</Link></Button>
                    <Button>{t("SaveVenue")}</Button>
                </div>
                <div className='lg:w-[360px] sm:w-[60%] sm:ml-[20%] lg:ml-0 space-y-3'>
                    <Card className="w-[100%] >" >
                        <CardHeader>
                            <CardTitle className="text-[24px] font-normal">{t("CreateManager")}</CardTitle>
                            <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                {t("CreateManagerContent")}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-1'>
                            <div className='space-y-1'>
                                <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t("Name")}</Label>
                                <Input type="text" placeholder={t("Name")} />
                            </div>
                            <div className='space-y-1'>
                                <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t("Email")}</Label>
                                <Input type="email" placeholder={t("Email")} />
                            </div>
                            <div className='space-y-1'>
                                <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t("Password")}</Label>
                                <Input type="password" placeholder={t("Password")} />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-[100%] >">
                        <CardHeader>
                            <CardTitle className="text-[24px] font-normal">{t("Venues")}</CardTitle>
                            <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                {t("PartnerVenues")}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={t("Select")} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default CreatePartner