import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { useAuthStore, getProfileStore } = require("@/stores/auth");

export const useLayout = (onSuccess = () => {}) => {

    const { user, setUser, setOauthId } = useAuthStore();
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        if (!user?.id) {
            setLoading(true);
            getProfileStore(localStorage.getItem('auth_id'))
                .then(({data}) => {
                    setUser(data)
                    setOauthId(data?.id)
                    onSuccess()
                })
                .catch(() => {
                    localStorage.removeItem('auth_id')

                    router.push('/login')
                })
                .finally(() => {
                    setLoading(false);
                })
        } else {
            setLoading(false);
        }
    }, [])

    return {
        loading
    }

}

