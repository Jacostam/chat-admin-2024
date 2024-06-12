import styled from "@emotion/styled";
import { Box, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";
import { IconChevronRight, IconEdit } from "../../../public/icons/custom";

const CutomPaper = styled(Paper)({
    padding: '10px 20px',
    borderRadius: '12px'
})

const AdvisorCard = () => {
    
    return (
        <CutomPaper>
            <Grid container alignItems={'center'}>
                <Grid item xs={3}>
                    <Typography>Steveen</Typography>
                </Grid>
                
                <Grid item xs={3}>
                    <Tooltip title={'elisra0412@gmail.com'}>
                        <Typography noWrap >elisra0412@gmail.com</Typography>
                    </Tooltip>
                </Grid>

                <Grid item xs={2}>
                    <Typography noWrap >3107028274</Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography>3107028274</Typography>
                </Grid>

                <Grid item xs={2}>
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

export default AdvisorCard