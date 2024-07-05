import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useChatStore = create(persist(
    (set, get) => ({

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
    
    }),
    {
        name: 'chat',
    }
))