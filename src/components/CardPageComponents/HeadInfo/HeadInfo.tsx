import React, {FC, ReactNode} from 'react';
import Info from "../Info/Info";

type PropsType = {
    title: string,
    children: ReactNode,
}
const HeadInfo: FC<PropsType> = ({title,children}) => {
    return (
        <p className='text-card-head'>
            {title}{children}
        </p>
    );
};

export default HeadInfo;