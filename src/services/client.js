const { default: axios } = require("axios");

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ADMIN_URL
})