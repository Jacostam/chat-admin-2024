import ControllerInput from "@/components/inputs/controllerInput/ControllerInput";
import { updateUser } from "@/services/users";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ user, setOpen, onUpdateUser = () => {} }) => {

    const { control, handleSubmit } = useForm({defaultValues: user});

    const [loading, setLoading] = useState(false)

    const onSubmit = (values) => {
        setLoading(true);
        updateUser(values, user?.id)
            .then(({data}) => {
                if (data?.status == 'success') {
                    onUpdateUser(values)
                }
            })
            .catch(console.error)
            .finally(() => {
                setLoading(false);
                setOpen(false)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Typography variant="h4" >Actualizar usuario</Typography>
                </Grid>

                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'email'} 
                        label="Email"
                        disabled
                    />
                </Grid>

                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'name'} 
                        label="Nombre"
                    />
                </Grid>

                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'last_name'} 
                        label="Apellido"
                    />
                </Grid>

                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'phone'} 
                        label="Telefono"
                    />
                </Grid>

                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'description'} 
                        label="Descripcion"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Box display={'flex'} justifyContent={'end'} >
                        <Button
                            variant="contained"
                            disabled={loading}
                            type="submit"
                        >
                            {
                                loading ? 
                                    <CircularProgress size={30} color="secondary" />
                                :
                                    "Guardar"
                            }
                            
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    )

}

export default UserForm