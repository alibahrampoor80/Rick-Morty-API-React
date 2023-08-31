import React, {useState} from 'react';
import Character from "./Character.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const CharacterList = ({characters}) => {

    return (
        <div className={'characters-list'}>
            {
                    characters.map(item => <Character key={item.id} item={item}/>)
            }
        </div>
    );
};

export default CharacterList;