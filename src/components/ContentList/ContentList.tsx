import React, {FC, ReactNode} from 'react';

type PropsType = {
    children: ReactNode
}
const ContentList: FC<PropsType> = ({children}) => {
    return (
        <div
            className='flex shadow-[0.125rem_0.125rem_1.25rem_0rem_rgba(0,0,0,0.1)] min-w-[49.188rem] min-h-[29.188rem] '>
            {children}
        </div>
    );
};

export default ContentList;