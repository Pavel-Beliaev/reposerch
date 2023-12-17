import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {CardPage, ErrorPage, MainPage} from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path: 'card/:login_repo',
                element: <CardPage/>
            },
        ],
    },
]);