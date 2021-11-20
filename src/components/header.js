import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoStorefront } from 'react-icons/io5';

export default function Header() {
    return (
        <div className="grid-header">
            <div className="logo text-white">
                <IoStorefront />
                Wize Store
            </div>
            <div className="search-bar">
                <form role="search">
                    <input id="search" type="search" className="pt-2" placeholder="Search..." />
                    <button className="pt-1" type="submit"><FaSearch /></button>    
                </form>
            </div>
            <div className="shopping-cart">
                <button type="button" className="shopping-cart-button float-right" data-toggle="shopping-cart-dropdown">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="text">Shopping Cart</span>
                </button>
            </div>
        </div>
    )
}
