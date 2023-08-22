import React from 'react';
import Character from "./Character.jsx";

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