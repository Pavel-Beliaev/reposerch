import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {selectCard} from "../../../store/cardSLice";

const Avatar: FC = () => {
    const {avatar} = useSelector(selectCard);

    return (
        <img src={avatar} alt="avatar" className='w-[200px] h-[200px] rounded-full '/>
    );
};

export default Avatar;