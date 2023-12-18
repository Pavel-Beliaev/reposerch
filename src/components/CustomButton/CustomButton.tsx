import React, { FC, ReactNode } from 'react';

type PropsType = {
  myStyle: 'back' | 'error';
  text: string;
  onClick: () => void;
  children?: ReactNode;
};
type ObjType = {
  [key: string]: string;
};
export const CustomButton: FC<PropsType> = ({
  myStyle,
  text,
  onClick,
  children,
}) => {
  const styles: ObjType = {
    back: 'btn-back',
    error: 'btn-error',
  };

  return (
    <button onClick={onClick} className={styles[myStyle]}>
      {children}
      {text}
    </button>
  );
};
