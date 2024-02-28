import React from 'react';
import {Outlet} from "react-router-dom";
import MiniDrawer from "./Sidebar/CustomSidebar";
import {Container} from "@mui/material";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

const MainContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    // ...(open && {
    //     // marginLeft: drawerWidth,
    //     // width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // }),
}));


const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <MiniDrawer/>
            <MainContainer sx={{ flexGrow: 1, p: 3 }}>


            <Outlet/>
            </MainContainer>
        </Box>
    );
};

export default MainLayout;