'use client'
import { Box, Button, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IconAdd } from "../../../../public/icons/custom";
import ClientsCard from "@/components/cards/ClientsCard";
import ClientsForm from "@/components/forms/clients/ClientsForm";
import { getClients } from "@/services/clients";
import Loading from "@/components/loading/loading";

const Companies = () => {

    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(false)
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getClients()
            .then(({data}) => {
                setClients(data?.data)
            })
            .catch(console.error)
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const handleCurrent = (item) => {
        setCurrent(item)
        setOpen(true)
    }

    return (
        <Grid container spacing={2} >
            <Grid item xs={9.8}>
                <Typography variant="h1" >Clientes</Typography>
            </Grid>

            <Grid item xs={2.2}>
                <Button
                    fullWidth
                    endIcon={<IconAdd size={24} />} 
                    onClick={() => {
                        setOpen(true)
                    }}
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
                loading ?
                    <Loading/>
                :
                    <>
                        {
                            clients?.map((item) => (
                                <Grid item xs={12} key={item}>
                                    <ClientsCard handleCurrent={handleCurrent} item={item} />
                                </Grid>
                            ))
                        }
                    </>
            }


            <Dialog 
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                maxWidth={'xs'}
            >
                <DialogContent>
                    <ClientsForm setOpen={setOpen} current={current} />
                </DialogContent>
            </Dialog>

        </Grid>
    )

}

export default Companies