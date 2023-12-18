import React from 'react';
import { useSelector } from 'react-redux';
import { Info } from '../Info';
import { parseDate } from '../../utils/parseDate';
import { cardStateSlice } from 'store';

type ObjType = {
  [key: string]: string | number;
};
const HEADINGS = ['Логин', 'Звезды', 'Последнее обновление', 'Язык', 'Ссылка'];

export const InfoList = () => {
  const { card } = useSelector(cardStateSlice);

  const obj: ObjType = {
    'Логин': card.owner.login,
    'Звезды': card.stargazers_count,
    'Последнее обновление': parseDate(card.updated_at),
    'Язык': card.language,
    'Ссылка': card.owner.html_url,
  };

  return (
    <div className='grid justify-self-start items-center grid-rows-5 '>
      {HEADINGS.map((title, idx) => (
        <Info key={title} title={title} value={obj[title]} idx={idx} />
      ))}
    </div>
  );
};
