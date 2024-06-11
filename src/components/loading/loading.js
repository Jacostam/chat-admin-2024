import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = ({ margin = '30px auto', color = 'primary', size = '40px' }) => {
    
    return (
        <Box width={'min-content'} margin={margin}>
            <CircularProgress color={color} style={{height: size, width: size}} />
        </Box>
    )
}

export default Loading