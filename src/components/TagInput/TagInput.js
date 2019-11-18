import React from 'react'
import TextField from '../TextField'


class TagInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleTags = this.handleTags.bind(this);
    }

    handleTags(event) {
        if (event.key === ',' && event.target.value) {
            this.props.addTag(event.target.value)
            event.target.value = ''
            event.preventDefault()
        } else if (event.key === 'Backspace' && !event.target.value) {
            this.props.popTag(-1)
        }
    }

    render() {
        return (
            <TextField label="Skills" desc={this.props.desc} float={false} tagInput={true} tagAction={(index) => this.props.popTag(index)} onKeyDown={this.handleTags} tags={this.props.tags}/>
        )
    }
}

export default TagInput