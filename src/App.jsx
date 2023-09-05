import './App.css'
import Navbar, {SearchResult} from "./components/Navbar.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";

import {UseGetAllCharacters, UseGetAllEpisode} from "./hooks/useRickAndMorty.js";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import {useEffect, useState} from "react";
import {allCharacters, episodes} from "./data/data.js";

function App() {
    // const {data: dataAllCharacters, isLoading: isLoadingAllCharacters} = UseGetAllCharacters()
    // const {data: dataAllEpisode, isLoading: isLoadingAllEpisode} = UseGetAllEpisode()
    //
    // const allCharacters = dataAllCharacters || {}
    // const allEpisode = dataAllEpisode || {}

    const [Characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data =await response.json()
            setCharacters(data.results.slice(0, 8))
        }
        fetchData()
    }, [])

    return (

        <div className={'app'}>

            <Navbar>
                <SearchResult charactersLength={Characters.length}/>
            </Navbar>

            <Main>
                <CharacterList characters={Characters}/>

                <CharacterDetail allEpisode={episodes}/>
            </Main>
        </div>

    )
}

export default App

function Main({children}) {
    return <div className={'main'}>
        {children}
    </div>
}
