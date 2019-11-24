import React from 'react';
import './Button.css';

let Button = (props) => {
    const loader = <div className="loader">Loading...</div>;
    return (
        <button type={props.submit && "submit"} onClick={props.onClick} className={'button ' + (props.buttonStyle) + (props.modal ? ' button-modal' : '') + (props.enabled ? '' : ' disabled')}>{props.loading ? loader : props.label}</button>
    );
}

Button.defaultProps = {
    label: 'Save',
    enabled: true,
    buttonStyle: 'primary'
};

export default Button;