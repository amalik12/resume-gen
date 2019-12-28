import React from 'react'
import './SelectField.css'
import { Field, ErrorMessage } from 'formik'

let SelectField = ({options, name, id, disabled}) => {
    return (
        <div className={"SelectField " + (disabled ? 'disabled' : '')}>
            <Field name={id}>
                {({ field, meta }) => (
                    <div>
                        <label className={"selectfield-label" + (meta.touched && meta.error ? ' invalid' : '')} htmlFor={id}>{name}</label>
                        <select name={id} {...field} className={"selectfield-select" + (!field.value || field.value === options[0] ? ' unselected' : '') + (meta.touched && meta.error ? ' invalid' : '')} disabled={disabled} id={id}>
                            {options.map((item, index) => <option key={index} className="selectfield-option" value={index === 0 ? "" : index}>{item}</option>)}
                        </select>
                    </div>
                )}
            </Field>
            <ErrorMessage name={id}>{msg => <span className="selectfield-error">{msg}</span>}</ErrorMessage>
        </div>
    )
}

export default SelectField