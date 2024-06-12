import { getProfile, loginService } from "@/services/auth";
import { create } from "zustand";

export const loginStore = async (values) => {

    return loginService(values)
        .then(({ data }) => {
            if (data?.status == 'success') {

                localStorage.setItem('auth_id', data?.data?.id);

                return getProfileStore(data?.data?.id);
                
            } else {
                throw 'Correo y/o email incorrecto'
            }
        })
        .catch((e) => {
            console.error(e)
            throw 'Correo y/o email incorrecto'
        })
 
}

export const getProfileStore = async (oauthId) => {

    return getProfile(oauthId)
        .then(({data}) => {

            return data
        })
        .catch((e) => {
            console.error(e)
            throw 'Error al traer el perfil'
        })

}

export const useAuthStore = create((set, get) => ({

    user: {},
    oauth_id: null,

    setUser: (user) => {
        set(state => ({
            ...state,
            user: user
        }))
    },

    setOauthId: (oauth_id) => {
        set(state => ({
            ...state,
            oauth_id
        }))
    },

}))