'use client'
import ChatFrame from "@/components/chat/ChatFrame";
import ListChats from "@/components/chat/ListChats";
import { Grid} from "@mui/material";
import React from "react";

const Chat = () => {

    return (
        <Grid container spacing={4}>
            <Grid item xs={4.5}>
                <ListChats />
            </Grid>

            <Grid item xs={7.5}>
                <ChatFrame />
            </Grid>
        </Grid>
    )

}

export default Chat