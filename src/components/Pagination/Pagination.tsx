import React from 'react';

const Pagination = () => {
    const arr = Array.from(Array(10).keys())

    return (
        <div className='flex gap-[0.313rem]'>
            <button
                className='flex justify-center items-center w-10 h-10 p-2 hover:text-primary'>{'<<'}</button>
            <button className='flex justify-center items-center w-10 h-10 p-2 hover:text-primary'>{'<'}</button>
            {arr.map((num) => (
                <button className='flex justify-center items-center text-[#606060] w-10 h-10 p-2 hover:text-primary'
                        key={num}>
                    {num}
                </button>
            ))}
            <button className='flex justify-center items-center w-10 h-10 p-2 hover:text-primary'>{'>'}</button>
            <button
                className='flex justify-center items-center w-10 h-10 p-2 hover:text-primary'>{'>>'}</button>
        </div>
    );
};

export default Pagination;