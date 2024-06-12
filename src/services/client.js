const { default: axios } = require("axios");

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ADMIN_AUTH
})

export const axiosChatInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ADMIN_CHAT
})