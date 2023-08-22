import './App.css'
import Navbar from "./components/Navbar.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";

import {UseGetAllCharacters, UseGetAllEpisode} from "./hooks/useRickAndMorty.js";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function App() {
    const {data: dataAllCharacters, isLoading: isLoadingAllCharacters} = UseGetAllCharacters()
    const {data: dataAllEpisode, isLoading: isLoadingAllEpisode} = UseGetAllEpisode()

    const allCharacters = dataAllCharacters || {}
    const allEpisode = dataAllEpisode || {}

    return (

        <div className={'app'}>

            <Navbar charactersLength={allCharacters?.results?.length}/>

            <div className="main">

                <CharacterList characters={allCharacters.results} isLoading={isLoadingAllCharacters}/>

                <CharacterDetail allEpisode={allEpisode.results} isLoading={isLoadingAllEpisode}/>
            </div>
        </div>

    )
}

export default App
