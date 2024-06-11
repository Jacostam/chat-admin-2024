import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { IconAdd } from "../../../../public/icons/custom";
import ClientsCard from "@/components/cards/ClientsCard";

const Companies = () => {

    return (
        <Grid container spacing={2} >
            <Grid item xs={9.8}>
                <Typography variant="h1" >Clientes</Typography>
            </Grid>

            <Grid item xs={2.2}>
                <Button
                    fullWidth
                    endIcon={<IconAdd size={24} />} 
                >
                    Nuevo Cliente
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Box padding={'0px 20px'} >
                    <Grid container>
                        <Grid item xs={2.5}>
                            <Typography variant="caption" >Razon social</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="caption" >Correo</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="caption" >Telefono</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="caption" >Codigo</Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Typography variant="caption" >Editar</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {
                [1,2,3,4,5].map((item) => (
                    <Grid item xs={12} key={item}>
                        <ClientsCard />
                    </Grid>
                ))
            }

        </Grid>
    )

}

export default Companies