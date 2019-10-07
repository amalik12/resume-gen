import React from 'react'
import './EditButton.css'

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mouse: false };
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
    }
    
    mouseDown() {
        this.setState({mouse: true});
    }

    mouseUp() {
        this.setState({mouse: false});
    }

    render() {
        const { className } = this.props;
        return (
            <i className={(className ? className : '') + ' ' + (this.state.mouse && 'active') + " edit-icon fas fa-pen"} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onMouseLeave={this.mouseUp}></i>
        )
    }
}

export default EditButton