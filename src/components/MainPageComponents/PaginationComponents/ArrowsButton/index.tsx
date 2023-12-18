import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  onClick: () => void;
  isAble: boolean;
};
export const ArrowsButton: FC<PropsType> = ({ children, onClick, isAble }) => {
  const onClickHandle = () => {
    onClick();
  };

  return (
    <button
      onClick={onClickHandle}
      className={`btn-pagination ${isAble ? 'pointer-events-none' : ''}`}>
      {children}
    </button>
  );
};
