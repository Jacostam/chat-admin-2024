'use client'
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'

const Container = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
})

const LoginLayout = ({ children }) => {

    return (
        <Container>
            <Box margin={'0 auto'} >
                {children}
            </Box>
        </Container>
    )

}

export default  LoginLayout;