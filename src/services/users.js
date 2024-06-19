import { axiosChatInstance } from "./client";

export const updateUser = (data, id) => {
    return axiosChatInstance.put(`user/${id}`, data);
}