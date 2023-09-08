import React, {useState} from 'react';
import Character from "./Character.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline/index.js";

const CharacterList = ({characters, isLoading, onSelectCharacter, selectId}) => {

    return (
        <div className={'characters-list'}>
            {
                isLoading ? <LoadingSpinner/> :
                    characters.map(item => <Character key={item.id} item={item}
                                                      onSelectCharacter={onSelectCharacter}>
                        <button className={'icon red'}>
                            {
                                selectId === item.id ? <EyeSlashIcon className={'icon'}/> :
                                    <EyeIcon className={'icon'}/>
                            }
                        </button>
                    </Character>)
            }
        </div>
    );
};

export default CharacterList;