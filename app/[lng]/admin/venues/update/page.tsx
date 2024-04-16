
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
            <div className="flex flex-col justify-center" style={{ backgroundColor: 'white' }}>
                <div className="flex py-[22px] xl:p-8 md:p-6 p-4 items-center justify-between h-[64px] border-b border-gray-300 hidden md:flex">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin">{t('Admins')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/venues">{t('Venues')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/venues/update">{t('Update')}</BreadcrumbLink>
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
                <div className="w-full flex justify-end pb-3 space-x-2">
                    <Button variant={"outline"}>{t('Cancel')}</Button>
                    <Button>{t('SaveVenue')}</Button>
                </div>
                <div className="block justify-center xl:flex xl:space-x-3 xl:space-y-0 space-y-3">
                    <div className="w-[100%] block md:flex xl:w-[40%]  md:space-x-3 xl:space-x-0 space-y-3 md:space-y-0 xl:space-y-3  xl:block">
                        <div className="w-[100%] md:w-[60%] space-y-3 xl:w-[100%] space-y-2">
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal">{t('NameDescription')}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t('NameDescriptionContent')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t('Name')}</Label>
                                        <Input type="text" placeholder={t('English')} />
                                        <Input type="text" placeholder={t('Georgian')} />
                                        <Input type="text" placeholder={t('Russian')} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t('Description')}</Label>
                                        <Textarea placeholder={t('English')} />
                                        <Textarea placeholder={t('Georgian')} />
                                        <Textarea placeholder={t('Russian')} />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal">{t('CityDistinct')}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t('CityContent')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t('City')}</Label>
                                        <Input type="text" placeholder={t('City')} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="w-[20%] md:text-right pt-2" style={{ color: "#717175" }}>{t('Distinct')}</Label>
                                        <Input type="text" placeholder={t('Distinct')} />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal">{t('Category')}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t('CategoryContent')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder={t('Select')} />
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
                        <div className="w-[100%] md:w-[40%] xl:w-[100%] space-y-3">
                            <Card className="w-[100%]">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal">{t('CoverImage')}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t('ConverImageContent')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="w-full h-[150px] rounded-md bg-gray-300" style={{ backgroundColor: 'rgb(229 231 235)' }}>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="w-[100%] ">
                                <CardHeader>
                                    <CardTitle className="text-[24px] font-normal"> {t('Manager')}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t('ManagerContent')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder={t('Select')} />
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
                                    <CardTitle className="text-[24px] font-normal">  {t('Price')}</CardTitle>
                                    <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                        {t('PriceContent')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder={t('Select')} />
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
                    <div className="lg:block xl:w-[60%] space-y-3">
                        <Card className="w-[100%] ">
                            <CardHeader>
                                <CardTitle className="text-[24px] font-normal">  {t('CreateOffer')}</CardTitle>
                                <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                    {t('OfferContent')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex space-x-3">
                                    <div className="w-[50%] space-y-1">
                                        <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t('Name')}</Label>
                                        <Input type="text" placeholder={t('Egllish')} />
                                        <Input type="text" placeholder={t('Georgian')} />
                                        <Input type="text" placeholder={t('Russian')} />
                                    </div>
                                    <div className="w-[50%] space-y-1">
                                        <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t('Condition')}</Label>
                                        <Input type="text" placeholder={t('Egllish')} />
                                        <Input type="text" placeholder={t('Georgian')} />
                                        <Input type="text" placeholder={t('Russian')} />
                                    </div>
                                </div>
                                <div className="w-[50%] space-y-1">
                                    <Label className="w-[20%] md:text-right" style={{ color: "#717175" }}>{t('Estimate')}</Label>
                                    <Input type="text" placeholder="" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>
                                    {t('AddOffer')}
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="w-[100%]">
                            <CardHeader>
                                <CardTitle className="text-[24px] font-normal">{t('Offers')}</CardTitle>
                                <CardDescription style={{ color: "#020817" }} className="w-[100%]">
                                    {t('OffersContent')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between pb-2">
                                    <Label className="w-[20%] " style={{ color: "#717175" }}>{t('Name')}</Label>
                                    <Label className="hidden md:block w-[20%] md:w-[20%] text-right" style={{ color: "#717175" }}>{t('Condition')}</Label>
                                    <Label className="hidden md:block w-[30%] text-right" style={{ color: "#717175" }}>{t('Estimate')}</Label>
                                    <Label className="w-[40%] md:w-[30%] text-right" style={{ color: "#717175" }}>{t('Status')}</Label>
                                    <Label className="flex-1 text-right md:hidden" style={{ color: "#717175" }}>{t('Created')}</Label>
                                </div>
                                <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-3">
                                    <div className="flex flex-wrap w-[20%] md:w-[40%]">
                                        <Label className="w-[100%] md:w-[50%] pb-2" >{t('Name')}</Label>
                                        <Label className="w-[100%] md:w-[50%] md:text-right" style={{ color: "#717175" }} >{t('Condition')}</Label>
                                    </div>
                                    <Label className="hidden md:block w-[40%] md:w-[30%] text-right" style={{ color: '#717175' }}>{t('Estimate')}</Label>
                                    <Label className="w-[40%] md:w-[30%] text-right" style={{ color: '#717175' }}><span className="border rounded-full p-1 px-5 border-[#717175]">{t('Inactive')}</span></Label>
                                    <Label className="flex-1 text-right md:hidden" style={{ color: "#717175" }}>01/04/2024 16:25</Label>
                                </div>
                                <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-3">
                                    <div className="flex flex-wrap w-[20%] md:w-[40%]">
                                        <Label className="w-[100%] md:w-[50%] pb-2" >{t('Name')}</Label>
                                        <Label className="w-[100%] md:w-[50%] md:text-right" style={{ color: "#717175" }} >{t('Condition')}</Label>
                                    </div>
                                    <Label className="hidden md:block w-[40%] md:w-[30%] text-right" style={{ color: '#717175' }}>{t('Estimate')}</Label>
                                    <Label className="w-[40%] md:w-[30%] text-right" style={{ color: '#717175' }}><span className="border rounded-full p-1 px-5 border-[#717175]">{t('Inactive')}</span></Label>
                                    <Label className="flex-1 text-right md:hidden" style={{ color: "#717175" }}>01/04/2024 16:25</Label>
                                </div>
                                <div className="border-t border-gray-300 flex justify-between items-center pt-5 pb-3">
                                    <div className="flex flex-wrap w-[20%] md:w-[40%]">
                                        <Label className="w-[100%] md:w-[50%] pb-2" >{t('Name')}</Label>
                                        <Label className="w-[100%] md:w-[50%] md:text-right" style={{ color: "#717175" }} >{t('Condition')}</Label>
                                    </div>
                                    <Label className="hidden md:block w-[40%] md:w-[30%] text-right" style={{ color: '#717175' }}>{t('Estimate')}</Label>
                                    <Label className="w-[40%] md:w-[30%] text-right" style={{ color: '#717175' }}><span className="border rounded-full p-1 px-5 border-[#717175]">{t('Inactive')}</span></Label>
                                    <Label className="flex-1 text-right md:hidden" style={{ color: "#717175" }}>01/04/2024 16:25</Label>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Create