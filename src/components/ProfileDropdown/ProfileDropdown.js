import React, { useState, useEffect } from 'react'
import './ProfileDropdown.css'

let ProfileDropdown = ({items, select}) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, [])

    let itemProps = {
        edit: false
    }

    return (
        <div className="ProfileDropdown" style={{opacity: opacity}}>
            <ul className="profile-dropdown-list">
                {items.map((item) => <li key={item[0]} onClick={e => select(item[1], itemProps)} className="profile-dropdown-item">{item[0]}</li>)}
            </ul>
        </div>
    )
}

export default ProfileDropdown