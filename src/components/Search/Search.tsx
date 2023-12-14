import React, {ChangeEvent, FC} from 'react';

type PropsType = {
    value: string,
    setValue: (value: string) => void
}
const Search: FC<PropsType> = ({value, setValue}) => {

    return (
        <input type="text" placeholder='Поиск'
               value={value}
               onChange={(e) => setValue(e.target.value)}
               className='px-4 py-2 border border-grayscale rounded w-[80%] mb-[4.25rem]'/>
    );
};

export default Search;