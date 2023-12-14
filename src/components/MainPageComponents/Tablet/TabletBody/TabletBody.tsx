import React from 'react';
import TabletCell from "../TabletCell/TabletCell";
import {useSelector} from "react-redux";
import {selectRepo} from "../../../../store/repoSlice";
import {dateNorm} from "../../../utils/dataNorm";
import {useAppDispatch} from "../../../../store/store";
import {CardSliceState, setCard} from "../../../../store/cardSLice";
import {Link} from "react-router-dom";

const TabletBody = () => {
    const {repositories} = useSelector(selectRepo);
    const dispatch = useAppDispatch();
    const createCard = ({avatar, login, stars, lastUpdate, language, url}: CardSliceState) => {
        dispatch(setCard({
            avatar,
            login,
            stars,
            lastUpdate,
            language,
            url,
        }));
    };

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
                      })}
                      className='grid grid-cols-[0.7fr_0.3fr_0.5fr_1fr] gap-2 hover:text-primary hover:cursor-pointer'>
                    <TabletCell value={`${idx + 1}.${data.name}` || '-'}/>
                    <TabletCell value={data.stargazers_count || '-'}/>
                    <TabletCell value={dateNorm(data.created_at) || '-'}/>
                    <TabletCell value={data.html_url || '-'}/>
                </Link>
            ))}
        </>
    );
};

export default TabletBody;