import { axiosChatInstance } from "./client";

export const getChannelsByAdvisor = (id) => {
    return axiosChatInstance.get(`channels/${id}`);
}

export const endMeeting = (data) => {
    return axiosChatInstance.post(`messages/end`, data);
}

export const getNotesByUser = (user_id) => {
    return axiosChatInstance.get(`notes/${user_id}`);
}

export const addNote = (body) => {
    return axiosChatInstance.post(`notes`, body);
}