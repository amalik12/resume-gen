import React from 'react'
import './Position.css'
import Tag from '../Tag';
import EditButton from '../EditButton';
import { ModalContext } from '../ModalProvider/ModalProvider';
import ExperienceModal from '../ExperienceModal/ExperienceModal';
import EducationModal from '../EducationModal/EducationModal';

const ModalConsumer = ModalContext.Consumer;

let Position = ({ startDate, endDate, ...props }) => {
    let descItems = props.description.split('\n')
    let options = { year: 'numeric', month: 'short' }
    let modal;
    switch (props.type) {
        case 'experience':
            modal = ExperienceModal;
            break;
        case 'education':
            modal = EducationModal;
            break;
        default:
            modal = null;
            break;
    }

    let info = {...props}
    info.startMonth = startDate.getMonth() + 1
    info.startYear = startDate.getFullYear()

    if (endDate) {
        info.endMonth = endDate.getMonth() + 1
        info.endYear = endDate.getFullYear()
    }
    else {
        info.current = true
    }

    return (
        <ModalConsumer>
        {({showModal}) => (
        <div className="Position">
            <EditButton className="position-edit-button" onClick={() => showModal(modal, { edit: true, initial: info })}/>
            <div className="position-info">
                <span className="position-title">{props.title} at </span><span className="position-company">{props.company}</span>
            </div>
            <div className="position-dates">{startDate.toLocaleDateString(undefined, options) + " - " + (endDate ? endDate.toLocaleDateString(undefined, options) : "Present")}</div>
            {props.tags.map((item) => <Tag key={item}>{item}</Tag>)}
            <ul className="position-description-container">
                {descItems.map((item, index) => <li key={index} className="position-description">{item}</li>)}
            </ul>
        </div>
        )}
        </ModalConsumer>
    )
}

export default Position