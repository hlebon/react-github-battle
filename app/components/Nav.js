import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(props){
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/Battle">Battle</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/Popular">Popular</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav