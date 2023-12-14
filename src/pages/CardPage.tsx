import React from 'react';
import Title from "../components/Title/Title";
import ContentList from "../components/ContentList/ContentList";
import Card from "../components/CardPageComponents/Card/Card";
import BackButton from "../components/CardPageComponents/BackButton/BackButton";

const CardPage = () => {

    return (
        <div className='page'>
            <div className='w-full flex justify-center items-center relative'>
                <BackButton/>
                <Title>
                    Название репозитория
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