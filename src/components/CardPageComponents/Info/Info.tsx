import React, {FC} from 'react';
import StarElement from "../../StarElement/StarElement";

type PropsType = {
    info: string | number,
    idx: number,
}
const Info: FC<PropsType> = ({info, idx}) => {
    return (
        <span className='font-normal'>{idx === 1 ? <StarElement value={info}/> : info}</span>
    );
};

export default Info;