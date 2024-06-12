import { axiosChatInstance, axiosInstance } from "./client";

export const getClients = () => {
    return axiosChatInstance.get(`company/all-companies`);
}

export const updateClient = (data, id) => {
    return axiosChatInstance.put(`company/update/${id}`, data);
}

export const createClient = (data) => {
    return axiosInstance.post(`company`, data);
}