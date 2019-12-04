import React from 'react';
import './TextBox.css';
import { Field } from 'formik';

let TextBox = (props) => {
  return (
    <div className="textbox">
      <div className="textbox-header">
        <label className="textbox-label" htmlFor={props.id}>{props.label}</label>
        {props.desc && <span className="textbox-desc">{props.desc}</span>}
      </div>
      <Field as="textarea" name={props.id} id={props.id} disabled={props.disabled} className="textbox-input"/>
    </div>
  );
}

export default TextBox;