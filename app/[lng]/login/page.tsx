"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslation } from '../../i18n/client'
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { AuthUserContext } from "@/provider/AuthProvider"
import { auth } from "@/lib/firebase-config"

import { signInWithEmailAndPassword } from "firebase/auth"

interface LoginProps {
  params: {
    lng: string;
  };
}

const Login: React.FC<LoginProps> = ({ params: { lng } }) => {

  const { t } = useTranslation(lng, "authentication");

  const authUser = AuthUserContext()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [error, setError] = useState(null)

  const handleLogin = () => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log(userCredential)
      })
  }

  return (
    <div className="flex justify-center items-start sm:items-center flex-1">
      <div className="flex w-full flex-col justify-center space-y-6 sm:w-[360px]">
        <Card className="border-0 sm:border shadow-none sm:shadow">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-2xl font-bold">
              {t('welcome')}
            </CardTitle>
            <CardDescription>
              {t('welcome_para')}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            {/* <LoginForm dict={dict} /> */}
            <div>
              <div className="flex flex-col mb-5">
                <Label htmlFor="email" className="pb-2">{t('email')}</Label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder={t('email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4 space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">{t('password')}</Label>
                  <Link
                    href="/reset_password"
                    className="hover:text-primary"
                  >
                    <Label htmlFor="terms" style={{ color: '#364DED' }} className="underline text-black">{t('forgot')}</Label>
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder={t('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <Button
                style={{ backgroundColor: '#364DED', color: 'white' }}
                className="flex w-full"
                onClick={() => handleLogin()}
              >{t('login')}</Button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <p className="px-8 text-center text-sm">
                {t('account')}{" "}
                <Link
                  href="/register"
                  className="underline underline-offset-4 hover:text-[#364DED]"
                >
                  {t('partner')}
                </Link>{" "}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  );
}


export default Login