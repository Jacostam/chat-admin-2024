import React, { useState } from "react";
import { CustomChatPaper } from "./chat.style";
import { useChatStore } from "@/stores/chat";
import { Box, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { IconChatMenu } from "../../../public/icons/custom";
import { endMeeting } from "@/services/chat";

const ChatFrame = () => {

    const { 
        advisor: { company, id }, 
        channel 
    } = useChatStore()

    const [ iconRef, setIconRef ] = useState(null)

    const finishMeeting = () => {
        const body = {
            id: 0,
            content: "Finalizado",
            type: 4,
            colaborator_id: id,
            user_id: id,
            channel_id: channel?.id,
            message_user_type: "colaborator",
            company_id: company?.id,
            message_status: "wait",
            created_at: new Date().toUTCString()
        }

        endMeeting(body)
            .then(({data}) => {
                console.log(data)
            })
            .catch(console.error)
    }

    return (
        <CustomChatPaper>
            {
                company?.uuid && channel?.user_email ?
                    <Box height={'100%'}>
                        <Box display={'flex'} justifyContent={'space-between'} padding={'20px 30px'} >
                            <Typography>{channel?.user_email}</Typography>

                            <IconButton 

                                onClick={(v) => setIconRef(v.currentTarget)} 
                            >
                                <IconChatMenu />
                            </IconButton>

                            <Menu
                                id='menu-chat'
                                anchorEl={iconRef}
                                open={iconRef}
                                onClick={() => setIconRef()}
                            >
                                <MenuItem >Editar Perfil</MenuItem>
                                <MenuItem onClick={finishMeeting} >Terminar</MenuItem>
                            </Menu>
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