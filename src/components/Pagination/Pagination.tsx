import React from 'react';
import {useSelector} from "react-redux";
import {selectRepo, setPage} from "../../store/repoSlice";
import {useAppDispatch} from "../../store/store";

const Pagination = () => {
    const {totalCount} = useSelector(selectRepo);
    const dispatch = useAppDispatch();
    const totalPage = totalCount/10;



    return (
        <div className='flex gap-[0.313rem]'>
            {[1,2,3].map((num) => (
                <button onClick={() => dispatch(setPage(num))}
                        className='btn-pagination'>
                    {num}
                </button>
            ))}
        </div>
    );
};

export default Pagination;