import React from 'react'
import './CheckField.css'
import { Field } from 'formik'

let CheckField = ({desc, id}) => {
    return (
        <label className="CheckField">
            <Field name={id} className="checkfield-input" type="checkbox"/>
            <i className="fas fa-check checkfield-check"></i>
            <span className="checkfield-label">{desc}</span>
        </label>
    )
}

export default CheckField