import React from 'react';
import {TabletCell} from "../TabletCell";

const TITLES = ['Имя', 'Звезды', 'Дата создания', 'Ссылка'];
export const TabletHeader = () => {
    return (
        <div className='grid grid-cols-[0.7fr_0.3fr_0.5fr_1fr] gap-2 mb-4'>
            {TITLES.map((title) => (
                <TabletCell value={title} key={title} isType/>
            ))}
        </div>
    );
};