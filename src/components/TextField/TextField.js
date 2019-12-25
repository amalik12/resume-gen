import React, { useState } from 'react';
import './TextField.css';
import Tag from '../Tag';
import { useField } from 'formik';

let TextField = (props) => {
  let type;
  if (props.password) {
    type = 'password'
  }
  else if (props.number) {
    type = 'number' 
  }

  const [focused, setFocused] = useState(false)
  const [field, meta] = useField(props.id)
  return (
    <div className={"textfield" + (focused ? " focused" : "") + (props.tagInput ? ' tags' : ' text') + (props.inline ? ' inline' : '') + (props.large ? " large" : "") + (meta.touched && meta.error ? " invalid" : "") + (props.disabled ? " disabled" : "")}>
      {props.desc && <span className="textfield-desc">{props.desc}</span>}
      {props.tagInput && <div className="textfield-tags">{props.tags.map((item, index) => <Tag onClick={() => props.tagAction(index)}>{item}</Tag>)}</div>}
      <input {...field} disabled={props.disabled} placeholder={props.float ? '' : props.label} onKeyDown={props.onKeyDown} className={"textfield-input"} type={type} onFocus={() => setFocused(true)} onBlur={(e) => { setFocused(false); field.onBlur(e) }}/>
      {props.float && <label className={"textfield-label"  + (props.fixed ? " fixed" : "") + (focused ? " focused" : "") + (field.value ? " has-input" : "")} htmlFor={props.id}>{props.label}</label>}
      <span className={"textfield-error" + (props.fixed ? " fixed" : "")}>{meta.touched && meta.error}</span>
    </div>
  );
}

TextField.defaultProps = {
  float: true
};

export default TextField;