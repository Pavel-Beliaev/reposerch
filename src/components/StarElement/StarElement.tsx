import React, {FC} from 'react';
import {ReactComponent as Star} from "../../assets/SVG/Star 1.svg";

type PropsType = {
    value: string | number
}
const StarElement: FC<PropsType> = ({value}) => {
    return (
        <span className='flex items-center gap-2'>
            <Star/>
            {value}
        </span>
    );
};

export default StarElement;