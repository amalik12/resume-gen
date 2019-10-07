import React from 'react'
import './HeaderButton.css'
let HeaderButton = ({ name }) => {
    return (
        <div className="HeaderButton">
            <span className="header-button-text">{name}</span> <i class="dropdown-arrow fas fa-caret-down"></i>
        </div>
    )
}

export default HeaderButton