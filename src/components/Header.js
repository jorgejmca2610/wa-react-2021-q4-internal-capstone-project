import React from 'react'
import { FaSearch } from 'react-icons/fa';
import logo from '../utilities/logo.png';

export default function Header(data) {
    return (
        <div className="grid-header">
            <div className="logo text-white">
                <a href="/#" onClick={() => data.setMainPage(true)}>
                    <img src={logo} className="logo" alt="logo" />
                </a>
            </div>
            <div className="search-bar">
                <form role="search">
                    <input id="search" type="search" className="pt-2" placeholder="Search..." />
                    <button className="pt-1" type="submit"><FaSearch /></button>    
                </form>
            </div>
            <div className="shopping-cart">
                <button type="button" className="shopping-cart-button float-right" data-toggle="shopping-cart-dropdown">
                    <span className="text">Shopping Cart</span>
                </button>
            </div>
        </div>
    )
}
