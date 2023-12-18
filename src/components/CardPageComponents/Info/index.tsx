import React, { FC } from 'react';
import { SVG } from '../../../assets/SVG';

type PropsType = {
  title: string;
  value: string | number;
  idx: number;
};
export const Info: FC<PropsType> = ({ title, value, idx }) => {
  const shouldShowStar =
    idx === 1 ? (
      <>
        <SVG.Star />
        {value}
      </>
    ) : (
      value
    );

  return (
    <p className='flex gap-2 text-card-head whitespace-nowrap'>
      {`${title}: `}
      <span className='font-normal flex gap-2 items-center'>
        {shouldShowStar}
      </span>
    </p>
  );
};
