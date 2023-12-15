import React from 'react';
import Title from "../components/Title/Title";
import ContentList from "../components/ContentList/ContentList";
import Card from "../components/CardPageComponents/Card/Card";
import BackButton from "../components/CardPageComponents/BackButton/BackButton";
import {useSelector} from "react-redux";
import {selectCard} from "../store/cardSLice";

const CardPage = () => {
    const {name} = useSelector(selectCard);

    return (
        <div className='page'>
            <div className='w-full flex justify-center items-center relative'>
                <BackButton/>
                <Title>
                    {name}
                </Title>
            </div>
            <h2 className='text-2xl'>Детальная информация</h2>
            <ContentList>
                <Card/>
            </ContentList>
        </div>
    );
};

export default CardPage;