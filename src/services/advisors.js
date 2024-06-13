import { axiosChatInstance, axiosInstance } from "./client";

export const getAdvisorsByClient = (companyId) => {
    return axiosChatInstance.get(`colaborator/get-by-company/${companyId}`);
}

export const createAdvisor = (data, uuid) => {
    return axiosInstance.post(`oauth/${uuid}`, data);
}

export const updateAdvisor = (data, id) => {
    return axiosInstance.put(`colaborator/${id}`, data);
}