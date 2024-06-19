import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ChatItem, ChatListContainer, ChatsContainer, CustomChatPaper } from "./chat.style";
import { Avatar, Box, Divider, Grid, TextField, Tooltip, Typography } from "@mui/material";
import { getChannelsByAdvisor } from "@/services/chat";
import { format } from 'date-fns';
import { useChatStore } from "@/stores/chat";
import Loading from "../loading/loading";
import useSocket from "@/hooks/useSocket";

const ListChats = () => {

    const { advisor: { id, company }, setChannel, channel, reload } = useChatStore()

    const [channels, setChannels] = useState([])
    const [loading, setLoading] = useState([])
    const [newMessage, setNewMessage] = useState()
    const [channelsToOpen, SetChannelsToOpen] = useState([]);

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
    }, [reload])

    const handleClick = (channel) => {
        setChannel(channel)
        SetChannelsToOpen(prev => prev?.filter(item => item != channel?.id))
    }

    const getDate = useCallback((date) => {
        return format(new Date(date), 'hh:mm a')
    }, [])
    
    const getContent = useCallback((messages) => {
        if (messages && messages?.length) {
            return messages?.at(0)?.content;
        }

        return null
    }, [])

    const getIsChannelToOpen = useCallback((id) => {
        return channelsToOpen?.includes(id)
    }, [channelsToOpen])

    //socket

    //listen new messages
    useEffect(() => {

        if (newMessage?.id && newMessage?.channel_id) {
            const currentChannel = channels.find((item) => item?.id == newMessage?.channel_id);
    
            if (currentChannel) {
                currentChannel.messages = [newMessage];
    
                setChannels(prev => [
                    currentChannel, 
                    ...prev?.filter(item => item?.id != currentChannel?.id)
                ])

                if (channel?.id != currentChannel?.id) {
                    channelsToOpen?.includes(currentChannel?.id)
                    SetChannelsToOpen(prev => [currentChannel?.id, ...prev]);
                }

            }
        }

    }, [newMessage])

    const onNewChannel = (channel) => {
        setChannels(prev => [channel, ...prev])
    }

    useSocket(`${id}${company?.id}`, onNewChannel, setNewMessage)

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
                                    onClick={() => handleClick(item)}
                                    selected={channel?.id == item?.id}
                                >
                                    <Tooltip title={content} >
                                        <Grid container alignItems={'center'} >
                                            <Grid item xs={9.5}>
                                                <Typography variant="supralabel" noWrap>
                                                    {item?.user_email}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={2.5}>
                                                <Typography variant="h5" textAlign={'end'}>
                                                    {getDate(item?.updatedAt)}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={11} >
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

                                            <Grid item xs={1}>
                                                {
                                                    getIsChannelToOpen(item?.id) &&
                                                    <Box sx={{
                                                        width: '8px',
                                                        height: '8px',
                                                        backgroundColor: '#20c997',
                                                        borderRadius: '100%',
                                                        marginLeft: 'auto'
                                                    }} />
                                                }
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