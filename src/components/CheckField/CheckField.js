import React from 'react'
import './CheckField.css'

let CheckField = ({desc, value, handleChange, id, validation}) => {
    return (
        <label className="CheckField">
            <input name={id} className="checkfield-input" type="checkbox" checked={value} onChange={handleChange} />
            <i className="fas fa-check checkfield-check"></i>
            <span className="checkfield-label">{desc}</span>
        </label>
    )
}

export default CheckField