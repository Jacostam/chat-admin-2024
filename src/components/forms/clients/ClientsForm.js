import LoadingButton from "@/components/buttons/loadingButton/LoadingButton";
import ControllerInput from "@/components/inputs/controllerInput/ControllerInput";
import { createClient, updateClient } from "@/services/clients";
import { Button, FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const ClientsForm = ({ setOpen, current, setReset }) => {

    const { control, handleSubmit } = useForm({
        defaultValues: current
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (values) => {

        const callBack = current ? updateClient : createClient;
        setLoading(true)
        callBack(values, current?.id)
            .then(({data}) => {
                if (data?.status == 'success') {
                    setOpen()
                    setReset(prev => !prev)
                } else {
                    throw data;
                }
            })
            .catch(console.error)
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Typography>Nuevo Cliente</Typography>
                </Grid>

                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'name'}
                        label="Razon Social"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <ControllerInput
                        control={control}
                        name={'nit'}
                        label="Nit"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <ControllerInput
                        control={control}
                        name={'phone'}
                        label="Telefono"
                    />
                </Grid>

                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'email'}
                        label="Email"
                        disabled={current}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <ControllerInput
                        required={!current}
                        control={control}
                        name={'password'}
                        label="Password"
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <ControllerInput
                        required={!current}
                        control={control}
                        name={'password2'}
                        label="Validar Password"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="active"
                        render={({field}) => {

                            return (
                                <FormControlLabel
                                    {...field}
                                    control={<Switch />} 
                                    label={'Activo'} 
                                    checked={field.value}
                                />
                            )
                        }}
                    />
                </Grid>

                <Grid item xs={4}>
                    <Button 
                        variant="outlined" 
                        onClick={() => setOpen(false)}
                    >
                        Cancelar
                    </Button>
                </Grid>

                <Grid item xs={4} />

                <Grid item xs={4} >
                    <LoadingButton
                        fullWidth
                        type="submit"
                        loading={loading}
                    >
                        {
                            current ?
                                'Actualizar'
                            :
                                'Crear'
                        }
                    </LoadingButton>
                </Grid>
            </Grid>
        </form>
    )

}

export default ClientsForm