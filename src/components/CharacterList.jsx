import React, {useState} from 'react';
import Character from "./Character.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const CharacterList = ({characters, isLoading}) => {

    return (
        <div className={'characters-list'}>
            {
                isLoading ? <LoadingSpinner/> :
                    characters.map(item => <Character key={item.id} item={item}/>)
            }
        </div>
    );
};

export default CharacterList;