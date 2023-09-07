import React, {useEffect, useState} from 'react';

import {FcBusinesswoman, FcManager} from "react-icons/fc";
import {ArrowUpCircleIcon} from "@heroicons/react/24/outline";
import LoadingSpinner from "./LoadingSpinner.jsx";
import axios from "axios";
import {character} from "../data/data.js";

const CharacterDetail = ({addFavourite, selectId, isAddToFavourite}) => {
    const [character, setCharacter] = useState(null)
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        async function fetchDataDetail() {
            try {
                setLoading(true)
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectId}`)
                setCharacter(data)

                const episodesId = data.episode.map(e => e.split("/").at(-1))
                const {data: episodeData} = await axios.get(`https://rickandmortyapi.com/api/episode/${episodesId}`)
                setEpisodes([episodeData].flat())

                setLoading(false)
            } catch (err) {
                setLoading(false)
            }
        }

        if (selectId) fetchDataDetail()
    }, [selectId])


    if (loading) return <div style={{
        display: "flex", justifyContent: "center",
        flex: 1,
        color: "var(--slate-300)"
    }}>
        <LoadingSpinner/>
    </div>

    if (!character || !selectId) return <div style={{
        display: "flex", justifyContent: "center",
        flex: 1,
        color: "var(--slate-300)"
    }}>please select character</div>
    return (
        <div style={{flex: "1"}}>
            <div className="character-detail">
                <img src={character.image} alt="" className={'character-detail__img'}/>

                <div className="character-detail__info">
                    <h3 className={'name flex'}>
                         <span className={''}>
                            {character.gender === "Male" ? <FcManager className={'icon'}/> :
                                <FcBusinesswoman className={'icon'}/>}
                        </span>
                        <span className={'name'}>{character.name}</span>

                    </h3>
                    <div className="info">
                        <span
                            className={`status ${character.status === 'Dead' ? "red" : ""}`}> {"  "} </span>
                        <span>  {character.status}   </span>
                        <span>-{"   "}{character.species}</span>
                    </div>
                    <div className="location">
                        <p>last location</p>
                        <p>{character.location.name}</p>
                    </div>
                    <div className="actions">
                        {
                            isAddToFavourite ? <p>Already Added to Favourite</p> : (
                                <button className={'btn btn--primary'}
                                        onClick={() => addFavourite(character)}>add to
                                    favorites
                                </button>
                            )
                        }

                    </div>
                </div>

            </div>
            <div className="character-episodes">
                <div className="title">
                    <h2 className={'font-bold text-lg'}>list of episodes</h2>
                    <button>
                        <ArrowUpCircleIcon className={'icon'}/>
                    </button>
                </div>
                <ul>
                    {
                        episodes.map((item, index) => {
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
        </div>
    );
};

export default CharacterDetail;