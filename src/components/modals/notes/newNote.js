import { addNote } from "@/services/chat";
import { useChatStore } from "@/stores/chat";
import { Box, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const NewNote = ({ setOpen }) => {

    const { 
        advisor: { id }, 
        channel: { colaborator_id }
    } = useChatStore()

    const [note, setNote] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddNote = () => {
        if (!note) {
            setError(true)
            return;
        }

        const body = {
            "note": note,
            "user_id": id,
            "colaborator_id": colaborator_id
        }

        setLoading(true)
        addNote(body)
            .then(({data}) => {
                setOpen('notes')
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" >Nueva Nota</Typography>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    label='Nueva nota'
                    multiline
                    rows={4}
                    minRows={4}
                    fullWidth
                    error={error}
                    style={{
                        minWidth: '300px'
                    }}
                    InputProps={{
                        style:{
                            height: 'auto',
                        }
                    }}
                    onChange={(e) => {
                        setNote(e.target.value)
                        setError(false)
                    }}
                />
            </Grid>

            <Grid item xs={12}>
                <Box display={'flex'} justifyContent={'end'} gap={2}>
                    <Button 
                        onClick={() =>  setOpen('notes')}
                        color="secondary"
                    >
                        Cancelar
                    </Button>

                    <Button
                        onClick={handleAddNote}
                        disabled={loading}
                    >
                        {
                            loading ?
                                <CircularProgress size={30} color="secondary" />
                            :
                                <>Agregar</>
                        }
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )

}

export default NewNote