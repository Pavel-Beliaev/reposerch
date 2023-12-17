import React from 'react';
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className='wrapper'>
            <Outlet/>
        </div>
    );
};

export default App;
