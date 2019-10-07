import React from 'react'
import './Position.css'
import Tag from '../Tag';

class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hover: false };
    }

    // toggleHover() {
    //     this.setState({ hover: !this.state.hover });
    // }

    disableHover() {}
    render() {
        const { title, company, startDate, endDate, tags, description } = this.props;
        let descItems = description.split('\n')
        return (
            <div className="Position">
                <i class="edit-icon fas fa-pen"></i>
                <div className="position-info">
                <span className="position-title">{title} at </span><span className="position-company">{company}</span>
                </div>
                <div className="position-dates">{startDate + " - " + endDate}</div>
                {tags.map((item) => <Tag>{item}</Tag>)}
                <ul className="position-description-container">
                    {descItems.map((item) => <li className="position-description">{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default Position