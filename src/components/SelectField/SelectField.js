import React from 'react'
import './SelectField.css'

let SelectField = ({options, name, value, handleChange, id, disabled}) => {
    return (
        <div class={"SelectField " + (disabled ? 'disabled' : '')}>
            <label className="selectfield-label" htmlFor={id}>{name}</label>
            <select className={"selectfield-select" + (!value || value === options[0] ? ' unselected' : '')} disabled={disabled} value={value} onChange={handleChange} id={id}>
                {options.map((item) => <option className="selectfield-option">{item}</option>)}
            </select>
        </div>
    )
}

export default SelectField