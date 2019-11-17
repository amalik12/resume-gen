import React from 'react'
import './SelectField.css'

let SelectField = ({options, name, value, handleChange, id}) => {
    return (
        <div class="SelectField">
            <label className="selectfield-label" htmlFor={id}>{name}</label>
            <select className={"selectfield-select" + (!value || value === options[0] ? ' unselected' : '')} value={value} onChange={handleChange} id={id}>
                {options.map((item) => <option className="selectfield-option">{item}</option>)}
            </select>
        </div>
    )
}

export default SelectField