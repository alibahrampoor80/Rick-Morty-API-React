import React from 'react';
import {FcBusinesswoman, FcManager} from "react-icons/fc";

const CharacterSubInfo = ({character, isAddToFavourite, addFavourite}) => {
    return (
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
    );
};

export default CharacterSubInfo;