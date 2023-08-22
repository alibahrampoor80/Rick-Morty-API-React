import React from 'react';
import {FcBusinesswoman, FcManager} from "react-icons/fc";
import {EyeIcon} from "@heroicons/react/24/outline";
import CharacterName from "./CharacterName.jsx";
import CharacterInfo from "./CharacterInfo.jsx";


const Character = ({item}) => {
    return (
        <div className={'list__item'}>
            <img src={item.image} alt={item.name}/>

            <CharacterName item={item}/>

            <CharacterInfo item={item}/>

            <button className={'icon red'}>
                <EyeIcon className={'icon'}/>
            </button>
        </div>
    );
};

export default Character;