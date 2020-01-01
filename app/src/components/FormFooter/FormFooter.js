import React from 'react';
import Button from '../Button';

let FormFooter = (props) => {
    return (
        <div className="modal-footer modal-block">
            <Button submit={true} loading={props.loading} enabled={props.enabled} />
            <Button label="Cancel" onClick={props.hide} buttonStyle="text" />
            {props.delete &&
                <div className="modal-delete-button">
                    <Button label="Delete" onClick={props.onDelete} buttonStyle="outline delete" />
                </div>}
        </div>
    )
}

export default FormFooter;