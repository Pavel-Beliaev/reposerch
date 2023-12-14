import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path='card/:login' element={<CardPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        ),
    );

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
