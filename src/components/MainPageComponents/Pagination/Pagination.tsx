import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {ReactComponent as Arrow} from "../../../assets/SVG/Shape.svg";
import {ReactComponent as DubleArrow} from "../../../assets/SVG/Vector.svg";
import {useAppDispatch} from "../../../store/store";
import {selectRepo, setPage} from "../../../store/repoSlice";
import {DOTS, usePagination} from "../../hooks/usePagination";
import ArrowsButton from "./ArrowsButton/ArrowsButton";

const Pagination: FC  = () => {
    const {totalCount, page} = useSelector(selectRepo);
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
    const severalPrevPages = () => {
        dispatch(setPage(page - 9));
    };
    const nextPage = () => {
        dispatch(setPage(page + 1));
    };
    const severalNextPage = () => {
        dispatch(setPage(page + 9));
    };

    return (
        <div className='flex items-center justify-center gap-[5px]'>
            {totalPage > 10 &&
                <ArrowsButton onClick={severalPrevPages} page={page} left={9}>
                    <DubleArrow/>
                </ArrowsButton>
            }
            <ArrowsButton onClick={prevPage} page={page} left={1}>
                <Arrow/>
            </ArrowsButton>
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
            <ArrowsButton onClick={nextPage} page={page} right={totalPage} rotate={true}>
                <Arrow/>
            </ArrowsButton>
            {totalPage > 10 &&
                <ArrowsButton onClick={severalNextPage} page={page} right={totalPage - 8} rotate={true}>
                    <DubleArrow/>
                </ArrowsButton>
            }
        </div>
    );
};

export default Pagination;