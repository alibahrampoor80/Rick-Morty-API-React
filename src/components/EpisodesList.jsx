import React, {useState} from 'react';
import {ArrowUpCircleIcon} from "@heroicons/react/24/outline/index.js";

const EpisodesList = ({episodes}) => {
    const [sort, setSort] = useState(true)

    let sortedEpisode
    if (sort) {
        sortedEpisode = [...episodes].sort((a, b) => new Date(a.created) - new Date(b.created))
    } else {
        sortedEpisode = [...episodes].sort((a, b) => new Date(b.created) - new Date(a.created))
    }

    return (
        <div className="character-episodes">
            <div className="title">
                <h2 className={'font-bold text-lg'}>list of episodes</h2>
                <button onClick={() => setSort(sort => !sort)} className={'icon'}
                        style={{rotate: sort ? "0" : "180deg"}}>
                    <ArrowUpCircleIcon />
                </button>
            </div>
            <ul>
                {
                    sortedEpisode.map((item, index) => {
                        return <li key={item.id}>
                            <div className={''}>
                                {String(index + 1).padStart(2, "0")} - {item.episode} : <strong>{item.name}</strong>
                            </div>
                            <div className={'badge badge--secondary'}>{item.air_date}</div>
                        </li>
                    })

                }

            </ul>
        </div>
    );
};

export default EpisodesList;