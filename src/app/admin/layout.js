'use client'
import CustomAppBar from "@/components/appBar/CustomAppBar";
import CustomDrawer from "@/components/drawer/CustomDrawer";
import Loading from "@/components/loading/loading";
import { useLayout } from "@/hooks/useLayout";
import { Box } from "@mui/material";
import React from "react";

const drawerWidth = '270px';

const AdminLayout = ({children}) => {

    const { loading } = useLayout();

    return (
        <Box>
            <CustomDrawer drawerWidth={drawerWidth} />

            <CustomAppBar drawerWidth={drawerWidth} />

            <Box 
                sx={{
                    margin: '50px',
                    marginLeft: `calc(${drawerWidth} + 50px)`,
                }}
            >
                {
                    loading ?
                        <Loading />
                    :
                        <>
                            {children}
                        </>
                }
            </Box>

        </Box>
    )

}

export default AdminLayout