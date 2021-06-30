import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

const TopNavbar = ( { toggleTheme } ) => {

    return (
        <header className="main-head">
            <div className="head-navbar">
                <h1 className="head-logo">MovieCenter</h1>
                <div>
                    <input type="checkbox" className="theme-toggler" id="theme-toggler-name" onChange={toggleTheme} />
                    <label htmlFor="theme-toggler-name" className="theme-toggler-wrapper">
                        <BsSun className="sun" />
                        <BsMoon className="moon" />
                        <div className="inner-ball"></div>
                    </label>
                </div>
            </div>
        </header>
    )
}

export default TopNavbar
