import React, {FC} from 'react';
import {SVGType} from "./type";

export const DoubleArrow: FC<SVGType> = ({width, height, fill}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 14 12" fill={fill || 'currentColor'}
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.35355 0.646447C6.54882 0.841709 6.54882 1.15829 6.35355 1.35355L1.70711 6L6.35355 10.6464C6.54882 10.8417 6.54882 11.1583 6.35355 11.3536C6.15829 11.5488 5.84171 11.5488 5.64645 11.3536L0.646447 6.35355C0.451184 6.15829 0.451184 5.84171 0.646447 5.64645L5.64645 0.646447C5.84171 0.451184 6.15829 0.451184 6.35355 0.646447Z"
                fill=""/>
            <path
                d="M13.3536 0.646447C13.5488 0.841709 13.5488 1.15829 13.3536 1.35355L8.70711 6L13.3536 10.6464C13.5488 10.8417 13.5488 11.1583 13.3536 11.3536C13.1583 11.5488 12.8417 11.5488 12.6464 11.3536L7.64645 6.35355C7.45118 6.15829 7.45118 5.84171 7.64645 5.64645L12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447Z"
                fill=""/>
        </svg>
    );
};