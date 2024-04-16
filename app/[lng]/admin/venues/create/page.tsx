
import { Button } from "@/components/ui/button"
import { useTranslation } from '../../../../i18n'
import { Label } from "@/components/ui/label"

import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

interface LoginProps {
    params: {
        lng: string;
    };
}

const Create: React.FC<LoginProps> = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng, "admins");

    return (
        <div className="flex-1">
            <div className="flex flex-col justify-center index-3" style={{ backgroundColor: 'white' }}>
                <div className="flex py-[22px] xl:p-8 md:p-6 p-4 items-center justify-between h-[64px] border-b border-gray-300 hidden md:flex">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin">{t("Admin")}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/venues">{t("Venues")}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/venues/create">{t("Create")}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div >
            <div className="flex-col xl:p-8 md:p-6 p-4 w-full w-auto">
                <div className="w-full flex justify-end pb-3 xl:w-[90%] space-x-2">
                    <Button variant={"outline"}>{t("Cancel")}</Button>
                    <Button>{t("SaveVenue")}</Button>
                </div>
                <div className="flex justify-center">
                    <div className="w-[100%] block md:flex xl:w-[80%] md:space-x-5 space-y-3 md:space-y-0">
                        <div className="w-[100%] md:w-[60%] md:space-y-3 ">
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal">{t("NameDescription")}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t("NameDescriptionContent")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>
                                        {t("Name")}
                                    </Label>
                                    <Input type="text" placeholder={t("English")} className="mt-1" />
                                    <Input type="text" placeholder={t("Georgian")} className="mt-1" />
                                    <Input type="text" placeholder={t("Russian")} className="mt-1 mb-3" />
                                    <Label className="w-[20%] md:text-right pt-2" style={{ color: "#717175" }}>{t("Description")}</Label>
                                    <Textarea placeholder={t("English")} className="mt-1" />
                                    <Textarea placeholder={t("Georgian")} className="mt-1" />
                                    <Textarea placeholder={t("Russian")} className="mt-1" />
                                </CardContent>
                            </Card>
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal"> {t("CityDistinct")}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t("CityContent")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t("City")}</Label>
                                    <Input type="text" placeholder={t("City")} className="mt-1 mb-3" />
                                    <Label className="w-[20%] md:text-right pt-2" style={{ color: "#717175" }}>{t("Distinct")}</Label>
                                    <Input type="text" placeholder={t("Distinct")} className="mt-1 mb-3" />
                                </CardContent>
                            </Card>
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal">{t("Category")}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t("CategoryContent")}
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
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal">{t("CoverImage")}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t("ConverImageContent")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="w-full h-[150px] rounded-md bg-gray-300" style={{ backgroundColor: 'rgb(229 231 235)' }}>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-[100%] md:w-[40%] space-y-3">
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal"> {t("Manager")}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t("ManagerContent")}
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
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal">{t("Price")}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t("PriceContent")}
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
                </div>
            </div>

        </div>
    );
}


export default Create