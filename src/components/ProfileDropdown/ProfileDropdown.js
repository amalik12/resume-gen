import React from 'react'
import './ProfileDropdown.css'

let ProfileDropdown = ({items, select}) => {
    return (
        <div className="ProfileDropdown">
            <ul className="profile-dropdown-list">
                {items.map((item) => <li key={item} onClick={e => select(item)} className="profile-dropdown-item">{item}</li>)}
            </ul>
        </div>
    )
}

export default ProfileDropdown