import React, {FC} from 'react';

type PropsType = {
    children: string,
}
const Title: FC<PropsType> = ({children}) => {
    return (
        <h1 className='font-bold text-[32px]'>
            {children}
        </h1>
    );
};

export default Title;