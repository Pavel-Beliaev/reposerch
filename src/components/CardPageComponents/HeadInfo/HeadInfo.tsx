import React, {FC, ReactNode} from 'react';
import Info from "../Info/Info";

type PropsType = {
    title: string,
    children: ReactNode,
}
const HeadInfo: FC<PropsType> = ({title,children}) => {
    return (
        <p className='flex gap-2 text-card-head whitespace-nowrap'>
            {title}{children}
        </p>
    );
};

export default HeadInfo;