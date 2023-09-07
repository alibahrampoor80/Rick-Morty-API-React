import React from 'react';
import {HeartIcon} from "@heroicons/react/24/outline";

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

export function Favourites({favouriteLength}) {
    return (
        <button className={'heart'}>
            <HeartIcon className={'icon'}/>
            <span className={'badge'}>{favouriteLength}</span>
        </button>
    )
}