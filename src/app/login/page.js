'use client'
import styled from '@emotion/styled'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import ControllerInput from '@/components/inputs/controllerInput/ControllerInput'
import LoadingButton from '@/components/buttons/loadingButton/LoadingButton'
import Image from 'next/image'
// import { loginStore, useAuthStore } from '@/stores/auth'

const CustomPaper = styled(Paper)({
    borderRadius: '15px',
    padding: '30px',
    maxWidth: '420px',
})

const Login = () => {

    // const { setUser, setUserId } = useAuthStore();

    const { control, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const onSubmit = (values) => {

        setLoading(true)
        router.push('/admin/clients')

        // loginStore(values)
        //     .then(({data}) => {
        //         setUser(data)
        //         setUserId(data?.id)
                
        //         router.push('admin/home')
        //     })
        //     .catch((e) => {
        //         setErrorMessage(e);
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })

    }

    return (
        <>
            <CustomPaper elevation={1} >

                <form onSubmit={handleSubmit(onSubmit)} >
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <Box sx={{margin: 'auto', width: 'min-content'}} >
                                <Image src={'/images/logo.png'} width={150} height={150} />
                                <Typography variant='h2' textAlign={'center'} >
                                    Iniciar Sesión
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <ControllerInput
                                name={'email'}
                                control={control}
                                label='Email'
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <ControllerInput
                                name={'password'}
                                control={control}
                                label='Contaseña'
                            />
                            {
                                errorMessage &&
                                <Typography color={'error'}>
                                    {errorMessage}
                                </Typography>
                            }
                        </Grid>

                        <Grid item xs={12} />

                        <Grid item xs={12}>
                            <LoadingButton
                                fullWidth 
                                type='submit'
                                loading={loading}
                            >
                                Entrar
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </form>
            </CustomPaper>
        </>
    )

}

export default Login