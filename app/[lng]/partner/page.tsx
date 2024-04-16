"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from '../../i18n/client'
import { Label } from "@/components/ui/label"
import Link from "next/link"

import { Input } from "@/components/ui/input"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { Car, EuroIcon } from "lucide-react"

interface LoginProps {
    params: {
        lng: string;
    };
}

const Partner: React.FC<LoginProps> = ({ params: { lng } }) => {
    const { t } = useTranslation(lng, "admins");

    return (
        <div className="flex-1">
            <div className="flex flex-col justify-center">
                <div className="flex py-[22px] px-5 items-center justify-end h-[64px] border-b border-gray-300 hidden sm:flex">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="p-4 sm:p-6 lg:p-6 sm:flex sm:space-x-2 space-y-2 sm:space-y-0">
                <div className="space-y-2  sm:w-[360px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                {t("Validate")}
                            </CardTitle>
                            <CardDescription className="text-[14px]">
                                {t("ValidateContent")}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <InputOTP maxLength={4}>
                                <InputOTPGroup className="space-x-2">
                                    <InputOTPSlot className="w-[64px] h-[80px] rounded border border-black" index={0} />
                                    <InputOTPSlot className="w-[64px] h-[80px] rounded border border-black" index={1} />
                                    <InputOTPSlot className="w-[64px] h-[80px] rounded border border-black" index={2} />
                                    <InputOTPSlot className="w-[64px] h-[80px] rounded border border-black" index={3} />
                                </InputOTPGroup>
                            </InputOTP>
                            <div className="flex justify-between rounded border border-black p-2">
                                <div className="px-2">
                                    <p className="text-[14px]">{t("Validate1")}</p>
                                    <p className="text-[14px]">{t("Validate2")}</p>

                                </div>
                                <Button>{t("Validate")}</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="sm:flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="md:text-[34px] md:font-normal">{t("Redemptions")}</CardTitle>
                            <CardDescription style={{ color: "#020817" }}>
                                {t("RedemptionsContent")}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex justify-between">
                                <Label className="w-[50%]" style={{ color: "#717175" }}>{t("Offer")}</Label>
                                <Label className="md:w-[35%]" style={{ color: "#717175" }}>{t("CustomerSave")}</Label>
                                <Label className="hidden md:block flex-1 text-right"></Label>
                            </div>
                            <div className="border-t border-gray-300 flex justify-between items-center pt-3 pb-2">
                                <div className="w-[50%] space-y-2">
                                    <Label className="block" >{t("Offer1")}</Label>
                                    <Label className="block" >{t("Offer2")}</Label>
                                </div>
                                <Label className="w-[25%] md:w-[35%] flex relative" style={{ color: '#717175' }}>
                                    <EuroIcon className="absolute left-2.5 top-3 h-4 w-4 text-[black]"></EuroIcon>
                                    <Input className="w-[100%] md:w-[90%] pl-7" type="text"></Input>
                                </Label>
                                <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>
                                    <Button variant={'outline'}>{t("Save")}</Button>
                                </Label>
                            </div>
                            <div className="border-t border-gray-300 flex justify-between items-center pt-3 pb-2">
                                <div className="w-[50%] space-y-2">
                                    <Label className="block" >{t("Offer1")}</Label>
                                    <Label className="block" >{t("Offer2")}</Label>
                                </div>
                                <Label className="w-[25%] md:w-[35%] flex relative" style={{ color: '#717175' }}>
                                    <EuroIcon className="absolute left-2.5 top-3 h-4 w-4 text-[black]"></EuroIcon>
                                    <Input className="w-[100%] md:w-[90%] pl-7" type="text"></Input>
                                </Label>
                                <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>
                                    <Button variant={'outline'}>{t("Save")}</Button>
                                </Label>
                            </div>
                            <div className="border-t border-gray-300 flex justify-between items-center pt-3 pb-2">
                                <div className="w-[50%] space-y-2">
                                    <Label className="block" >{t("Offer1")}</Label>
                                    <Label className="block" >{t("Offer2")}</Label>
                                </div>
                                <Label className="w-[25%] md:w-[35%] flex relative" style={{ color: '#717175' }}>
                                    <EuroIcon className="absolute left-2.5 top-3 h-4 w-4 text-[black]"></EuroIcon>
                                    <Input className="w-[100%] md:w-[90%] pl-7" type="text"></Input>
                                </Label>
                                <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>
                                    <Button variant={'outline'}>{t("Save")}</Button>
                                </Label>
                            </div>
                            <div className="border-t border-gray-300 flex justify-between items-center pt-3 pb-2">
                                <div className="w-[50%] space-y-2">
                                    <Label className="block" >{t("Offer1")}</Label>
                                    <Label className="block" >{t("Offer2")}</Label>
                                </div>
                                <Label className="w-[25%] md:w-[35%] flex relative" style={{ color: '#717175' }}>
                                    <EuroIcon className="absolute left-2.5 top-3 h-4 w-4 text-[black]"></EuroIcon>
                                    <Input className="w-[100%] md:w-[90%] pl-7" type="text"></Input>
                                </Label>
                                <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>
                                    <Button variant={'outline'}>{t("Save")}</Button>
                                </Label>
                            </div>
                        </CardContent>
                    </Card>
                    <Pagination className='justify-start pt-3 hidden xl:block'>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    );
}


export default Partner