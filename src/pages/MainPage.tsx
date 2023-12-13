import React from 'react';
import Title from "../components/Title/Title";
import Search from "../components/Search/Search";
import ContentList from "../components/ContentList/ContentList";
import TotalPageElement from "../components/TotalPageElement/TotalPageElement";
import Pagination from "../components/Pagination/Pagination";
import Loader from "../components/Loader/Loader";
import Tablet from "../components/Tablet/Tablet";
import NotFound from "../components/NotFound/NotFound";

const MainPage = () => {
    return (
            <div className='flex flex-col  justify-center items-center'>
                <Title>
                    Поиск репозиториев Github
                </Title>
                <Search/>
                <ContentList>
                    {/*<Tablet/>*/}
                    {/*<Loader/>*/}
                    {/*<NotFound/>*/}
                </ContentList>
                <TotalPageElement/>
                <Pagination/>
            </div>
    );
};

export default MainPage;