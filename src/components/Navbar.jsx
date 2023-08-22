import React from 'react';
import {HeartIcon} from "@heroicons/react/24/outline";

const Navbar = () => {
    return <>
        <nav className={'navbar'}>
            <div className="navbar__logo">
                <img src="./vite.svg" alt=""/>
            </div>
            <input type="text" className={'text-field'} placeholder={'search'}/>
            <div className="navbar__result">found x character</div>
            <button className={'heart'}>
                <HeartIcon className={'icon'}/>
                <span className={'badge'}>3</span>
            </button>
        </nav>
    </>
};

export default Navbar;