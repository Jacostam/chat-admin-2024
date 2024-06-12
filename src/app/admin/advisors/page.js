'use client'
import AdvisorCard from "@/components/cards/AdvisorCard";
import CustomAutocomplete from "@/components/inputs/customAutocomplete/CustomAutocomplete";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Advisors = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={9} >
                <Typography variant="h1" >Asesores</Typography>
            </Grid>

            <Grid item xs={3}>
                <CustomAutocomplete
                    label={'Cliente'}
                    options={[]}
                />
            </Grid>

            <Grid item xs={12}>
                <Box padding={'0px 20px'} >
                    <Grid container>
                        <Grid item xs={3}>
                            <Typography variant="caption" >Nombre</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="caption" >Correo</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="caption" >Telefono</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="caption" >Documento</Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Typography variant="caption" >Editar</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {
                [1,2,3,4,5,6].map((item) => (
                    <Grid item xs={12}>
                        <AdvisorCard />
                    </Grid>
                ))
            }

        </Grid>
    )

}

export default Advisors