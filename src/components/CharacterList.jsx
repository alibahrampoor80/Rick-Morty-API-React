import React, {useState} from 'react';
import Character from "./Character.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline/index.js";
import {Pagination} from "@mui/material";

const CharacterList = ({characters, isLoading, onSelectCharacter, selectId, infoApi, handelPaginateCharacters}) => {

    return (
        <div className={'characters-list'}>
            {
                isLoading ? <LoadingSpinner/> :
                    characters.map(item => <Character key={item.id}
                                                      item={item}
                                                      onSelectCharacter={onSelectCharacter}>
                        <button className={'icon red'}>
                            {
                                selectId === item.id ? <EyeSlashIcon className={'icon'}/> :
                                    <EyeIcon className={'icon'}/>
                            }
                        </button>
                    </Character>)

            }

            {
                characters.length > 1 &&
                <div style={{
                    backgroundColor: "#fff",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "1rem"
                }}>
                    <Pagination count={infoApi.pages}
                                onChange={(event, value) => handelPaginateCharacters(event, value)}
                                variant="text"
                                color="primary"/>
                </div>
            }


        </div>
    );
};

export default CharacterList;