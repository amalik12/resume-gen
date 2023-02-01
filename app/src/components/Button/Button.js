import React from "react";
import "./Button.css";

function Button(props) {
  const loader = <div className="loader">Loading...</div>;
  return (
    <button
      type={props.submit ? "submit" : "button"}
      onClick={props.onClick}
      className={`button ${props.buttonStyle}${
        props.modal ? " button-modal" : ""
      }`}
      disabled={!props.enabled}
    >
      {props.loading ? loader : props.children || props.label}
    </button>
  );
}

Button.defaultProps = {
  label: "Save",
  enabled: true,
  buttonStyle: "primary",
};

export default Button;
