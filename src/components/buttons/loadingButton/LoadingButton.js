import Loading from '@/components/loading/loading'
import { Button } from '@mui/material'
import React from 'react'

const LoadingButton = ({
    style,
    type = 'button',
    disabled,
    children,
    onClick = () => {},
    loading,
    fullWidth
}) => {
    return (
        <>
            <Button
                fullWidth={fullWidth}
                style={style}
                type={type}
                disabled={disabled || loading}
                onClick={onClick}
            >
                {
                    loading ?
                        <Loading color={'secondary'} size='30px' />
                    :
                        <>
                            {children}
                        </>
                }
            </Button>
        </>
    )
}

export default LoadingButton