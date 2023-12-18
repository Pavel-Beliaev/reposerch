import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SVG } from '../../../assets/SVG';
import { CustomButton } from '../../CustomButton';

export const BackButton: FC = () => {
  const navigate = useNavigate();
  const returnHandler = () => {
    navigate(-1);
  };

  return (
    <div className='grid justify-self-start'>
      <CustomButton myStyle={'back'} onClick={returnHandler} text={'Назад'}>
        <SVG.Arrow width={'7'} height={'14'} />
      </CustomButton>
    </div>
  );
};
