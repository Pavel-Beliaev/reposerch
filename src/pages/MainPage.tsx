import React, {useEffect, useRef, useState} from 'react';
import Title from "../components/Title/Title";
import ContentList from "../components/ContentList/ContentList";
import TotalCountElement from "../components/MainPageComponents/TotalCountElement/TotalCountElement";
import Loader from "../components/Loader/Loader";
import Tablet from "../components/MainPageComponents/Tablet/Tablet";
import {useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {fetchRepoSearch, selectRepo, setPage} from "../store/repoSlice";
import {useDebounce} from "../components/hooks/useDebounce";
import Pagination from "../components/MainPageComponents/Pagination/Pagination";
import Search from "../components/MainPageComponents/Search/Search";
import NotFound from "../components/MainPageComponents/NotFound/NotFound";
import {useSearchParams} from "react-router-dom";

const MainPage = () => {
    const {page} = useSelector(selectRepo);
    const {status, repositories} = useSelector(selectRepo);
    const dispatch = useAppDispatch();
    const [search, setSearch] = useSearchParams({search: ''});
    const searchValue = search.get('search')
    const debouncedSearch = useDebounce(searchValue!, 800);

    useEffect(() => {
        if (status === 'error') return;
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

    const setQueryHandler = (value: string) => {
        setSearch({search: value});
        dispatch(setPage(1));
    }

    return (
        <div className='page'>
            <Title>
                Поиск репозиториев Github
            </Title>
            <Search value={searchValue!} setValue={setQueryHandler}/>
            <ContentList>
                {status === 'loading'
                    ? <Loader/>
                    : repositories.length !== 0 && status !== 'error'
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