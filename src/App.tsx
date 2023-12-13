import React from 'react';
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import RepositoryPage from "./pages/RepositoryPage";

function App() {



    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <MainPage/>
            {/*<RepositoryPage/>*/}
            {/*<ErrorPage/>*/}
        </div>
    );
}

export default App;
