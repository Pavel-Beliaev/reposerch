import React, {FC} from 'react';

const Loader: FC = () => {
    return (
        <div className='flex flex-col grow items-center self-center'>
            <div className='animate-spin-slow'>
                <div
                    className='w-[5.625rem] h-[5.625rem] rounded-full border-[0.875rem] border-dotted border-gray-500'></div>
            </div>
            <span className='text-xl'>Загрузка...</span>
        </div>
    );
};

export default Loader;