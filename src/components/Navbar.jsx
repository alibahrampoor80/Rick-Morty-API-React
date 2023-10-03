import React, {useState} from 'react';
import {HeartIcon} from "@heroicons/react/24/outline";
import Modal from "./Modal.jsx";
import Character from "./Character.jsx";
import {TrashIcon} from "@heroicons/react/24/outline/index.js";

const Navbar = ({children}) => {


    return <>
        <nav className={'navbar'}>
            <Logo/>

            <p className={'font-bold text-white text-lg'}>ali bahrampoor</p>
            {children}
        </nav>
    </>
};

export default Navbar;


function Logo() {
    return <div className="navbar__logo">
        <img src="./vite.svg" alt=""/>
    </div>
}

export function Search({query, setQuery}) {
    return <input type="text" className={'text-field'} placeholder={'search'} value={query}
                  onChange={event => setQuery(event.target.value)}/>
}

export function SearchResult({charactersLength}) {
    return <div className="navbar__result">found {charactersLength} character</div>
}

export function Favourites({favourite, handelDeleteFavourite}) {
    const [isOpen, setIsOpen] = useState(false)
    // console.log(favourite)
    return (
        <>
            <Modal open={isOpen} onOpen={setIsOpen} title={'list of favourite'}>
                {
                    favourite.map(item => <Character key={item.id} item={item}
                                                     selectId={"1"}
                                                     onSelectCharacter={() => {
                                                     }}>
                            <button className={'icon red'} onClick={() => handelDeleteFavourite(item.id)}><TrashIcon/>
                            </button>
                        </Character>
                    )
                }
            </Modal>
            <button className={'heart'} onClick={() => setIsOpen(open => !open)}>
                <HeartIcon className={'icon'}/>
                <span className={'badge'}>{favourite.length}</span>
            </button>
        </>
    )
}