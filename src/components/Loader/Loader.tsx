import React, {FC} from 'react';

const Loader: FC = () => {
    return (
        <div className='flex flex-col grow items-center self-center'>
            <div className='animate-spin-slow'>
                <div
                    className='w-[90px] h-[90px] rounded-full border-[14px] border-dotted border-gray-500'></div>
            </div>
            <span className='text-xl'>Загрузка...</span>
        </div>
    );
};

export default Loader;