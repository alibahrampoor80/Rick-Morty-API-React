import './App.css'
import Navbar, {Search, SearchResult} from "./components/Navbar.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";

import {UseGetAllCharacters, UseGetAllEpisode} from "./hooks/useRickAndMorty.js";

import React, {useEffect, useState} from "react";
import {allCharacters, episodes} from "./data/data.js";
import {toast, Toaster} from "react-hot-toast";
import axios from "axios";

function App() {
    // const {data: dataAllCharacters, isLoading: isLoadingAllCharacters} = UseGetAllCharacters()
    // const {data: dataAllEpisode, isLoading: isLoadingAllEpisode} = UseGetAllEpisode()
    //
    // const allCharacters = dataAllCharacters || {}
    // const allEpisode = dataAllEpisode || {}

    const [Characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState("")
    useEffect(() => {

        async function fetchData() {
            try {
                setIsLoading(true)
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}`)
                setCharacters(data.results)
                setIsLoading(false)
            } catch (err) {
                setCharacters([])
                setIsLoading(false)
                toast.error(err.message)
            }
        }

        fetchData()
    }, [query])

    return (

        <div className={'app'}>

            <Navbar>
                <Search query={query} setQuery={setQuery}/>
                <SearchResult charactersLength={Characters.length}/>
            </Navbar>

            <Main>
                <CharacterList characters={Characters} isLoading={isLoading}/>


                <CharacterDetail allEpisode={episodes}/>
            </Main>
            <Toaster/>
        </div>

    )
}

export default App

function Main({children}) {
    return <div className={'main'}>
        {children}
    </div>
}
