import React from 'react';
import {FcBusinesswoman, FcManager} from "react-icons/fc";

const CharacterName = ({item}) => {
    return (
        <h3 className={'name flex'}>
                <span>{item.gender === "Male" ? <FcManager className={'icon'}/> :
                    <FcBusinesswoman className={'icon'}/>}</span>
            <span>{item.name}</span>
        </h3>
    );
};

export default CharacterName;