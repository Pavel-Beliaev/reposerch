import React, {useEffect, useState} from 'react';
import Title from "../components/Title/Title";
import Search from "../components/Search/Search";
import ContentList from "../components/ContentList/ContentList";
import TotalCountElement from "../components/TotalCountElement/TotalCountElement";
import Pagination from "../components/Pagination/Pagination";
import Loader from "../components/Loader/Loader";
import Tablet from "../components/Tablet/Tablet";
import NotFound from "../components/NotFound/NotFound";
import {useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {fetchRepoSearch, selectRepo} from "../store/repoSlice";
import {useDebounce} from "../components/hooks/useDebounce";

const MainPage = () => {
    const {page} = useSelector(selectRepo);

    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState();

    const dispatch = useAppDispatch();
    const debouncedSearch = useDebounce(query, 500);

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
                    page: String(page)
                }),
            );
        }
    }, [debouncedSearch, page])

    // owner:
    return (
        <div className='flex flex-col  justify-center items-center'>
            <Title>
                Поиск репозиториев Github
            </Title>
            <Search value={query} setValue={setQuery}/>
            <ContentList>
                <Tablet/>
                {/*<Loader/>*/}
                {/*<NotFound/>*/}
            </ContentList>
            <TotalCountElement/>
            <Pagination />
        </div>
    );
};

export default MainPage;