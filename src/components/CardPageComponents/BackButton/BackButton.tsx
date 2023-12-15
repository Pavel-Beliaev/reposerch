import React from 'react';
import {ReactComponent as Arrow} from "../../../assets/SVG/Shape.svg";
import {Link, useNavigate} from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() =>navigate(-1)}
                className='flex items-center justify-center w-[110px] rounded p-2 gap-2 bg-[#F3F2F1] absolute left-0'>
            <Arrow className='fill-[#606060]'/>
            Назад
        </button>
    );
};

export default BackButton;