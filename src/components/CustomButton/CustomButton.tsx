import React, {FC, ReactNode} from 'react';

type PropsType = {
    style: 'back' | 'error',
    text: string,
    onClick: () => void,
    children?: ReactNode,
};
type ObjType = {
    [key: string]: string,
};
export const CustomButton: FC<PropsType> = ({style, text, onClick, children,}) => {

    const styles: ObjType = {
        back: 'btn-back',
        error: 'btn-error',
    }

    return (
        <button
            onClick={onClick}
            className={styles[style]}>
            {children}
            {text}
        </button>
    );
};