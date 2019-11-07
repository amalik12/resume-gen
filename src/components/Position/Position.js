import React from 'react'
import './Position.css'
import Tag from '../Tag';
import EditButton from '../EditButton';

class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hover: false };
    }

    render() {
        const { title, company, startDate, endDate, tags, description } = this.props;
        let descItems = description.split('\n')
        return (
            <div className="Position">
                <EditButton className="position-edit-button" />
                <div className="position-info">
                <span className="position-title">{title} at </span><span className="position-company">{company}</span>
                </div>
                <div className="position-dates">{startDate + " - " + endDate}</div>
                {tags.map((item) => <Tag key={item}>{item}</Tag>)}
                <ul className="position-description-container">
                    {descItems.map((item, index) => <li key={index} className="position-description">{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default Position