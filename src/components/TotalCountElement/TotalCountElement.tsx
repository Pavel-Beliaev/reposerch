import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {selectRepo} from "../../store/repoSlice";

const TotalCountElement: FC = () => {
    const {totalCount} = useSelector(selectRepo);

    return (
        <p className='font-bold self-end my-[1.375rem] pr-9'>
            Общее кол-во: <span className='font-normal'>{totalCount}</span>
        </p>
    );
};

export default TotalCountElement;