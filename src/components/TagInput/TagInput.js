import React from 'react'
import { FieldArray } from 'formik';
import Tag from '../Tag';

class TagInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleTags = this.handleTags.bind(this);
        this.state = { focused: false };
    }

    handleTags(event, arrayHelpers) {
        if (event.key === ',' && event.target.value) {
            arrayHelpers.push(event.target.value)
            event.target.value = ''
            event.preventDefault()
        } else if (event.key === 'Backspace' && !event.target.value) {
            arrayHelpers.pop()
        }
    }

    render() {
        return (
            <FieldArray name={this.props.id}>
                {(arrayHelpers) => (
                <div className={"textfield tags" + (this.props.disabled ? " disabled" : "") + (this.state.focused ? " focused" : "")}>
                    {this.props.desc && <span className="textfield-desc">{this.props.desc}</span>}
                    <div className="textfield-tags">{this.props.values.map((item, index) => <Tag onClick={() => arrayHelpers.remove(index)}>{item}</Tag>)}</div>
                    <input disabled={this.props.disabled} placeholder={this.props.values.length ? '' : this.props.label} onFocus={() => this.setState({ focused: true })} onBlur={(e) => this.setState({ focused: false })} onKeyDown={(e) => this.handleTags(e, arrayHelpers)} className={"textfield-input"} />
                </div>
                )}
            </FieldArray>
        )
    }
}

export default TagInput