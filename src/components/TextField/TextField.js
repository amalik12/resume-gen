import React, { Component } from 'react';
import './TextField.css';
import Tag from '../Tag';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {focused: false, touched: false};

    this.focusOn = this.focusOn.bind(this);
    this.focusOff = this.focusOff.bind(this);
    this.getErrorText = this.getErrorText.bind(this);

    this.input = React.createRef();
  }

  focusOn() {
    this.setState({ focused : true });
  }

  focusOff() {
    this.setState({ focused: false, touched: true, errorText: this.getErrorText(this.input.current.validity) });
  }

  getErrorText(validity) {
    if (validity.valueMissing) {
      return "This field is required"
    }
    return ""
  }

  componentDidUpdate(prevProps) {
    console.log('update')
    if (this.props.errorText !== prevProps.errorText) {
      this.setState({errorText: this.getErrorText(this.input.current.validity)})
    }
  }

  render() {
    let type;
    if (this.props.password) {
      type = 'password'
    }
    else if (this.props.number) {
      type = 'number' 
    }
    
    return (
      <div className={"textfield" + (this.state.focused ? " focused" : "") + (this.props.tagInput ? ' tags' : ' text') + (this.props.inline ? ' inline' : '') + (this.props.large ? " large" : "") + (this.props.errorText ? " invalid" : "") + (this.props.disabled ? " disabled" : "")}>
        {this.props.desc && <span className="textfield-desc">{this.props.desc}</span>}
        {this.props.tagInput && <div className="textfield-tags">{this.props.tags.map((item, index) => <Tag onClick={() => this.props.tagAction(index)}>{item}</Tag>)}</div>}
        <input name={this.props.id} id={this.props.id} ref={this.input} disabled={this.props.disabled} placeholder={this.props.float ? '' : this.props.label} onKeyDown={this.props.onKeyDown} className={"textfield-input" + (this.state.touched ? " touched" : "")} type={type} value={this.props.value} onChange={this.props.handleChange} onFocus={this.focusOn} onBlur={this.focusOff} {...this.props.validation} />
        {this.props.float && <label className={"textfield-label"  + (this.state.focused ? " focused" : "") + (this.props.value ? " has-input" : "")} htmlFor={this.props.id}>{this.props.label}</label>}
        <span className="textfield-error">{this.state.errorText}</span>
      </div>
    );
  }
}

TextField.defaultProps = {
  float: true
};

export default TextField;