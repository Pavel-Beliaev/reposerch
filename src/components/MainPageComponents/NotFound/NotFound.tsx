import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {selectRepo} from "../../../store/repoSlice";

const NotFound: FC = () => {
    const {status} = useSelector(selectRepo);

    return (
        <div className='flex grow self-center justify-center'>
            <p className='font-bold text-2xl'>
                {status === 'error' ? 'Слишком много запросов...подождите минуту...' : 'Ничего не найдено (('}
            </p>
        </div>
    );
};

export default NotFound;