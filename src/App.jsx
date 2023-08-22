import './App.css'
import Navbar from "./components/Navbar.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";
import {allCharacters} from "./data/data.js";

function App() {

    return (
        <div className={'app'}>
            <Navbar/>
            <div className="main">
                <CharacterList characters={allCharacters}/>
                <CharacterDetail/>
            </div>
        </div>
    )
}

export default App
