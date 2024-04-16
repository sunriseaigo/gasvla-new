
import { Button } from "@/components/ui/button"
import { useTranslation } from '../../../i18n'
import { Label } from "@/components/ui/label"
import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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

interface LoginProps {
    params: {
        lng: string;
    };
}

const Venues: React.FC<LoginProps> = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng, "admins");

    return (
        <div className="flex-1 h-screen" style={{ backgroundColor: '#FBFBFB' }}>
            <div className="flex flex-col justify-center" style={{ backgroundColor: 'white' }}>
                <div className="flex py-[22px] xl:px-8 md:px-6 px-4 items-center justify-between h-[64px] border-b border-gray-300 hidden md:flex">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin">{t('Admin')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/venues">{t('Venues')}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex xl:p-8 md:p-6 p-4 space-x-3" >
                    <div className="w-full flex-col" style={{ backgroundColor: "rgb(244,244,244/80%)" }}>
                        <div className="md:flex md:space-x-2 space-x-0 space-y-3 md:space-y-0">
                            <Card className="md:w-[30%] w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px]">{t('Venues')}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">{t('Venues_Description')}</CardDescription>
                                    {/* <CardDescription className="w-[80%]">{t('Venues_Description')}</CardDescription> */}

                                </CardHeader>
                                <CardContent>
                                    <Button><Link href={"/admin/venues/create"}>{t('Create_Venues')}</Link></Button>
                                </CardContent>
                            </Card>
                            <div className="flex justify-between w-full md:w-[70%]">
                                <Card className="w-[32%] h-auto">
                                    <CardHeader>
                                        <CardTitle className="text-[14px]" style={{ color: "#717175" }}>{t('Week')}</CardTitle>
                                        <CardDescription style={{ color: "black" }} className="text-[24px]">5</CardDescription>
                                        <CardDescription style={{ color: "#717175" }} className="text-[14px]">
                                            {t('Week_Content')}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card className="w-[32%] h-auto">
                                    <CardHeader>
                                        <CardTitle className="text-[14px]" style={{ color: "#717175" }}>{t('Month')}</CardTitle>
                                        <CardDescription style={{ color: "black" }} className="text-[24px]">5</CardDescription>
                                        <CardDescription style={{ color: "#717175" }} className="text-[14px]">{t('Month_Content')}</CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card className="w-[32%] h-auto">
                                    <CardHeader>
                                        <CardTitle className="text-[14px]" style={{ color: "#717175" }}>{t('Year')}</CardTitle>
                                        <CardDescription style={{ color: "black" }} className="text-[24px]">5</CardDescription>
                                        <CardDescription style={{ color: "#717175" }} className="text-[14px]">{t('Year_Content')}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>

                        </div>
                        <Tabs defaultValue="week" className="w-full pt-3">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="week">{t('Venues')}</TabsTrigger>
                                <TabsTrigger value="month">{t('Month')}</TabsTrigger>
                                <TabsTrigger value="year">{t('Year')}</TabsTrigger>
                                <TabsTrigger value="all">{t('All')}</TabsTrigger>
                            </TabsList>
                            <TabsContent value="week">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{t('Venues')}</CardTitle>
                                        <CardDescription style={{ color: "#020817" }}>
                                            {t("Recently")}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="flex justify-between">
                                            <div className="hidden md:block w-[144px] " >
                                            </div>
                                            <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t("Name")}</Label>
                                            <Label className="md:w-[20%] text-right" style={{ color: "#717175" }}>{t("Status")}</Label>
                                            <Label className="hidden md:block w-[20%] text-right" style={{ color: "#717175" }}>{t("Redemptions")}</Label>
                                            <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>{t("Created")}</Label>
                                        </div>
                                        <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-2">
                                            <div className="hidden md:block w-[144px] h-[72px] rounded-md bg-gray-300" style={{ backgroundColor: 'rgb(229 231 235)' }}>
                                            </div>
                                            <Label className="w-[20%] md:text-right" >{t("Name")}</Label>
                                            <Label className="w-[50%] md:w-[20%] text-right" style={{ color: '#717175' }}><span className="border rounded-full p-1 px-5 border-[#717175]">{t("Inactive")}</span></Label>
                                            <Label className="hidden md:block w-[20%] text-right" style={{ color: "#717175" }}>25</Label>
                                            <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>01/04/2024 16:25</Label>
                                        </div>
                                        <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-2">
                                            <div className="hidden md:block w-[144px] h-[72px] rounded-md bg-gray-300" style={{ backgroundColor: 'rgb(229 231 235)' }}>
                                            </div>
                                            <Label className="w-[20%] md:text-right" >{t("Name")}</Label>
                                            <Label className="w-[50%] md:w-[20%] text-right" style={{ color: '#717175' }}><span className="border rounded-full p-1 px-5 border-[#717175]">{t("Inactive")}</span></Label>
                                            <Label className="hidden md:block w-[20%] text-right" style={{ color: "#717175" }}>25</Label>
                                            <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>01/04/2024 16:25</Label>
                                        </div>
                                        <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-2">
                                            <div className="hidden md:block w-[144px] h-[72px] rounded-md bg-gray-300" style={{ backgroundColor: 'rgb(229 231 235)' }}>
                                            </div>
                                            <Label className="w-[20%] md:text-right" >{t("Name")}</Label>
                                            <Label className="w-[50%] md:w-[20%] text-right" style={{ color: '#717175' }}><span className="border rounded-full p-1 px-5 border-[#717175]">{t("Inactive")}</span></Label>
                                            <Label className="hidden md:block w-[20%] text-right" style={{ color: "#717175" }}>25</Label>
                                            <Label className="hidden md:block flex-1 text-right" style={{ color: "#717175" }}>01/04/2024 16:25</Label>
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
                    </div>
                    <div className="hidden xl:block w-[490px] space-x-2">
                        <Card className="w-full h-auto ">
                            <CardHeader className="border-b border-gray-300" style={{ backgroundColor: "#F9F9F9" }}>
                                <div className="flex justify-between">
                                    <CardTitle className="text-[24px] font-semibold">{t("VenueID")}:</CardTitle>
                                    <Button variant="outline"><Link href={"/admin/venues/update"}>{t("Edit")}</Link></Button>
                                </div>
                                <CardTitle className="text-[24px] font-semibold">jwZ4SLyVp7rDGIaUbaGJ</CardTitle>
                                <CardDescription style={{ color: "#717175" }} className="text-[14px]">{t("Created")}: 01/04/2024 16:25</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-1">
                                <div className="pb-5 pt-2 space-y-3">
                                    <h2 className="scroll-m-20 pb-1 text-lg tracking-tight first:mt-0">
                                        {t("ConverImage")}
                                    </h2>
                                    <div className="w-[100%] rounded h-[180px]" style={{ backgroundColor: 'rgb(229 231 235)' }} />
                                </div>
                                <div className="border-b border-gray-300">
                                    <h2 className="scroll-m-20 pb-2 text-md tracking-tight first:mt-0">
                                        {t("Name")}
                                    </h2>
                                    <p style={{ color: "#717175" }} className="text-[14px] pb-3">{t("Name")}</p>
                                </div>
                                <div className="border-b border-gray-300 pt-2">
                                    <h2 className="scroll-m-20 pb-2 text-md tracking-tight first:mt-0">
                                        {t('CityAndDistrict')}
                                    </h2>
                                    <div className="flex justify-between">
                                        <p style={{ color: "#717175" }} className="text-[14px] pb-3">{t("Name")}</p>
                                        <p style={{ color: "#717175" }} className="text-[14px] pb-3">{t("Name")}</p>
                                    </div>
                                </div>
                                <div className="border-b border-gray-300 pt-2">
                                    <h2 className="scroll-m-20 pb-2 text-md tracking-tight first:mt-0">
                                        {t("Performance")}
                                    </h2>
                                    <div className="flex justify-between">
                                        <p style={{ color: "#717175" }} className="text-[14px] pb-2">{t("Name")}</p>
                                        <p style={{ color: "#717175" }} className="text-[14px] pb-2">{t("Name")}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p style={{ color: "#717175" }} className="text-[14px] pb-2">{t("Name")}</p>
                                        <p style={{ color: "#717175" }} className="text-[14px] pb-2">{t("Name")}</p>
                                    </div>
                                </div>

                            </CardContent>
                            <CardFooter className="border-t border-gray-300">
                                <p style={{ color: "#717175" }} className="text-[14px] pt-5">{t("Updated")} : 01/04/2024 16:25</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div >
        </div >
    );
}


export default Venues