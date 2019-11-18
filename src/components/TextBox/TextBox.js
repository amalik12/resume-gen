import React from 'react';
import './TextBox.css';

let TextBox = (props) => {
  return (
    <div className="textbox">
      <div className="textbox-header">
        <label className="textbox-label" htmlFor={props.id}>{props.label}</label>
        {props.desc && <span className="textbox-desc">{props.desc}</span>}
      </div>
      <textarea name={props.label} id={props.id} disabled={props.disabled} className="textbox-input" value={props.value} onChange={props.handleChange}/>
    </div>
  );
}

export default TextBox;