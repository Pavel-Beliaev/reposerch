import React, {FC} from 'react';

type PropsType = {
    value: string,
    setValue: (value: string) => void,
};
const Search: FC<PropsType> = ({value, setValue}) => {
    return (
        <div className='flex items-center gap-2 w-4/5'>
            <input type="text" placeholder='Поиск'
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   className='px-4 py-2 border border-grayscale rounded flex grow'/>
            {value &&
                <button
                    onClick={() => setValue('')}
                    className='flex items-center justify-center text-white text-[12px] w-[25px] h-[25px] rounded-full p-3 bg-primary'>
                    X
                </button>
            }
        </div>
    );
};

export default Search;