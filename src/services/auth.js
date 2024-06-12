import { axiosInstance } from "./client";

export const loginService = (body) => {
    return axiosInstance.post('oauth/login/null', body);
}

export const getProfile = (oauthId) => {
    return axiosInstance.get(`colaborator/get-by-oauth/${oauthId}`);
}