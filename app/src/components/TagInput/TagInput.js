import React from "react";
import { FieldArray } from "formik";
import Tag from "../Tag";

class TagInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleTags = this.handleTags.bind(this);
    this.state = { focused: false };
  }

  handleTags(event, push, remove, form) {
    if (event.type === "blur" || event.key === ",") {
      if (event.target.value.trim()) {
        push(event.target.value.trim().toLowerCase());
        event.target.value = "";
      }
      event.preventDefault();
    } else if (event.key === "Backspace" && !event.target.value) {
      remove(form.values[this.props.id].length - 1);
      setTimeout(() => {
        form.validateForm();
      }, 100);
    }
  }

  render() {
    return (
      <FieldArray name={this.props.id}>
        {({ push, remove, form }) => (
          <div className="textfield-tags-container">
            {this.props.desc && (
              <span className="textfield-desc">{this.props.desc}</span>
            )}
            <div
              className={`textfield tags${
                this.props.disabled ? " disabled" : ""
              }${this.state.focused ? " focused" : ""}`}
            >
              <div className="textfield-tags">
                {form.values[this.props.id].map((item, index) => (
                  <Tag
                    key={item}
                    onClick={() => {
                      remove(index);
                      setTimeout(() => {
                        form.validateForm();
                      }, 100);
                    }}
                  >
                    {item}
                  </Tag>
                ))}
              </div>
              <input
                disabled={this.props.disabled}
                placeholder={
                  form.values[this.props.id].length ? "" : this.props.label
                }
                onFocus={() => this.setState({ focused: true })}
                onBlur={(e) => {
                  this.setState({ focused: false });
                  this.handleTags(e, push, remove, form);
                }}
                onKeyDown={(e) => this.handleTags(e, push, remove, form)}
                className="textfield-input"
              />
            </div>
          </div>
        )}
      </FieldArray>
    );
  }
}

export default TagInput;
