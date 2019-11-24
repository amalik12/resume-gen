import React from 'react'
import './SelectField.css'

let SelectField = ({options, name, value, handleChange, id, disabled, validation}) => {
    return (
        <div className={"SelectField " + (disabled ? 'disabled' : '')}>
            <label className="selectfield-label" htmlFor={id}>{name}</label>
            <select name={id} className={"selectfield-select" + (!value || value === options[0] ? ' unselected' : '')} disabled={disabled} value={value} onChange={handleChange} id={id} {...validation}>
                {options.map((item, index) => <option className="selectfield-option" value={index === 0 ? "" : index}>{item}</option>)}
            </select>
        </div>
    )
}

export default SelectField