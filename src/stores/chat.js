import { create } from "zustand"

export const useChatStore = create((set, get) => ({

    advisor: {},
    channel: {},
    reload: false,

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
    
    setReload: (reload) => {
        set(state => ({
            ...state,
            reload
        }))
    },


}))