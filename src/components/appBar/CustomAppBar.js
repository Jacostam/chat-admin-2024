'use client'
import { useAuthStore } from "@/stores/auth";
import styled from "@emotion/styled";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const CustomBar = styled(AppBar)(({ drawerWidth }) => ({
    width: 'auto',
    marginLeft: drawerWidth,
    backgroundColor: 'white',
}))

const CustomAvatar = styled(Avatar)({
    height: '50px', 
    width: '50px', 
    backgroundColor: 'primary'
})

const CustomAppBar = ({ drawerWidth }) => {

    const { user } = useAuthStore();

    return (
        <CustomBar 
            position='sticky'
            drawerWidth={drawerWidth}
        >
            <Toolbar >
                <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <CustomAvatar/>
                        <Box>
                            <Typography variant='h3' >{user?.name ?? 'Admin'}</Typography>
                            <Typography variant='supralabel' >User Rol</Typography>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </CustomBar>
    )
}

export default CustomAppBar