import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};
export const PageWrapper: FC<PropsType> = ({ children }) => {
  return <div className='page'>{children}</div>;
};