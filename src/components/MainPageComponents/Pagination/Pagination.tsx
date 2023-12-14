import React from 'react';
import {useSelector} from "react-redux";
import {ReactComponent as Arrow} from "../../../assets/SVG/Shape.svg";
import {useAppDispatch} from "../../../store/store";
import {selectRepo, setPage} from "../../../store/repoSlice";
import {DOTS, usePagination} from "../../hooks/usePagination";

const Pagination = () => {
    const {totalCount} = useSelector(selectRepo);


    const {page} = useSelector(selectRepo);
    const dispatch = useAppDispatch();
    const totalPage = Math.ceil(totalCount > 1000 ? 1000 / 10 : totalCount / 10);
    const pagination = usePagination({
        totalPages: totalPage,
        page: page,
    });
    const changePage = (num: number) => {
        dispatch(setPage(num));
    };
    const prevPage = () => {
        dispatch(setPage(page - 1));
    };
    const nextPage = () => {
        dispatch(setPage(page + 1));
    };

    return (
        <div className='flex items-center justify-center gap-[5px]'>
            <Arrow onClick={() => prevPage()}
                   className={`btn-pagination-svg ${page === 1 ? 'pointer-events-none' : ''} cursor-pointer `}/>
            {pagination?.map((num, idx) => {
                if (num === DOTS) {
                    return <span key={idx} className='btn-pagination'>
                        {num}
                    </span>
                }
                return (
                    <button key={idx}
                            onClick={() => typeof num !== "string" && changePage(num)}
                            className={`btn-pagination ${num === page ? 'text-primary' : ''} ${num.toString().length > 3 ? '' : ''}`}>
                        {num}
                    </button>
                )
            })}
            <Arrow onClick={() => nextPage()}
                   className={`btn-pagination-svg ${page === totalPage ? 'pointer-events-none' : ''} cursor-pointer rotate-180`}/>
        </div>
    );
};

export default Pagination;