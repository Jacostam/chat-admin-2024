'use client'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import theme from './theme/theme'

export default function Providers ({ children }) {

    return (
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider>
    )

}