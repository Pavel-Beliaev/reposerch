import React, { FC } from 'react';
import { SVG } from '../../../../assets/SVG';

type PropsType = {
  value: string | number;
  isType?: boolean;
  isStar?: boolean;
};
export const TabletCell: FC<PropsType> = ({ value, isType, isStar }) => {
  return (
    <p
      className={`whitespace-nowrap ${
        isStar ? 'flex gap-2 items-center' : ''
      } overflow-hidden text-ellipsis ${isType ? 'font-bold' : ''}`}>
      {isStar && <SVG.Star />}
      {value || '-'}
    </p>
  );
};