import {createBrowserRouter} from "react-router-dom";
import {AUTH_ROUTE, OTHER_ROUTE} from "../utils/consts";
import Auth from "../pages/Auth";


export const publicRoute = createBrowserRouter([
    {
        path: AUTH_ROUTE,
        element: <Auth/>,
    },
    {
        path: OTHER_ROUTE,
        element: <Auth/>
    }
])