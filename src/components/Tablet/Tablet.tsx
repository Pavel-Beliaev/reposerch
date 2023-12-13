import React from 'react';
import TabletRow from "../TabletRow/TabletRow";

const Tablet = () => {

    return (
        <div className='flex flex-col grow gap-6 py-[1.875rem] px-[2.375rem]'>
            <div className='flex font-bold'>
                <TabletRow/>
            </div>
            <div className='flex flex-col gap-3.5'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
                    <TabletRow key={row} row={row}/>
                ))}
            </div>
        </div>
    );
};

export default Tablet;