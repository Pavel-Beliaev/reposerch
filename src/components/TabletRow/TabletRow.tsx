import React, {FC} from 'react';
import TabletCell from "../TabletCell/TabletCell";

type PropsType = {
    row?: number
}
const TabletRow: FC<PropsType> = ({row}) => {


    return (
        <div className='flex w-full gap-7 items-center justify-between'>
            <TabletCell value={row ? `${row}.names` : 'Имя'}/>
            <TabletCell value={'Звезды'}/>
            <TabletCell value={'Дата коммита'}/>
            <TabletCell value={'Ссылка'}/>
        </div>
    );
};

export default TabletRow;