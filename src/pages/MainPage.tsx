import React, {useEffect, useState} from 'react';
import Title from "../components/Title/Title";
import ContentList from "../components/ContentList/ContentList";
import TotalCountElement from "../components/MainPageComponents/TotalCountElement/TotalCountElement";
import Loader from "../components/Loader/Loader";
import Tablet from "../components/MainPageComponents/Tablet/Tablet";
import {useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {fetchRepoSearch, selectRepo} from "../store/repoSlice";
import {useDebounce} from "../components/hooks/useDebounce";
import Pagination from "../components/MainPageComponents/Pagination/Pagination";
import Search from "../components/MainPageComponents/Search/Search";
import NotFound from "../components/MainPageComponents/NotFound/NotFound";

const MainPage = () => {
    const {page} = useSelector(selectRepo);
    const {status, repositories} = useSelector(selectRepo);
    const [query, setQuery] = useState('');

    const dispatch = useAppDispatch();
    const debouncedSearch = useDebounce(query, 800);

    useEffect(() => {
        if (debouncedSearch) {
            dispatch(
                fetchRepoSearch({
                    query: debouncedSearch,
                    page: String(page),
                }),
            );
        } else {
            dispatch(fetchRepoSearch({
                    query: 'all',
                    page: String(page),
                }),
            );
        }
    }, [debouncedSearch, page]);

    return (
        <div className='page'>
            <Title>
                Поиск репозиториев Github
            </Title>
            <Search value={query} setValue={setQuery}/>
            <ContentList>
                {status === 'loading'
                    ? <Loader/>
                    : repositories.length !== 0
                        ? <Tablet/>
                        : <NotFound/>
                }
            </ContentList>
            {repositories.length !== 0 && <TotalCountElement/>}
            {repositories.length !== 0 && <Pagination/>}
        </div>
    );
};

export default MainPage;