'use client'
import styled from "@emotion/styled";
import { Box, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";
import { IconChevronRight, IconCopy, IconEdit } from "../../../public/icons/custom";

const CutomPaper = styled(Paper)({
    padding: '10px 20px',
    borderRadius: '12px'
})

const ClientsCard = ({ handleCurrent }) => {
    return (
        <CutomPaper>
            <Grid container alignItems={'center'}>
                <Grid item xs={2.5}>
                    <Typography>Buenas</Typography>
                </Grid>
                
                <Grid item xs={4}>
                    <Tooltip title={'elisra0412@gmail.com'}>
                        <Typography noWrap >elisra0412@gmail.com</Typography>
                    </Tooltip>
                </Grid>

                <Grid item xs={2}>
                    <Typography noWrap >3107028274</Typography>
                </Grid>

                <Grid item xs={2}>
                    <Box display={'flex'} alignItems={'center'} gap={3} >
                        <Typography>0a8f4b36</Typography>
                        <IconButton>
                            <IconCopy size={14}/>
                        </IconButton>
                    </Box>
                </Grid>

                <Grid item xs={1.5}>
                    <Box display={'flex'} justifyContent={'space-between'} >
                        <IconButton onClick={() => handleCurrent(1)} >
                            <IconEdit />
                        </IconButton>
                        <IconButton>
                            <IconChevronRight />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </CutomPaper>
    )
}

export default ClientsCard
