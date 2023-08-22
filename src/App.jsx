import './App.css'
import Navbar from "./components/Navbar.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";
import {allCharacters} from "./data/data.js";
import {UseGetAllCharacters} from "./hooks/useRickAndMorty.js";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function App() {
    const {data, isLoading} = UseGetAllCharacters()
    console.log(data)
    const allCharacters = data || {}
    return (

        <div className={'app'}>

            <Navbar/>
            <h1 className="text-3xl font-bold underline text-red-800">
                Hello world!
            </h1>
            <div className="main">

                {
                    isLoading ? <LoadingSpinner/> : <CharacterList characters={allCharacters.results}/>
                }

                <CharacterDetail/>
            </div>
        </div>

    )
}

export default App
