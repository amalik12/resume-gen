import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import Modal from '../Modal';
import FormFooter from '../FormFooter';
import { ProfileSchema } from '../../form-schemas';
import { ModalContext } from '../ModalProvider/ModalProvider';

const ModalConsumer = ModalContext.Consumer;

function ProfileModal({ initial, update }) {
  let initialValues = {
    name: '',
    website: '',
    email: '',
    github: '',
    location: '',
  };

  if (initial !== undefined) {
    initialValues = { ...initialValues, ...initial };
  }

  return (
    <ModalConsumer>
      {({ isOpen, hideModal }) => (
        <Modal showModal={isOpen} submitted={false} title="Edit Profile">
          <Formik
            initialValues={initialValues}
            validationSchema={ProfileSchema}
            onSubmit={(values, { setSubmitting }) => {
              update((prev) => ({ ...prev, ...values }));
              setSubmitting(false);
              hideModal();
            }}
          >
            {({ isValid }) => (
              <Form className="modal-inner">
                <div className="modal-body">
                  <div className="modal-body-content">
                    <div className="form-row profile">
                      <TextField label="Full name" id="name" fixed />
                    </div>
                    <div className="form-row profile">
                      <TextField label="Website" id="website" inline fixed />
                      <TextField
                        label="Email address"
                        id="email"
                        inline
                        fixed
                      />
                    </div>
                    <div className="form-row profile">
                      <TextField label="Location" id="location" inline fixed />
                      <TextField
                        label="Github username"
                        id="github"
                        inline
                        fixed
                      />
                    </div>
                  </div>
                </div>
                <FormFooter
                  loading={false}
                  enabled={isValid}
                  delete={false}
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
export default ProfileModal;
