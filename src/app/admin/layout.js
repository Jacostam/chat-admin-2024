import CustomAppBar from "@/components/appBar/CustomAppBar";
import CustomDrawer from "@/components/drawer/CustomDrawer";
import { Box } from "@mui/material";
import React from "react";

const drawerWidth = '270px';


const AdminLayout = ({children}) => {

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
                {children}
            </Box>

        </Box>
    )

}

export default AdminLayout