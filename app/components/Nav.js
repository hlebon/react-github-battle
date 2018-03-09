import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(props){
    return (
        <nav>
            <ul className="ul-nav">
                <li className="ul-nav-item">
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li className="ul-nav-item">
                    <NavLink exact activeClassName="active" to="/battle">Battle</NavLink>
                </li>
                <li className="ul-nav-item">
                    <NavLink exact activeClassName="active" to="/popular">Popular</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav