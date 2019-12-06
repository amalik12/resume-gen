import React from 'react';
import TextField from '../TextField';
import Modal from '../Modal';
import FormFooter from '../FormFooter';
import { ProfileSchema } from '../../form-schemas';
import { Formik, Form } from 'formik';
import { ModalContext } from '../ModalProvider/ModalProvider';


const ModalConsumer = ModalContext.Consumer;

let ProfileModal = ({ initial }) => {

    let initialValues = {
        name: '', website: '', email: '', github: '', location: ''
    }

    if (initial !== undefined) {
        initialValues = { ...initialValues, ...initial }
    }

    return (
        <ModalConsumer>
            {({ isOpen, hideModal }) => (<Modal showModal={isOpen} submitted={false} title="Edit Profile">
                <Formik
                    initialValues={initialValues}
                    validationSchema={ProfileSchema}
                >
                    {({ isValid }) => (
                        <Form className="modal-inner">
                            <div className="modal-body">
                                <div className="modal-body-content">
                                    <div className="form-row profile">
                                        <TextField label="Full name" id="name" fixed={true}/>
                                    </div>
                                    <div className="form-row profile">
                                        <TextField label="Website" id="website" inline={true} fixed={true}/>
                                        <TextField label="Email address" id="email" inline={true} fixed={true}/>
                                    </div>
                                    <div className="form-row profile">
                                        <TextField label="Location" id="location" inline={true} fixed={true}/>
                                        <TextField label="Github username" id="github" inline={true} fixed={true}/>
                                    </div>
                                </div>
                            </div>
                            <FormFooter loading={false} enabled={isValid} delete={false} hide={hideModal} />
                        </Form>
                    )}
                </Formik>
            </Modal>)}
        </ModalConsumer>
    )
}
export default ProfileModal;