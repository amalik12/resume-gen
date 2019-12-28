import React from 'react';
import './Tag.css';

let Tag = (props) => {
    return (
        <div className={"Tag " + (props.onClick ? "clickable" : "")} onClick={props.onClick}>{props.children} {props.onClick && <i className="fas fa-times tag-close"></i>}</div>
    );
}

export default Tag;