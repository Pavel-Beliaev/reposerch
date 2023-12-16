import React, {useCallback, useEffect, useState} from 'react';
import TabletCell from "../TabletCell/TabletCell";
import {useSelector} from "react-redux";
import {selectRepo} from "../../../../store/repoSlice";
import {dateNorm} from "../../../utils/dataNorm";
import {useAppDispatch} from "../../../../store/store";
import {CardSliceState, setCard} from "../../../../store/cardSLice";
import {Link} from "react-router-dom";

const TabletBody = () => {
    const [lastNumber, setLastNumber] = useState<number>(10)
    const {repositories, page} = useSelector(selectRepo);
    const dispatch = useAppDispatch();
    const createCard = ({avatar, login, stars, lastUpdate, language, url, name}: CardSliceState) => {
        dispatch(setCard({
            avatar,
            login,
            stars,
            lastUpdate,
            language,
            url,
            name,
        }));
    };

    const numberList = useCallback((idx: number): number => {
        let currentNumber = idx + 1;
        return (page * lastNumber) - (10 - currentNumber);
    },[]);

    useEffect(() => {
        setLastNumber(page * 10);
    }, [page]);


    return (
        <>
            {repositories.map((data, idx) => (
                <Link to={`/card/${data.owner.login}`}
                      key={data.html_url}
                      onClick={() => createCard({
                          avatar: data.owner.avatar_url,
                          login: data.owner.login,
                          stars: data.stargazers_count,
                          lastUpdate: dateNorm(data.updated_at),
                          language: data.language,
                          url: data.owner.html_url,
                          name: data.name,
                      })}
                      className='grid grid-cols-[0.7fr_0.3fr_0.5fr_1fr] gap-2 hover:text-primary hover:cursor-pointer'>
                    <TabletCell value={`${numberList(idx)}.${data.name}` || '-'}/>
                    <TabletCell value={data.stargazers_count || '-'} star={true}/>
                    <TabletCell value={dateNorm(data.created_at) || '-'}/>
                    <TabletCell value={data.html_url || '-'}/>
                </Link>
            ))}
        </>
    );
};

export default TabletBody;