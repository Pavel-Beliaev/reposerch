import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {selectRepo} from "../../../store/repoSlice";

const TotalCountElement: FC = () => {
    const {totalCount} = useSelector(selectRepo);

    return (
        <p className='font-bold self-end pr-9'>
            Общее кол-во: <span className='font-normal'>{totalCount > 1000 ? 1000 : totalCount}</span>
        </p>
    );
};

export default TotalCountElement;