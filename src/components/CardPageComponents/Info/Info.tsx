import React, {FC} from 'react';

type PropsType = {
    info: string | number
}
const Info: FC<PropsType> = ({info}) => {
    return (
        <span className='font-normal'>{info}</span>
    );
};

export default Info;