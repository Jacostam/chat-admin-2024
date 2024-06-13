'use client'
import styled from "@emotion/styled";
import { Box, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";
import { IconChevronRight, IconCopy, IconEdit } from "../../../public/icons/custom";
import { useRouter } from "next/navigation";

const CutomPaper = styled(Paper)({
    padding: '10px 20px',
    borderRadius: '12px'
})

const ClientsCard = ({ handleCurrent, item }) => {

    const router = useRouter();

    return (
        <CutomPaper>
            <Grid container alignItems={'center'}>
                <Grid item xs={2.5}>
                    <Typography>{item?.name}</Typography>
                </Grid>
                
                <Grid item xs={4}>
                    <Tooltip title={item?.email}>
                        <Typography noWrap >{item?.email}</Typography>
                    </Tooltip>
                </Grid>

                <Grid item xs={2}>
                    <Typography noWrap >{item?.phone}</Typography>
                </Grid>

                <Grid item xs={2}>
                    <Box display={'flex'} alignItems={'center'} gap={3} >
                        <Typography>{item?.uuid?.split('-')?.at(0)}</Typography>
                        <IconButton>
                            <IconCopy size={14}/>
                        </IconButton>
                    </Box>
                </Grid>

                <Grid item xs={1.5}>
                    <Box display={'flex'} justifyContent={'space-between'} >
                        <IconButton onClick={() => handleCurrent(item)} >
                            <IconEdit />
                        </IconButton>
                        <IconButton onClick={ () => router.push(`/admin/advisors?client_id=${item?.id}`)} >
                            <IconChevronRight />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </CutomPaper>
    )
}

export default ClientsCard
