import React from 'react';
import Info from "../Info/Info";
import {useSelector} from "react-redux";
import {selectCard} from "../../../store/cardSLice";
import HeadInfo from "../HeadInfo/HeadInfo";

type ObjType = {
    [key: string]: string| number;
};
const arrHead = ['Логин', 'Звезды', 'Последнее обновление', 'Язык', 'Ссылка'];

const InfoList = () => {
    const {login, stars, lastUpdate, language, url} = useSelector(selectCard);

    const obj: ObjType = {
        'Логин': login,
        'Звезды': stars,
        'Последнее обновление': lastUpdate,
        'Язык': language,
        'Ссылка': url,
    };

    return (
        <div className='flex flex-col justify-between'>
            {arrHead.map((title, idx) => (
                <HeadInfo title={`${title}: `} key={title}>
                    <Info info={obj[title]} idx={idx}/>
                </HeadInfo>
            ))}
            {/*<HeadInfo title={'Звезды:'}>*/}
            {/*    <Info info={stars}/>*/}
            {/*</HeadInfo>*/}
            {/*<HeadInfo title={'Последнее обновление:'}>*/}
            {/*    <Info info={dateNorm(lastUpdate)}/>*/}
            {/*</HeadInfo>*/}
            {/*<HeadInfo title={'Язык:'}>*/}
            {/*    <Info info={language}/>*/}
            {/*</HeadInfo>*/}
            {/*<HeadInfo title={'Ссылка:'}>*/}
            {/*    <Info info={url}/>*/}
            {/*</HeadInfo>*/}
        </div>
    );
};

export default InfoList;