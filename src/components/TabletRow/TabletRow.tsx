import React, {FC, useEffect} from 'react';
import TabletCell from "../TabletCell/TabletCell";

type PropsType = {
    name?: string,
    stars?: number,
    date?: string,
    link?: string
    number?: string,
}
const TabletRow: FC<PropsType> = ({number, name, date,link,stars}) => {

    return (
        <div className='flex justify-between '>
            <TabletCell value={`${number}.${name}` || '-'}/>
            <TabletCell value={stars || '-'}/>
            <TabletCell value={date || '-'}/>
            <TabletCell value={link || '-'}/>
        </div>
    );
};

export default TabletRow;