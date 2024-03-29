import React from "react";
import { Formik, Form } from "formik";
import TextField from "../TextField";
import SelectField from "../SelectField";
import CheckField from "../CheckField";
import TagInput from "../TagInput";
import TextBox from "../TextBox";
import Modal from "../Modal";
import FormFooter from "../FormFooter";
import { ExperienceSchema } from "../../form-schemas";
import { ModalContext } from "../ModalProvider/ModalProvider";
import { deleteItem, updateItem, createItem } from "../../db-actions";

const ModalConsumer = ModalContext.Consumer;

function ExperienceModal({ edit, initial, updateData, id }) {
  const months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let initialValues = {
    company: "",
    title: "",
    startMonth: 0,
    startYear: "",
    endMonth: 0,
    endYear: "",
    current: false,
    description: "",
    tags: [],
  };

  if (initial !== undefined) {
    initialValues = { ...initialValues, ...initial };
  }

  return (
    <ModalConsumer>
      {({ isOpen, hideModal }) => (
        <Modal
          showModal={isOpen}
          submitted={false}
          title={`${edit ? "Edit" : "Add"} Experience`}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={ExperienceSchema}
            validateOnMount
            onSubmit={(values, actions) => {
              const { startYear, startMonth, endYear, endMonth, ...output } =
                values;
              output.startDate = new Date(
                values.startYear,
                values.startMonth - 1
              );
              if (!values.current) {
                output.endDate = new Date(values.endYear, values.endMonth - 1);
              } else {
                output.endDate = null;
              }
              if (edit) {
                output.id = id;
                updateItem(id, "positions", output).then((result) => {
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
                createItem("positions", output).then((result) => {
                  updateData((prevData) => [...prevData, result]);
                  actions.setSubmitting(false);
                  hideModal();
                });
              }
            }}
          >
            {({ values, isValid, isSubmitting }) => (
              <Form className="modal-inner">
                <div className="modal-body">
                  <div className="modal-body-content">
                    <div className="form-row">
                      <TextField label="Title" id="title" inline />
                      <TextField label="Company name" id="company" inline />
                    </div>
                    <div className="form-row">
                      <SelectField
                        name="Start date"
                        id="startMonth"
                        options={months}
                      />
                      <TextField label="Year" id="startYear" inline />
                      <div className="form-divider" />
                      <SelectField
                        name="End date"
                        id="endMonth"
                        options={months}
                        disabled={values.current}
                      />
                      <TextField
                        label="Year"
                        id="endYear"
                        inline
                        disabled={values.current}
                      />
                    </div>
                    <div className="form-row">
                      <CheckField
                        desc="I'm currently working here"
                        id="current"
                      />
                    </div>
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
                  loading={isSubmitting}
                  enabled={isValid}
                  delete={edit}
                  onDelete={() =>
                    deleteItem(id, "positions").then((result) => {
                      updateData((prevData) =>
                        prevData.filter((item) => item.id !== id)
                      );
                      hideModal();
                    })
                  }
                  hide={hideModal}
                />
              </Form>
            )}
          </Formik>
        </Modal>
      )}
    </ModalConsumer>
  );
}
export default ExperienceModal;
