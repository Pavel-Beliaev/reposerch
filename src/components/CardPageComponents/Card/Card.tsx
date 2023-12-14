import React from 'react';
import Avatar from "../Avatar/Avatar";
import InfoList from "../InfoList/InfoList";

const Card = () => {
    return (
        <div className='grid grid-cols-[auto_auto] gap-8 auto-rows-min p-[30px] justify-items-center'>
            <Avatar/>
            <InfoList/>
        </div>
    );
};

export default Card;