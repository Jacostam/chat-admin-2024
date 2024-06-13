import styled from "@emotion/styled";
import { Box, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";
import { IconChevronRight, IconEdit } from "../../../public/icons/custom";
import { useRouter } from "next/navigation";
import { useChatStore } from "@/stores/chat";

const CutomPaper = styled(Paper)({
    padding: '10px 20px',
    borderRadius: '12px'
})

const AdvisorCard = ({item, handleCurrent}) => {
    
    const router = useRouter()

    const { setAdvisor } = useChatStore()

    const goToChats = () => {
        setAdvisor(item)
        router.push('/admin/chat')
    }

    return (
        <CutomPaper>
            <Grid container alignItems={'center'}>
                <Grid item xs={3}>
                    <Box>
                        <Typography>{item?.name}</Typography>
                        <Typography variant="h5" >{item?.company?.name}</Typography>
                    </Box>
                </Grid>
                
                <Grid item xs={3}>
                    <Tooltip title={item?.email}>
                        <Typography noWrap >{item?.email}</Typography>
                    </Tooltip>
                </Grid>

                <Grid item xs={2}>
                    <Typography noWrap >{item?.phone}</Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography>{item?.document}</Typography>
                </Grid>

                <Grid item xs={2}>
                    <Box display={'flex'} justifyContent={'space-between'} >
                        <IconButton onClick={() => handleCurrent(item)} >
                            <IconEdit />
                        </IconButton>
                        <IconButton onClick={goToChats} >
                            <IconChevronRight />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </CutomPaper>
    )

}

export default AdvisorCard