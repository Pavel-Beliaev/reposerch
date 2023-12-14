import React, {FC} from 'react';

type PropsType = {
    value: string | number
}
const TabletCell: FC<PropsType> = ({value}) => {
    return (
        <div className='flex'>
            {value}
        </div>
    );
};

export default TabletCell;