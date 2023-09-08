import React, {useEffect, useState} from 'react';

import {FcBusinesswoman, FcManager} from "react-icons/fc";
import {ArrowUpCircleIcon} from "@heroicons/react/24/outline";
import LoadingSpinner from "./LoadingSpinner.jsx";
import axios from "axios";
import {character} from "../data/data.js";
import CharacterSubInfo from "./CharacterSubInfo.jsx";
import EpisodesList from "./EpisodesList.jsx";

const CharacterDetail = ({addFavourite, selectId, isAddToFavourite}) => {
    const [character, setCharacter] = useState(null)
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        async function fetchDataDetail() {
            try {
                setLoading(true)
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectId}`)
                setCharacter(data)

                const episodesId = data.episode.map(e => e.split("/").at(-1))
                const {data: episodeData} = await axios.get(`https://rickandmortyapi.com/api/episode/${episodesId}`)
                setEpisodes([episodeData].flat())

                setLoading(false)
            } catch (err) {
                setLoading(false)
            }
        }

        if (selectId) fetchDataDetail()
    }, [selectId])


    if (loading) return <div style={{
        display: "flex", justifyContent: "center",
        flex: 1,
        color: "var(--slate-300)"
    }}>
        <LoadingSpinner/>
    </div>

    if (!character || !selectId) return <div style={{
        display: "flex", justifyContent: "center",
        flex: 1,
        color: "var(--slate-300)"
    }}>please select character</div>
    return (
        <div style={{flex: "1"}}>
            <CharacterSubInfo character={character}
                              isAddToFavourite={isAddToFavourite}
                              addFavourite={addFavourite}/>
            <EpisodesList episodes={episodes}/>
        </div>
    );
};

export default CharacterDetail;