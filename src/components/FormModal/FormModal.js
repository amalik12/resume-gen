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
                    {props.children}
                </div>
                <div className="modal-footer">
                    <Button onClick={props.submit} loading={props.loading} enabled={props.enabled} />
                    <Button label="Cancel" onClick={hideModal} buttonStyle="text"/>
                </div>
            </Modal>)}
        </ModalConsumer>
    );
}

export default FormModal;