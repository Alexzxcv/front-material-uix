import React, {useContext} from 'react';
import {RouterProvider} from "react-router-dom";
import {authRoute} from "./router/AuthRoute";
import {publicRoute} from "./router/PublicRoute";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {createTheme, StyledEngineProvider, ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = observer(() => {
    const {user} = useContext(Context)
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <RouterProvider router={user.isAuth ? authRoute : publicRoute}/>
        </ThemeProvider>
    );
});

export default App;