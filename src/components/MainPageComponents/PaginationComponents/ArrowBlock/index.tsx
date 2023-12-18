import React, { FC } from 'react';
import { ArrowsButton } from '../ArrowsButton';
import { SVG } from '../../../../assets/SVG';
import { useSelector } from 'react-redux';
import { repositoriesStateSLice } from 'store';

type PropsType = {
  totalPage: number;
  arrowHandler: () => void;
  doubleArrowHandler: () => void;
  isRight: boolean;
  limitRange: number[];
};
export const ArrowBlock: FC<PropsType> = ({
  totalPage,
  arrowHandler,
  doubleArrowHandler,
  isRight,
  limitRange,
}) => {
  const { page } = useSelector(repositoriesStateSLice);

  const disableArrow = isRight
    ? page >= totalPage - limitRange[0]
    : page <= limitRange[0];
  const disableDoubleArrow = isRight
    ? page >= totalPage - limitRange[1]
    : page <= limitRange[1];

  return (
    <div
      className={`flex items-center justify-center gap-[5px] ${
        isRight ? 'rotate-180' : ''
      }`}>
      {totalPage > 10 && (
        <ArrowsButton onClick={doubleArrowHandler} isAble={disableDoubleArrow}>
          <SVG.DoubleArrow width={'14'} height={'14'} />
        </ArrowsButton>
      )}
      <ArrowsButton onClick={arrowHandler} isAble={disableArrow}>
        <SVG.Arrow width={'7'} height={'14'} />
      </ArrowsButton>
    </div>
  );
};
