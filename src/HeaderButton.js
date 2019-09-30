import React from 'react'
import './HeaderButton.css'
let HeaderButton = ({ name }) => {
    return (
        <div className="HeaderButton">
            <span className="header-button-text">{name}</span> <i className="dropdown-arrow material-icons">arrow_drop_down</i>
        </div>
    )
}

export default HeaderButton