import React, {useState} from 'react';
import Character from "./Character.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const CharacterList = ({characters, isLoading, onSelectCharacter, selectId}) => {

    return (
        <div className={'characters-list'}>
            {
                isLoading ? <LoadingSpinner/> :
                    characters.map(item => <Character key={item.id} item={item}
                                                      onSelectCharacter={onSelectCharacter}
                                                      selectId={selectId}/>)
            }
        </div>
    );
};

export default CharacterList;