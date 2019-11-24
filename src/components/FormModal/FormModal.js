import React from 'react';
import Modal from '../Modal';
import Button from '../Button';
import { ModalContext } from '../ModalProvider/ModalProvider';

const ModalConsumer = ModalContext.Consumer;

let FormModal = (props) => {
    return (
        <ModalConsumer>
            {({hideModal}) =>
            (<Modal showModal={props.showModal} dismissable={false} submitted={props.submitted} title={props.title}>
                <div className="modal-body">
                    <div className="modal-body-content">
                    {props.children}
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
            </Modal>)}
        </ModalConsumer>
    );
}

export default FormModal;