import { axiosChatInstance } from "./client";

export const getClients = () => {
    return axiosChatInstance.get(`company/all-companies`);
}