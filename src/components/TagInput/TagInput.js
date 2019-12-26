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
        if (event.key === ',') {
            if (event.target.value.trim())
            {
                arrayHelpers.push(event.target.value.trim())
                event.target.value = ''
            }
            event.preventDefault()
        } else if (event.key === 'Backspace' && !event.target.value) {
            arrayHelpers.remove(this.props.values.length - 1)
        }
    }

    render() {
        return (
            <FieldArray name={this.props.id}>
                {(arrayHelpers) => (
                <div className="textfield-tags-container">
                    {this.props.desc && <span className="textfield-desc">{this.props.desc}</span>}
                    <div className={"textfield tags" + (this.props.disabled ? " disabled" : "") + (this.state.focused ? " focused" : "")}>
                        <div className="textfield-tags">{this.props.values.map((item, index) => <Tag key={item} onClick={() => arrayHelpers.remove(index)}>{item}</Tag>)}</div>
                        <input disabled={this.props.disabled} placeholder={this.props.values.length ? '' : this.props.label} onFocus={() => this.setState({ focused: true })} onBlur={(e) => this.setState({ focused: false })} onKeyDown={(e) => this.handleTags(e, arrayHelpers)} className={"textfield-input"} />
                    </div>
                </div>
                )}
            </FieldArray>
        )
    }
}

export default TagInput