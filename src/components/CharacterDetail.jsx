import React from 'react';
import {character} from "../data/data.js";

const CharacterDetail = () => {
    return (
        <div style={{flex: "1"}}>
            <div className="character-detail">
                <img src={character.image} alt="" className={'character-detail__img'}/>
                <div className="character-episodes">

                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;