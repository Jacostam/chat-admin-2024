import { axiosChatInstance } from "./client";

export const getChannelsByAdvisor = (id) => {
    return axiosChatInstance.get(`channels/${id}`);
}