'use client'
import Loading from '@/components/loading/loading';
import { useLayout } from '@/hooks/useLayout';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
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

    const router = useRouter()

    const onSuccess = () => {
        router.push('/admin/clients');
    }

    const { loading } = useLayout(onSuccess);
    

    return (
        <Container>
            <Box margin={'0 auto'} >
                {
                    loading ?
                        <Loading />
                    :
                        <>
                            {children}
                        </>
                }
            </Box>
        </Container>
    )

}

export default  LoginLayout;