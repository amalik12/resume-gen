import React from 'react'
import './CheckField.css'

let CheckField = ({desc, value, handleChange}) => {
    return (
        <label className="CheckField">
            <input className="checkfield-input" type="checkbox" checked={value} onChange={handleChange} />
            <i class="fas fa-check checkfield-check"></i>
            <span className="checkfield-label">{desc}</span>
        </label>
    )
}

export default CheckField