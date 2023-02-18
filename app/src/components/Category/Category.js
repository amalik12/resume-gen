import React, { useEffect } from 'react';
import './Category.css';
import Position from '../Position/Position';
import { ModalContext } from '../ModalProvider/ModalProvider';
import ExperienceModal from '../ExperienceModal';
import EducationModal from '../EducationModal';
import ProjectsModal from '../ProjectsModal/ProjectsModal';

function Category({ catTitle, items, setItems, hiddenIds }) {
  useEffect(() => {
    fetch(`/api/v1/${catTitle}`)
      .then((result) => result.json())
      .then((json) => setItems(json))
      .catch((err) => console.error(err));
  }, [setItems, catTitle]);

  const ModalConsumer = ModalContext.Consumer;

  const titleToModal = {
    positions: ExperienceModal,
    education: EducationModal,
    projects: ProjectsModal,
  };

  return (
    <ModalConsumer>
      {({ showModal }) => (
        <div className="Category">
          <div className="category-title">
            <span>{catTitle === 'positions' ? 'experience' : catTitle}</span>
            <i
              className="add-icon fa-solid fa-plus"
              onClick={() =>
                showModal(titleToModal[catTitle], {
                  updateData: setItems,
                  edit: false,
                })
              }
            />
          </div>
          {items.map((item) => {
            const { startDate, endDate, ...newProps } = item;
            const start = new Date(item.startDate);
            let end = null;
            if (item.endDate != null) {
              end = new Date(item.endDate);
            }
            return (
              <Position
                key={item.id}
                startDate={start}
                endDate={end}
                catTitle={catTitle}
                updateData={setItems}
                {...newProps}
                type={catTitle}
                hiddenIds={hiddenIds}
              />
            );
          })}
        </div>
      )}
    </ModalConsumer>
  );
}

export default Category;
