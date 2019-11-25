import React from 'react'
import './SelectField.css'
import { Field, ErrorMessage } from 'formik'

let SelectField = ({options, name, id, disabled}) => {
    return (
        <div className={"SelectField " + (disabled ? 'disabled' : '')}>
            <label className="selectfield-label" htmlFor={id}>{name}</label>
            <Field name={id}>
                {({field}) =>(
                    <select name={id} {...field} className={"selectfield-select" + (!field.value || field.value === options[0] ? ' unselected' : '')} disabled={disabled} id={id}>
                        {options.map((item, index) => <option key={index} className="selectfield-option" value={index === 0 ? "" : index}>{item}</option>)}
                    </select>
                )}
            </Field>
            <ErrorMessage name={id}>{msg => <span className="selectfield-error">{msg}</span>}</ErrorMessage>
        </div>
    )
}

export default SelectField