import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {focused: false};

    this.focusOn = this.focusOn.bind(this);
    this.focusOff = this.focusOff.bind(this);
  }

  focusOn() {
    this.setState({ focused : true });
  }

  focusOff() {
    this.setState({ focused : false });
  }

  render() {
    return (
      <div className={"textfield" + (this.props.inline ? ' inline' : '') + (this.props.large ? " large" : "") + (this.props.errorText ? " invalid" : "") + (this.props.disabled ? " disabled" : "")}>
        <input name={this.props.label} id={this.props.id} disabled={this.props.disabled} placeholder={this.props.float ? '' : this.props.label} onKeyPress={this.props.onKeyPress} className={"textfield-input"} type={this.props.password ? 'password' : ''} value={this.props.value} onChange={this.props.handleChange} onFocus={this.focusOn} onBlur={this.focusOff}/>
        {this.props.float && <label className={"textfield-label"  + (this.state.focused ? " focused" : "") + (this.props.value ? " has-input" : "")} htmlFor={this.props.id}>{this.props.label}</label>}
        <span className="textfield-error">{this.props.errorText}</span>
      </div>
    );
  }
}

TextField.defaultProps = {
  float: true
};

export default TextField;