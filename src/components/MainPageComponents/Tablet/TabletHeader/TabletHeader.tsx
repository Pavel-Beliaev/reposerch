import React from 'react';
import TabletCell from "../TabletCell/TabletCell";

const titlesArray = ['Имя', 'Звезды', 'Дата создания', 'Ссылка'];
const TabletHeader = () => {

    return (
        <div className='grid grid-cols-[0.7fr_0.3fr_0.5fr_1fr] gap-2 mb-4'>
            {titlesArray.map((title) => (
                <TabletCell value={title} key={title} type={true}/>
            ))}
        </div>
    );
};

export default TabletHeader;