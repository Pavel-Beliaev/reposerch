import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <Outlet/>
        </div>
    );
};

export default MainLayout;