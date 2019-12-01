import React from 'react'
import './Position.css'
import Tag from '../Tag';
import EditButton from '../EditButton';
import { ModalContext } from '../ModalProvider/ModalProvider';

const ModalConsumer = ModalContext.Consumer;

let Position = ({ title, company, startDate, endDate, tags, description }) => {
    let descItems = description.split('\n')
    let options = { year: 'numeric', month: 'short' }
    return (
        <div className="Position">
            <EditButton className="position-edit-button" />
            <div className="position-info">
            <span className="position-title">{title} at </span><span className="position-company">{company}</span>
            </div>
            <div className="position-dates">{startDate.toLocaleDateString(undefined, options) + " - " + (endDate ? endDate.toLocaleDateString(options) : "Present")}</div>
            {tags.map((item) => <Tag key={item}>{item}</Tag>)}
            <ul className="position-description-container">
                {descItems.map((item, index) => <li key={index} className="position-description">{item}</li>)}
            </ul>
        </div>
    )
}

export default Position