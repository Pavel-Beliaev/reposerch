import React from 'react';

const ErrorElement = () => {
    return (
        <div className='flex flex-col grow justify-center items-center gap-3.5'>
            <p className='font-bold text-[40px]'>Упс... Ошибка...</p>
            <a href="/" className='text-2xl p-4 bg-[#D80000] rounded text-[#F2F2F2]'>На главную</a>
        </div>
    );
};

export default ErrorElement;