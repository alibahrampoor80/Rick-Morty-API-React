import React from 'react';
import {HeartIcon} from "@heroicons/react/24/outline";

const Navbar = ({charactersLength}) => {
    return <>
        <nav className={'navbar'}>
            <div className="navbar__logo">
                <img src="./vite.svg" alt=""/>
            </div>
            <input type="text" className={'text-field'} placeholder={'search'}/>
            <p className={'font-bold text-white text-lg'}>ali bahrampoor</p>
            <div className="navbar__result">found {charactersLength} character</div>
            <button className={'heart'}>
                <HeartIcon className={'icon'}/>
                <span className={'badge'}>3</span>
            </button>
        </nav>
    </>
};

export default Navbar;