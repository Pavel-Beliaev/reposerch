import React, {FC} from 'react';

type PropsType = {
    value: string
}
const TabletCell: FC<PropsType> = ({value}) => {
    return (
        <div className='flex w-full'>
            {value}
        </div>
    );
};

export default TabletCell;