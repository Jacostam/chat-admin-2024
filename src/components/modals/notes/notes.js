import { getNotesByUser } from "@/services/chat";
import { useChatStore } from "@/stores/chat";
import { Box, Button, Card, CircularProgress, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const Notes = ({ setOpen }) => {

    const { 
        advisor: { id }, 
    } = useChatStore()

    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getNotesByUser(id)
            .then(({data}) => {
                setNotes(data?.data)
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])

    return (
        <Grid container spacing={2} style={{maxWidth: 320}}>
            <Grid item xs={12}>
                <Typography variant="h4" >Notas</Typography>
            </Grid>

            <Grid item xs={12}>
                <Button
                    fullWidth
                    onClick={() => setOpen('new-note')}
                >
                    Agregar nota
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{maxHeight: '50vh', overflow: 'scroll', padding: '10px'}} >
                    <Grid container spacing={2}>
                        {
                            notes.length > 0 ?
                                notes?.map(item => (
                                    <Grid   key={item?.id} item xs={12}>
                                        <Card
                                            elevation={2}
                                            style={{padding: '10px 20px'}}
                                        >
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5" >
                                                        Asesor {item?.colaborator?.name}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography 
                                                        component={'a'} dangerouslySetInnerHTML={{__html: item?.note}} 
                                                    />
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography variant="h5" fontSize={'12px'} textAlign={'end'} >
                                                        {format(Date.parse(item?.createdAt), 'Y-MM-d hh:mm a')}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                ))
                                :
                                <Grid item xs={12} margin={'40px 0px'}>
                                    {
                                        loading ?
                                        <Box display={'flex'} justifyContent={'center'} >
                                                <CircularProgress size={40} />
                                            </Box>
                                        :
                                        <Typography variant="h5" textAlign={'center'}> No hay notas </Typography>
                                    }
                                </Grid>
                        }
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )

}

export default Notes