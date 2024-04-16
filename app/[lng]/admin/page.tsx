"use client"


import { useTranslation } from '../../i18n/client'

interface LoginProps {
    params: {
        lng: string;
    };
}

const Admin: React.FC<LoginProps> = ({ params: { lng } }) => {
    const { t } = useTranslation(lng, "authentication");

    return (
        <>
        </>
    );
}

export default Admin