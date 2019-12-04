import React from 'react';
import Modal from '../Modal';
import Button from '../Button';
import { ModalContext } from '../ModalProvider/ModalProvider';
import { Form } from 'formik';

const ModalConsumer = ModalContext.Consumer;

let FormModal = (props) => {
    return (
        <ModalConsumer>
            {({isOpen, hideModal}) =>
            (<Modal showModal={isOpen} dismissable={false} submitted={props.submitted} title={props.title}>
                <Formik
                    initialValues={props.initial}
                    validationSchema={props.schema}
                >
                    {({ values }) => (
                        <Form className="modal-inner">
                            <div className="modal-body">
                                <div className="modal-body-content">
                                    {props.children(values)}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button submit={true} loading={props.loading} enabled={props.enabled} />
                                <Button label="Cancel" onClick={hideModal} buttonStyle="text"/>
                                {props.delete &&
                                <div className="modal-delete-button">
                                    <Button label="Delete" onClick={props.delete} buttonStyle="outline delete" />
                                </div>}
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>)}
        </ModalConsumer>
    );
}

export default FormModal;