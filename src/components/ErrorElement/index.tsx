import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton/CustomButton';

export const ErrorElement: FC = () => {
  const navigate = useNavigate();
  const returnHandler = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col grow justify-center items-center gap-3.5'>
      <p className='font-bold text-[40px]'>Упс... Ошибка...</p>
      <CustomButton
        style={'error'}
        text={'На главную'}
        onClick={returnHandler}
      />
    </div>
  );
};
