import React, {FC} from 'react';
import StarElement from "../../../StarElement/StarElement";

type PropsType = {
    value: string | number,
    type?: boolean,
    star?: boolean,
};
const TabletCell: FC<PropsType> = ({value, type, star}) => {

    return (
        <p className={`whitespace-nowrap overflow-hidden text-ellipsis ${type ? 'font-bold' : ''}`}>
            {star
                ? <StarElement value={value}/>
                : value}
        </p>
    );
};

export default TabletCell;