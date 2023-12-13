import React, {FC} from 'react';

type PropsType = {
    children: string,
}
const Title: FC<PropsType> = ({children}) => {
    return (
        <h1 className='font-bold text-[2rem] mb-9'>
            {children}
        </h1>
    );
};

export default Title;