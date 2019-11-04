import React, { useState, useEffect } from 'react'
import './ProfileDropdown.css'

let ProfileDropdown = ({items, select}) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, [])
    
    return (
        <div className="ProfileDropdown" style={{opacity: opacity}}>
            <ul className="profile-dropdown-list">
                {items.map((item) => <li key={item} onClick={e => select(item)} className="profile-dropdown-item">{item}</li>)}
            </ul>
        </div>
    )
}

export default ProfileDropdown