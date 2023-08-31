import React from 'react';
import {character} from "../data/data.js";
import {FcBusinesswoman, FcManager} from "react-icons/fc";
import {ArrowUpCircleIcon} from "@heroicons/react/24/outline";
import LoadingSpinner from "./LoadingSpinner.jsx";

const CharacterDetail = ({allEpisode}) => {
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
                        <button className={'btn btn--primary'}>add to favorites</button>
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
                        allEpisode.map((item, index) => {
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