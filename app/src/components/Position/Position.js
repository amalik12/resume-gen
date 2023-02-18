import React, { useEffect, useState } from 'react';
import './Position.css';
import Tag from '../Tag';
import EditButton from '../EditButton';
import { ModalContext } from '../ModalProvider/ModalProvider';
import ExperienceModal from '../ExperienceModal';
import EducationModal from '../EducationModal';
import ProjectsModal from '../ProjectsModal/ProjectsModal';

const ModalConsumer = ModalContext.Consumer;

function Position({
  startDate,
  endDate,
  id,
  createdAt,
  updatedAt,
  updateData,
  hiddenIds,
  catTitle,
  ...props
}) {
  const [hidden, setHidden] = useState(hiddenIds.current.has(id));
  const descItems = props.description.split('\n');
  const options = { year: 'numeric', month: 'short', timeZone: 'UTC' };
  let modal = null;
  const display = {
    title: '',
    org: '',
    tags: [],
  };

  useEffect(() => {
    if (!hidden) {
      hiddenIds.current.delete(id);
    } else {
      hiddenIds.current.add(id);
    }
    localStorage.setItem(
      `${catTitle}-hidden`,
      JSON.stringify([...hiddenIds.current])
    );
  }, [hidden, id, hiddenIds]);

  switch (props.type) {
    case 'positions':
      modal = ExperienceModal;
      display.title = props.title;
      display.org = props.company;
      display.tags = props.tags;
      break;
    case 'education':
      modal = EducationModal;
      display.title = `${props.degree}, ${props.major}`;
      display.org = props.school;
      display.tags = props.tags;
      break;
    case 'projects':
      modal = ProjectsModal;
      display.title = props.name;
      display.tags = props.tags;
      break;
    default:
      break;
  }

  const info = { ...props };
  info.startMonth = startDate.getUTCMonth() + 1;
  info.startYear = startDate.getUTCFullYear();

  let hasEndDate;
  if (info.hasEndDate === undefined) {
    hasEndDate = true;
  } else if (info.hasEndDate === null) {
    hasEndDate = false;
  } else {
    hasEndDate = info.hasEndDate;
  }

  if (hasEndDate) {
    if (endDate) {
      info.endMonth = endDate.getUTCMonth() + 1;
      info.endYear = endDate.getUTCFullYear();
    } else {
      info.current = true;
    }
  }

  return (
    <ModalConsumer>
      {({ showModal }) => (
        <div className={`Position ${hidden ? 'hidden' : ''}`}>
          <EditButton
            className="position-edit-button"
            onClick={() =>
              showModal(modal, {
                edit: true,
                initial: info,
                id,
                updateData,
              })
            }
          />
          <EditButton
            className="position-hide-button"
            onClick={() => setHidden((prevHidden) => !prevHidden)}
            icon={hidden ? 'fas fa-eye' : 'fas fa-eye-slash'}
          />
          <div className="position-info">
            <span className="position-title">
              {display.title}
              {props.type !== 'projects' && ' at '}
            </span>

            <span className="position-org">{display.org}</span>
          </div>
          <div className="position-dates">
            {startDate.toLocaleDateString(undefined, options)}
            {hasEndDate &&
              `${` - ${
                endDate
                  ? endDate.toLocaleDateString(undefined, options)
                  : 'Present'
              }`}`}
          </div>
          {display.tags.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
          <ul className="position-description-container">
            {descItems.map(
              (item, index) =>
                item && (
                  <li key={index} className="position-description">
                    {item}
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </ModalConsumer>
  );
}

export default Position;
