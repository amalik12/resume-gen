import React from 'react';
import TextField from '../TextField';
import SelectField from '../SelectField';
import TagInput from '../TagInput';
import TextBox from '../TextBox';
import Modal from '../Modal';
import FormFooter from '../FormFooter';
import { Formik, Form } from 'formik';
import { ModalContext } from '../ModalProvider/ModalProvider';
import { ProjectSchema } from '../../form-schemas';
import { updateItem, createItem, deleteItem } from '../../db-actions';

const ModalConsumer = ModalContext.Consumer;

let ProjectsModal = ({edit, initial, updateData, id}) => {
    const months = ['Month', 'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let initialValues = {
        name: '', website: '', startMonth: 0, startYear: '', description: '', tags: []
    }

    if (initial !== undefined) {
        initialValues = {...initialValues, ...initial}
    }

    return (
        <ModalConsumer>
            {({ isOpen, hideModal }) => (<Modal showModal={isOpen} submitted={false} title={(edit ? "Edit" : "Add") + " Project"}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ProjectSchema}
                    validateOnMount={true}
                    onSubmit={(values, actions) => {
                        let { startYear, startMonth, ...output } = values;
                        output.startDate = new Date(values.startYear, values.startMonth - 1);
                        
                        if (edit) {
                            output.id = id;
                            updateItem(id, 'projects', output)
                            .then(result => {
                                updateData(prevData => prevData.map(item => {if (item.id === id) return output; return item}));
                                actions.setSubmitting(false);
                                hideModal();
                            })
                        } else {
                            createItem('projects', output)
                            .then(result => {
                                updateData(prevData => [...prevData, result]);
                                actions.setSubmitting(false);
                                hideModal();
                            })
                        }
                    }}
                >
                    {({ isValid }) => (
                        <Form className="modal-inner">
                            <div className="modal-body">
                                <div className="modal-body-content">
                                    <div className="form-row">
                                        <TextField label="Project name" id="name" inline={true} />
                                        <TextField label="Website" id="website" inline={true} />
                                    </div>
                                    <div className="form-row">
                                        <SelectField name="Release date" id="startMonth" options={months} />
                                        <TextField label="Year" id="startYear" inline={true} />
                                    </div>
                                    <TagInput label="Skills" id="tags" desc="Separate skils with commas" />
                                    <TextBox label="Description" desc="Each line break will be bulleted separately" id="description" />
                                </div>
                            </div>
                            <FormFooter loading={false} enabled={isValid} delete={edit} hide={hideModal} onDelete={() => deleteItem(id, 'projects')
                            .then(result => {
                                updateData(prevData => prevData.filter(item => item.id !== id));
                                hideModal();
                            })}/>
                        </Form>
                    )}
                </Formik>
            </Modal>)}
        </ModalConsumer>
    )
}
export default ProjectsModal;