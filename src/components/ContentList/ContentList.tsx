import React, {FC, ReactNode} from 'react';

type PropsType = {
    children: ReactNode,
};
const ContentList: FC<PropsType> = ({children}) => {
    return (
        <div
            className='flex shadow-[2px_2px_20px_0px_rgba(0,0,0,0.1)] w-[787px] h-[467px] '>
            {children}
        </div>
    );
};

export default ContentList;