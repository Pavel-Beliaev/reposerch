import React from 'react';
import Title from "../components/Title/Title";
import ContentList from "../components/ContentList/ContentList";

const RepositoryPage = () => {
    return (
        <div className='flex flex-col  justify-center items-center'>
            <Title>
                Название репозитория
            </Title>
            <h2 className='text-2xl mb-[4.625rem]'>Детальная информация</h2>
            <ContentList>
                <div className='flex grow gap-[4.625rem] px-10 py-[3.75rem]'>
                    <img src="" alt="avatar" className='w-[12.5rem] h-[12.5rem] rounded-full bg-yellow-500'/>
                    <div className='flex flex-col gap-[1.063rem]'>
                        <p className='text-start'>Логин: <span className='text-end'>{'asd123'}</span></p>
                        <p className='text-start'>Звезды: <span className='text-end'>{'asd123'}</span></p>
                        <p className='text-start'>Последнее обновление: <span className='text-end'>{'asd123'}</span></p>
                        <p className='text-start'>Язык: <span className='text-end'>{'asd123'}</span></p>
                        <p className='text-start'>Ссылка: <span className='text-end'>{'asd123'}</span></p>
                    </div>
                </div>
            </ContentList>
        </div>
    );
};

export default RepositoryPage;