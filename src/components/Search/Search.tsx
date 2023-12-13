import React, {ChangeEvent, FormEventHandler, useState} from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!query) return;
        try {
            const res = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=10`);
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    // name:
    // stargazers_count:
    // updated_at
    // html_url:
    // owner:
        return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Поиск'
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   className='px-4 py-2 border border-grayscale rounded w-[80%] mb-[4.25rem]'/>
            <button type='submit'>
                search
            </button>
        </form>
    );
};

export default Search;