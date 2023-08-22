import React from 'react';

const CharacterInfo = ({item}) => {
    return (
        <div className="list-item__info info">
            <span className={`status  ${item.status === "Dead" ? "red" : ""}`}></span>
            <span>  {item.status}     </span>
            <span> {item.species} </span>
        </div>
    );
};

export default CharacterInfo;