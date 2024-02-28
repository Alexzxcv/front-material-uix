import {createBrowserRouter} from "react-router-dom";
import {DASHBOARD_ROUTE, DEVICE_ROUTE, MAIN_ROUTE, OTHER_ROUTE} from "../utils/consts";
import MainLayout from "../layout/MainLayout";
import Device from "../pages/Device";
import Dashboard from "../pages/Dashboard";


export const authRoute = createBrowserRouter([{
    path: MAIN_ROUTE,
    element: <MainLayout/>,
    children: [
        {
            path: DEVICE_ROUTE,
            element: <Device/>,
        },
        {
            path: DASHBOARD_ROUTE,
            element: <Dashboard/>,
        }]
},
    {
        path: OTHER_ROUTE,
        element: <MainLayout/>,
    },
])