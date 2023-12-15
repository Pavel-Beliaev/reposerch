import React, {FC, ReactNode} from 'react';

type PropsType = {
    children: ReactNode,
    rotate?: boolean,
    page?: number,
    left?: number,
    right?: number,
    onClick: () => void,
};
const ArrowsButton: FC<PropsType> = ({children, rotate, page, left, right, onClick}) => {

    return (
        <button onClick={() => onClick()}
             className={`btn-pagination-svg ${(page && left) && page <= left ? 'pointer-events-none' : (page && right) && page >= right ? 'pointer-events-none' : ''} ${rotate ? 'rotate-180' : ''}`}>
            {children}
        </button>
    );
};

export default ArrowsButton;