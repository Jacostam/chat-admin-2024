import { axiosChatInstance } from "./client";

export const getChannelsByAdvisor = (id) => {
    return axiosChatInstance.get(`channels/${id}`);
}

export const endMeeting = (data) => {
    return axiosChatInstance.post(`messages/end`, data);
}