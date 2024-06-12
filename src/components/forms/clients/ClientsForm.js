import ControllerInput from "@/components/inputs/controllerInput/ControllerInput";
import { Button, FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const ClientsForm = ({ setOpen, current }) => {

    const { control, handleSubmit } = useForm({
        defaultValues: current
    });

    const onSubmit = () => {

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
                        name={'razon'}
                        label="Razon Social"
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'email'}
                        label="Email"
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
                        name={'password'}
                        label="Password"
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <ControllerInput
                        control={control}
                        name={'password2'}
                        label="Validar Password"
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Switch />} 
                        label={'Activo'} 
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
                    <Button
                        fullWidth
                        type="submit"
                    >
                        Crear
                    </Button>
                </Grid>
            </Grid>
        </form>
    )

}

export default ClientsForm