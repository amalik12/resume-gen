import React, { useState } from 'react';
import FormModal from '../FormModal';
import TextField from '../TextField';
import { ModalContext } from '../ModalProvider/ModalProvider';

const ModalConsumer = ModalContext.Consumer;

function useInput(name) {
    const [value, setValue] = useState("");
    const input = <TextField label={name} value={value} handleChange={e => setValue(e.target.value)} />
    return [value, input];
}

let ExperienceModal = ({edit}) => {
    const [company, companyInput] = useInput("Company name");
    const [title, titleInput] = useInput("Title");

    return (
        <ModalConsumer>
        {({isOpen}) =>
            (<FormModal title={(edit ? "Edit" : "Add") + " Experience"} showModal={isOpen} loading={false} enabled={true}>
                {companyInput}
                {titleInput}
            </FormModal>)
        }
        </ModalConsumer>
    );
}

export default ExperienceModal;