import React, {useState} from 'react';

import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline";
import CharacterName from "./CharacterName.jsx";
import CharacterInfo from "./CharacterInfo.jsx";

const Character = ({item, onSelectCharacter, selectId}) => {

    return (
        <div className={'list__item'}>
            <img src={item.image} alt={item.name}/>

            <CharacterName item={item}/>

            <CharacterInfo item={item}/>

            <button className={'icon red'} onClick={() => onSelectCharacter(item.id)}>
                {
                    selectId === item.id ? <EyeSlashIcon className={'icon'}/> : <EyeIcon className={'icon'}/>
                }

            </button>
        </div>
    );
};

export default Character;