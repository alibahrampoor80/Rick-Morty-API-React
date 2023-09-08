import React, {useState} from 'react';

import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline";
import CharacterName from "./CharacterName.jsx";
import CharacterInfo from "./CharacterInfo.jsx";

const Character = ({item, onSelectCharacter, selectId, children}) => {

    return (
        <div className={'list__item'} onClick={() => onSelectCharacter(item.id)}>
            <img src={item.image} alt={item.name}/>

            <CharacterName item={item}/>

            <CharacterInfo item={item}/>

            {children}
        </div>
    );
};

export default Character;