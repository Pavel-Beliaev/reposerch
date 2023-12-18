import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { parseDate } from '../../../utils/parseDate';
import { Link } from 'react-router-dom';
import { repositoriesStateSLice } from '../../../../store/repositories/slice';
import { TabletCell } from '../TabletCell';

export const TabletBody: FC = () => {
  const [lastNumber, setLastNumber] = useState<number>(10);
  const { repositories, page } = useSelector(repositoriesStateSLice);

  const numberList = useCallback((idx: number): number => {
    let currentNumber = idx + 1;
    return page * lastNumber - (10 - currentNumber);
  }, []);

  useEffect(() => {
    setLastNumber(page * 10);
  }, [page]);

  return (
    <>
      {repositories.map((data, idx) => (
        <Link
          to={`/card/${data.owner.login}_${data.name}`}
          key={data.html_url}
          className='grid grid-cols-[0.7fr_0.3fr_0.5fr_1fr] gap-2 hover:text-primary hover:cursor-pointer'>
          <TabletCell value={`${numberList(idx)}.${data.name}`} />
          <TabletCell value={data.stargazers_count} isStar />
          <TabletCell value={parseDate(data.created_at)} />
          <TabletCell value={data.html_url} />
        </Link>
      ))}
    </>
  );
};
