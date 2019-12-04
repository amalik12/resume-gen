import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css';

let Modal = (props) => {
    return (
        <ReactModal
        isOpen={props.showModal}
        overlayClassName="modal-overlay"
        className={"modal" + (props.submitted ? " confirm" : "")}
        closeTimeoutMS={150}
        onRequestClose={props.dismiss}
        shouldCloseOnOverlayClick={props.dismiss !== undefined}>
            <div className="modal-header modal-block">
                <span className="modal-title">{props.title}</span>
                {props.dismiss && <i onClick={props.dismiss} className="modal-close material-icons">close</i>}
            </div>
            {props.children}
        </ReactModal>
    );
}

export default Modal;