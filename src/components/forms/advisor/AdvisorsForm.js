import LoadingButton from "@/components/buttons/loadingButton/LoadingButton";
import ControllerAutocomplete from "@/components/inputs/controllerAutocomplete/ControllerAutocomplete";
import ControllerInput from "@/components/inputs/controllerInput/ControllerInput";
import { createAdvisor, updateAdvisor } from "@/services/advisors";
import { useAuthStore } from "@/stores/auth";
import { handleError } from "@/utils/utils";
import { Alert, Button, FormControlLabel, Grid, Snackbar, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const AdvisorsForm = ({setOpen, current, setReset, clients, currentClient}) => {

    const { user: { profile_id } } = useAuthStore()
    const {control, handleSubmit} = useForm({
        defaultValues: current
    });

    const [loading, setLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [error, setError] = useState()

    const onSubmit = (values) => {

        const client_uuid = profile_id == 3 ? values?.client?.uuid : currentClient?.uuid

        setLoading(true);
        const callBack = current ? updateAdvisor : createAdvisor;

        callBack(values, current?.id ?? client_uuid)
            .then(({data}) => {
                if (data?.status == 'success') {
                    setOpen()
                    setReset(prev => !prev)
                } else {
                    throw data;
                }
            })
            .catch((e) => {
                setError(handleError(e));
                setShowAlert(true);
            })
            .then(() => {
                setLoading(false)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Grid container spacing={2} >

                <Grid item xs={12}>
                    <Typography>{current ? 'Actualizar' : 'Nuevo'} asesor</Typography>
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

                <Grid item xs={6}>
                    <ControllerInput
                        control={control}
                        name={'phone'}
                        label="Telefono"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <ControllerInput
                        control={control}
                        name={'document'}
                        label="Documento"
                    />
                </Grid>
                
                {
                    !current && profile_id == 3 &&
                    <Grid item xs={12}>
                        <ControllerAutocomplete
                            control={control}
                            name={'client'}
                            label={'Cliente'}
                            options={clients}
                            value={currentClient}
                        />
                    </Grid>
                }

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

            {
                showAlert && error &&
                <Snackbar
                    anchorOrigin={{vertical:'bottom' , horizontal:'center'}} 
                    open={showAlert}
                    autoHideDuration={1500}
                    onClose={() => setShowAlert(false)}
                >
                    <Alert severity={'error'} >
                        {error}
                    </Alert>
                </Snackbar>
            }
        </form>
    )

}

export default AdvisorsForm