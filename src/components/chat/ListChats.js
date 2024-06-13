import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ChatItem, ChatListContainer, ChatsContainer, CustomChatPaper } from "./chat.style";
import { Box, Divider, Grid, TextField, Tooltip, Typography } from "@mui/material";
import { getChannelsByAdvisor } from "@/services/chat";
import { format } from 'date-fns';
import { useChatStore } from "@/stores/chat";
import Loading from "../loading/loading";

const ListChats = () => {

    const { advisor: { id }, setChannel, channel } = useChatStore()

    const [channels, setChannels] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {
        setLoading(true)
        getChannelsByAdvisor(id)
            .then(({data}) => {
                setChannels(data?.data)
            })
            .catch(console.error)
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const getDate = useCallback((date) => {
        return format(new Date(date), 'hh:mm a')
    }, [])
    
    const getContent = useCallback((messages) => {
        if (messages && messages?.length) {
            return messages?.at(0)?.content;
        }

        return null
    }, [])

    return (
        <CustomChatPaper>
            <ChatsContainer> 
                <Box margin={'0px 30px'} >
                    <TextField
                        label='Search'
                        fullWidth
                    />
                </Box>

                <Divider style={{margin: '20px 30px 10px 30px'}} />
            
                <ChatListContainer>
                    {
                        loading &&
                            <Loading />
                    }

                    {
                        !loading &&
                        channels?.map((item) => {
                            const content = getContent(item?.messages);

                            return (
                                <ChatItem 
                                    key={`${item?.id}-${item?.colaborator_id}`}
                                    onClick={() => setChannel(item)}
                                    selected={channel?.id == item?.id}
                                >
                                    <Tooltip title={content} >
                                        <Grid container>
                                            <Grid item xs={9.5}>
                                                <Typography variant="supralabel" noWrap>
                                                    {item?.user_email}
                                                </Typography>

                                                <Typography 
                                                    variant="h5" 
                                                    style={{color:'#9299b8', marginTop: '2px'}} 
                                                    noWrap
                                                >
                                                    {
                                                        content &&
                                                        <>
                                                            {content}
                                                        </>
                                                    }
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={2.5}>
                                                <Typography variant="h5" textAlign={'end'}>
                                                    {getDate(item?.updatedAt)}
                                                </Typography>
                                            </Grid>
                                        </Grid> 
                                    </Tooltip>
                                </ChatItem>
                            )
                        })
                    }

                    {
                        !loading && channels.length == 0 &&
                            <Box display={'flex'} justifyContent={'center'} >

                                <Typography>No hay canales</Typography>

                            </Box>
                    }
                </ChatListContainer>
            </ChatsContainer>
        </CustomChatPaper>
    )

}

export default ListChats