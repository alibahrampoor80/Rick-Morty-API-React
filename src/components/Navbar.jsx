import React from 'react';
import {HeartIcon} from "@heroicons/react/24/outline";

const Navbar = ({children}) => {
    return <>
        <nav className={'navbar'}>
            <Logo/>
            <Search/>
            <p className={'font-bold text-white text-lg'}>ali bahrampoor</p>
            {children}
            <Favourites/>
        </nav>
    </>
};

export default Navbar;


function Logo() {
    return <div className="navbar__logo">
        <img src="./vite.svg" alt=""/>
    </div>
}

function Search() {
    return <input type="text" className={'text-field'} placeholder={'search'}/>
}

export function SearchResult({charactersLength}) {
    return <div className="navbar__result">found {charactersLength} character</div>
}

function Favourites() {
    return (
        <button className={'heart'}>
            <HeartIcon className={'icon'}/>
            <span className={'badge'}>3</span>
        </button>
    )
}