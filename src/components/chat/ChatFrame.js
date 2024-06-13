import React from "react";
import { CustomChatPaper } from "./chat.style";
import { useChatStore } from "@/stores/chat";
import { Box, Typography } from "@mui/material";

const ChatFrame = () => {

    const { 
        advisor: { company, id }, 
        channel 
    } = useChatStore()

    return (
        <CustomChatPaper>
            {
                company?.uuid && channel?.user_email ?
                    <iframe 
                        style={{
                            width: '100%',
                            height: '100%',
                            boxShadow: 'none',
                            border: 'none'
                        }}
                        src={process.env.NEXT_PUBLIC_API_WEB_VIEW + "?uuid="+ company?.uuid + '&email=' + channel?.user_email + '&colaborator_id=' + id} 
                        loading="eager"
                    />
                :
                    <Box display={'flex'} justifyContent={'center'} height={'100%'} alignItems={'center'} >
                        <Typography 
                            color={'secundary'}
                            textAlign={'center'}
                        >
                            Ningun canal seleccionado
                        </Typography>
                    </Box>
            }
        </CustomChatPaper>
    )

}

export default ChatFrame