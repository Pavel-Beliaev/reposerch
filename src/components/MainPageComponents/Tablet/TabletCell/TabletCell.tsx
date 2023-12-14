import React, {FC} from 'react';

type PropsType = {
    value: string | number,
    type?: boolean,
};
const TabletCell: FC<PropsType> = ({value, type}) => {

    return (
        <p className={`whitespace-nowrap overflow-hidden text-ellipsis ${type ? 'font-bold' : ''}`}>
            {value}
        </p>
    );
};

export default TabletCell;