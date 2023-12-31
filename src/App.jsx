import './App.css'
import Navbar, {Favourites, Search, SearchResult} from "./components/Navbar.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";

import {UseGetAllCharacters, UseGetAllEpisode} from "./hooks/useRickAndMorty.js";

import React, {useEffect, useState} from "react";
import {allCharacters, episodes} from "./data/data.js";
import {toast, Toaster} from "react-hot-toast";
import axios from "axios";
import Modal from "./components/Modal.jsx";

function App() {
    // const {data: dataAllCharacters, isLoading: isLoadingAllCharacters} = UseGetAllCharacters()
    // const {data: dataAllEpisode, isLoading: isLoadingAllEpisode} = UseGetAllEpisode()
    //
    // const allCharacters = dataAllCharacters || {}
    // const allEpisode = dataAllEpisode || {}
    const [Characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [selectId, setSelectId] = useState(null)
    const [favourite, setFavourite] = useState(() => {
        return JSON.parse(localStorage.getItem('favourite')) || []
    })
    const [page, setPage] = useState(1)
    const [infoApi, setInfoApi] = useState({})


    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(favourite))
    }, [favourite])

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        async function fetchData() {
            try {
                setIsLoading(true)
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}&page=${page}`,
                    {signal})
                setInfoApi(data.info)
                setCharacters(data.results)
                setIsLoading(false)
            } catch (err) {
                if (!axios.isCancel()) {
                    setCharacters([])
                    setIsLoading(false)
                    toast.error(err.response.data.error)
                }
            }
        }
        fetchData()
        return () => {
            controller.abort()
        }
    }, [query, page])

    const onSelectCharacter = (id) => {
        setSelectId(prevId => prevId === id ? null : id)
    }
    const addFavourite = (char) => {
        // setFavourite([...favourite, char])
        setFavourite((prevFavourite) => [...prevFavourite, char])
    }
    const isAddToFavourite = favourite.map(fav => fav.id).includes(selectId)

    const handelDeleteFavourite = (id) => {
        setFavourite(pervFav => pervFav.filter(f => f.id !== id))
    }
    const handelPaginateCharacters = (e, value) => {
        setPage(value)
    }
    return (
        <div className={'app'}>

            <Navbar>
                <Search query={query} setQuery={setQuery}/>
                <SearchResult charactersLength={Characters.length}/>
                <Favourites favourite={favourite} handelDeleteFavourite={handelDeleteFavourite}/>
            </Navbar>

            <Main>
                <CharacterList characters={Characters}
                               isLoading={isLoading}
                               onSelectCharacter={onSelectCharacter}
                               selectId={selectId}
                               infoApi={infoApi}
                               handelPaginateCharacters={handelPaginateCharacters}
                />

                <CharacterDetail selectId={selectId}
                                 addFavourite={addFavourite}
                                 isAddToFavourite={isAddToFavourite}/>
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
