'use client'
import AdvisorCard from "@/components/cards/AdvisorCard";
import CustomAutocomplete from "@/components/inputs/customAutocomplete/CustomAutocomplete";
import Loading from "@/components/loading/loading";
import { getAdvisorsByClient } from "@/services/advisors";
import { getClients } from "@/services/clients";
import { Box, Grid, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Advisors = () => {

    const searchParams = useSearchParams()

    const [advisors, setAdvisors] = useState([])
    const [clients, setClients] = useState([])
    const [currentClient, setCurrentClient] = useState({})
    const [loading, setLoading] = useState(false)
    const [loadingAdvisors, setLoadingAdvisors] = useState(false)

    useEffect(() => {
        setLoading(true)
        getClients()
            .then(({data}) => {
                setClients(data?.data)

                if (searchParams.get('client_id')) {
                    setCurrentClient(data?.data?.find((item) => item?.id == searchParams.get('client_id')))
                } else {
                    setCurrentClient(data?.data?.at(0))
                }
            })
            .catch(console.error)
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setLoadingAdvisors(true)
        getAdvisorsByClient(currentClient?.id)
            .then(({data}) => {
                setAdvisors(data?.data ?? [])
            })
            .catch(console.error)
            .finally(() => {
                setLoadingAdvisors(false)
            })
    }, [currentClient])

    return (
        <Grid container spacing={2}>
            <Grid item xs={9} >
                <Typography variant="h1" >Asesores</Typography>
            </Grid>

            <Grid item xs={3}>
                {
                    <CustomAutocomplete
                        label={'Cliente'}
                        options={clients}
                        optionLabel="name"
                        defaultValue={currentClient}
                        value={currentClient}
                        onChange={setCurrentClient}
                        loading={loading}
                    />
                }
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
                loadingAdvisors ?
                    <Loading />
                :
                    <>
                        {
                            advisors?.map((item) => (
                                <Grid item xs={12} key={item}>
                                    <AdvisorCard item={item} />
                                </Grid>
                            ))
                        }
                    </>
            }

        </Grid>
    )

}

export default Advisors