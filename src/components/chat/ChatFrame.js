import React from "react";
import { CustomChatPaper } from "./chat.style";
import { useChatStore } from "@/stores/chat";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { IconChatMenu } from "../../../public/icons/custom";

const ChatFrame = () => {

    const { 
        advisor: { company, id }, 
        channel 
    } = useChatStore()

    return (
        <CustomChatPaper>
            {
                company?.uuid && channel?.user_email ?
                    <Box height={'100%'}>
                        <Box display={'flex'} justifyContent={'space-between'} padding={'20px 30px'} >
                            <Typography>{channel?.user_email}</Typography>

                            <IconButton>
                                <IconChatMenu />
                            </IconButton>
                        </Box>
                        <iframe 
                            style={{
                                width: '100%',
                                height: '89%',
                                boxShadow: 'none',
                                border: 'none',
                                borderBottomLeftRadius: '12px',
                                borderBottomRightRadius: '12px',
                            }}
                            src={process.env.NEXT_PUBLIC_API_WEB_VIEW + "?uuid="+ company?.uuid + '&email=' + channel?.user_email + '&colaborator_id=' + id} 
                            loading="eager"
                        />
                    </Box>
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