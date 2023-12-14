import React from 'react';
import TabletRow from "../TabletRow/TabletRow";
import {useSelector} from "react-redux";
import {selectRepo} from "../../store/repoSlice";
import TableHeader from "../TableHeader/TableHeader";

const Tablet = () => {
    const {repositories} = useSelector(selectRepo);
    const dateNorm = (date: string) => {
        return date.split(/[-T]/).slice(0, 3).reverse().join('/')
    }

    return (
        <div className='flex flex-col gap-3.5 grow p-[1.25rem]'>
            <TableHeader/>
            {repositories.map((data, idx) => (
                <TabletRow key={data.name}
                           name={data.name}
                           stars={data.stargazers_count}
                           date={dateNorm(data.created_at)}
                           link={data.html_url}
                           number={String(idx+1)}
                />
            ))}
        </div>
    );
};

export default Tablet;