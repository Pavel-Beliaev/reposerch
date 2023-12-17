import React, {FC} from 'react';
import {TabletHeader} from "../TabletHeader";
import {TabletBody} from "../TabletBody";

export const Tablet: FC = () => {
    return (
        <div className='flex flex-col gap-3.5 p-5'>
            <TabletHeader/>
            <TabletBody/>
        </div>
    );
};

// <table className='w-full border-separate border-spacing-3 '>
//     <tr className=''>
//         <th className='text-start'>Имя</th>
//         <th className='text-start'>Звезды</th>
//         <th className='text-start whitespace-nowrap'>Дата создания</th>
//         <th className='text-start'>Ссылка</th>
//     </tr>
//     {repositories.map((data, idx) => (
//         <tr className=''>
//             <td>{`${idx + 1}.${data.name}` || '-'}</td>
//             <td>{data.stargazers_count || '-'}</td>
//             <td>{dateNorm(data.created_at) || '-'}</td>
//             <td >{data.html_url || '-'}</td>
//         </tr>
//     ))}
// </table>