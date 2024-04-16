"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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

import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import Link from 'next/link'

import { Button } from "@/components/ui/button"

import { useTranslation } from '../../../i18n/client'

interface LoginProps {
    params: {
        lng: string;
    };
}

const Partner: React.FC<LoginProps> = ({ params: { lng } }) => {
    const { t } = useTranslation(lng, "admins");
    return (
        <div className="flex-1 h-full flex-col" >
            <div className="flex flex-col justify-center" style={{ backgroundColor: 'white' }}>
                <div className="flex py-[22px] xl:px-8 sm:px-6 px-4 items-center justify-between h-[64px] border-b border-gray-300 hidden sm:flex">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin">{t('Admin')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/managers">{t('Managers')}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div >
            </div>
            <div className='xl:p-8 sm:p-6 p-4 flex-1 space-y-2' >
                <div className='flex justify-end w-full w-auto '>
                    <Button><Link href={"/admin/managers/create"}>{t('AddManager')}</Link></Button>
                </div>
                <Tabs defaultValue="week" className="w-full">
                    {/* <div className='flex justify-end'>
                        <TabsList className="grid w-full w-[340px] grid-cols-4">
                            <TabsTrigger value="week">{t('Week')}</TabsTrigger>
                            <TabsTrigger value="month">{t('Month')}</TabsTrigger>
                            <TabsTrigger value="year">{t('Year')}</TabsTrigger>
                            <TabsTrigger value="all">{t('All')}</TabsTrigger>
                        </TabsList>
                        <Button className='hidden sm:block'><Link href={"/admin/managers/create"}>{t('AddManager')}</Link></Button>
                    </div> */}

                    <TabsContent value="week">
                        <Card>
                            <CardHeader>
                                <CardTitle>{t('Manager')}</CardTitle>
                                <CardDescription style={{ color: "#020817" }}>
                                    {t("RecentManager")}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex justify-between">
                                    <Label className="w-[20%]" style={{ color: "#717175" }}>{t('Name')}</Label>
                                    <Label className="w-[15%] hidden md:block" style={{ color: "#717175" }}>{t('Email')}</Label>
                                    <Label className="hidden md:block w-[15%] text-right" style={{ color: "#717175" }}>{t('Telephone')}</Label>
                                    <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>{t('Venues')}</Label>
                                    <Label className="w-[30%] md:[w-20%] text-right" style={{ color: "#717175" }}>{t('Created')}</Label>
                                </div>
                                <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-2">
                                    <Label className="w-[20%]" >{t('Name')}</Label>
                                    <Label className="w-[15%] hidden md:block" >{t('Email')}</Label>
                                    <Label className="hidden md:block w-[15%] text-right" style={{ color: "#717175" }}>{t('Telephone')}</Label>
                                    <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}></Label>
                                    <Label className="w-[30%] md:w-[20%] text-right" style={{ color: '#717175' }}>01/04/2024</Label>
                                </div>
                                <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-2">
                                    <Label className="w-[20%]" >{t('Name')}</Label>
                                    <Label className="w-[15%] hidden md:block" >{t('Email')}</Label>
                                    <Label className="hidden md:block w-[15%] text-right" style={{ color: "#717175" }}>{t('Telephone')}</Label>
                                    <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}></Label>
                                    <Label className="w-[30%] md:w-[20%] text-right" style={{ color: '#717175' }}>01/04/2024</Label>
                                </div>
                                <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-2">
                                    <Label className="w-[20%]" >{t('Name')}</Label>
                                    <Label className="w-[15%] hidden md:block" >{t('Email')}</Label>
                                    <Label className="hidden md:block w-[15%] text-right" style={{ color: "#717175" }}>{t('Telephone')}</Label>
                                    <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}></Label>
                                    <Label className="w-[30%] md:w-[20%] text-right" style={{ color: '#717175' }}>01/04/2024</Label>
                                </div>
                                <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-2">
                                    <Label className="w-[20%]" >{t('Name')}</Label>
                                    <Label className="w-[15%] hidden md:block" >{t('Email')}</Label>
                                    <Label className="hidden md:block w-[15%] text-right" style={{ color: "#717175" }}>{t('Telephone')}</Label>
                                    <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}></Label>
                                    <Label className="w-[30%] md:w-[20%] text-right" style={{ color: '#717175' }}>01/04/2024</Label>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="month">
                    </TabsContent>
                    <TabsContent value="year">
                    </TabsContent>
                    <TabsContent value="all">
                    </TabsContent>
                </Tabs>
                <Pagination className='justify-start pt-3'>
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
            </div >
        </div >
    )
}

export default Partner