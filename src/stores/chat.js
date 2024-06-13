import { create } from "zustand"

export const useChatStore = create((set, get) => ({

    advisor: {},
    channel: {},

    setAdvisor: (advisor) => {
        set(state => ({
            ...state,
            advisor
        }))
    },
    
    setChannel: (channel) => {
        set(state => ({
            ...state,
            channel
        }))
    },


}))