import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import SelectField from '../SelectField';
import TagInput from '../TagInput';
import TextBox from '../TextBox';
import Modal from '../Modal';
import FormFooter from '../FormFooter';
import { ModalContext } from '../ModalProvider/ModalProvider';
import { ProjectSchema } from '../../form-schemas';
import { updateItem, createItem, deleteItem } from '../../db-actions';
import CheckField from '../CheckField';

const ModalConsumer = ModalContext.Consumer;

function ProjectsModal({ edit, initial, updateData, id }) {
  const months = [
    'Month',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let initialValues = {
    name: '',
    website: '',
    startMonth: 0,
    startYear: '',
    endMonth: 0,
    endYear: '',
    hasEndDate: false,
    current: false,
    description: '',
    tags: [],
  };

  if (initial !== undefined) {
    initialValues = { ...initialValues, ...initial };
    initialValues.hasEndDate = initial.hasEndDate || false;
  }

  return (
    <ModalConsumer>
      {({ isOpen, hideModal }) => (
        <Modal
          showModal={isOpen}
          submitted={false}
          title={`${edit ? 'Edit' : 'Add'} Project`}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={ProjectSchema}
            validateOnMount
            onSubmit={(values, actions) => {
              const { startYear, startMonth, endYear, endMonth, ...output } =
                values;
              output.startDate = new Date(
                values.startYear,
                values.startMonth - 1
              );

              if (values.hasEndDate && !values.current) {
                output.endDate = new Date(values.endYear, values.endMonth - 1);
              } else {
                output.endDate = null;
              }

              if (edit) {
                output.id = id;
                updateItem(id, 'projects', output).then(() => {
                  updateData((prevData) =>
                    prevData.map((item) => {
                      if (item.id === id) return output;
                      return item;
                    })
                  );
                  actions.setSubmitting(false);
                  hideModal();
                });
              } else {
                createItem('projects', output).then((result) => {
                  updateData((prevData) => [...prevData, result]);
                  actions.setSubmitting(false);
                  hideModal();
                });
              }
            }}
          >
            {({ isValid, values }) => (
              <Form className="modal-inner">
                <div className="modal-body">
                  <div className="modal-body-content">
                    <div className="form-row">
                      <TextField label="Project name" id="name" inline />
                      <TextField label="Website" id="website" inline />
                    </div>
                    <div className="form-row">
                      <SelectField
                        name={values.hasEndDate ? 'Start date' : 'Release date'}
                        id="startMonth"
                        options={months}
                      />
                      <TextField label="Year" id="startYear" inline />
                      {values.hasEndDate && (
                        <>
                          <div className="form-divider" />
                          <SelectField
                            name="Release date"
                            id="endMonth"
                            options={months}
                            disabled={values.current}
                          />
                          <TextField
                            label="Year"
                            id="endYear"
                            disabled={values.current}
                            inline
                          />
                        </>
                      )}
                    </div>
                    <div className="form-row">
                      <CheckField desc="Include a start date" id="hasEndDate" />
                    </div>
                    {values.hasEndDate && (
                      <div className="form-row">
                        <CheckField
                          desc="I'm currently working on this"
                          id="current"
                        />
                      </div>
                    )}
                    <TagInput
                      label="Skills"
                      id="tags"
                      desc="Separate skils with commas"
                    />
                    <TextBox
                      label="Description"
                      desc="Each line break will be bulleted separately"
                      id="description"
                    />
                  </div>
                </div>
                <FormFooter
                  loading={false}
                  enabled={isValid}
                  delete={edit}
                  hide={hideModal}
                  onDelete={() =>
                    deleteItem(id, 'projects').then(() => {
                      updateData((prevData) =>
                        prevData.filter((item) => item.id !== id)
                      );
                      hideModal();
                    })
                  }
                />
              </Form>
            )}
          </Formik>
        </Modal>
      )}
    </ModalConsumer>
  );
}
export default ProjectsModal;
