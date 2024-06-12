import { axiosChatInstance } from "./client";

export const getAdvisorsByClient = (companyId) => {
    return axiosChatInstance.get(`colaborator/get-by-company/${companyId}`);
}