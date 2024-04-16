"use client"


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslation } from '../../i18n/client'
import { Label } from "@/components/ui/label"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

interface LoginProps {
  params: {
    lng: string;
  };
}

const Login: React.FC<LoginProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "authentication");

  return (
    <div className="w-full w-auto flex flex-1" style={{ backgroundColor: '#E8E8E8' }}>
      <div className="mx-auto max-w-screen-lg md:flex items-center justify-between md:px-4 px-0">
        <div className="flex-1">
          <h2 className="scroll-m-20 font-semibold pb-1 text-[24px] sm:text-[34px] first:mt-0 px-4 md:px-0 pt-5">
            {t("register_title")}
          </h2>
          <p className="leading-6 [&:not(:first-child)]:mt-2 pb-4 md:w-[60%] px-4 md:px-0">
            {t("register_para")}
          </p>
        </div>
        <div className="flex w-atuo w-full md:w-[360px] md:max-w-screen-sm flex-col bg-white md:border border-gray md:rounded-lg">
          <Card className="border-0 md:border shadow-none sm:shadow">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl font-bold">
                {t("join")}
              </CardTitle>
              <CardDescription>
                {t("join_para")}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {/* <LoginForm dict={dict} /> */}
              <div className="flex flex-col mb-5">
                <Label className="pb-2">{t("business")}</Label>
                <div className="relative">
                  <Input type="text" placeholder={t("join")} />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <Label className="pb-2">{t("business_venue")}</Label>
                <div className="relative">
                  <Input type="text" placeholder={t("business_venue")} />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <Label className="pb-2">{t("email")}</Label>
                <div className="relative">
                  <Input type="email" placeholder={t("email")} />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <Label className="pb-2">{t("contact")}</Label>
                <div className="relative">
                  <Input type="text" placeholder={t("contact")} />
                </div>
              </div>

              <Button style={{ backgroundColor: '#364DED', color: 'white' }} className="flex w-full">{t("submit")}</Button>
              <div className="flex justify-center items-center mt-4">
                <p className="px-8 text-center text-sm">
                  {t("already_acocunt")}{" "}
                  <Link
                    href="/login" style={{ color: '#364DED' }}
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    {t('login')}
                  </Link>{" "}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div >
    </div >
  );
}


export default Login