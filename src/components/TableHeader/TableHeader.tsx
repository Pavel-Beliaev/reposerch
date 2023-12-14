import React from 'react';
import TabletCell from "../TabletCell/TabletCell";

const TableHeader = () => {
    return (
        <div className='flex font-bold mb-[14px]'>
            <TabletCell value={'Имя'}/>
            <TabletCell value={'Звезды'}/>
            <TabletCell value={'Дата создания'}/>
            <TabletCell value={'Ссылка'}/>
        </div>
    );
};

export default TableHeader;