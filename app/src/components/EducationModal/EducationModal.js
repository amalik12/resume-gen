import React from 'react';
import TextField from '../TextField';
import SelectField from '../SelectField';
import TagInput from '../TagInput';
import TextBox from '../TextBox';
import Modal from '../Modal';
import FormFooter from '../FormFooter';
import { EducationSchema } from '../../form-schemas';
import { Formik, Form } from 'formik';
import { ModalContext } from '../ModalProvider/ModalProvider';
import { deleteItem, updateItem, createItem } from '../../db-actions';


const ModalConsumer = ModalContext.Consumer;

let EducationModal = ({edit, initial, updateData, id}) => {
    const months = ['Month', 'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let initialValues = {
        school: '', degree: '', major: '', startMonth: 0, startYear: '', 
        endMonth: 0, endYear: '', description: '', tags: []
    }

    if (initial !== undefined) {
        initialValues = {...initialValues, ...initial}
    }

    return (
        <ModalConsumer>
            {({ isOpen, hideModal }) => (<Modal showModal={isOpen} submitted={false} title={(edit ? "Edit" : "Add") + " Education"}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={EducationSchema}
                    validateOnMount={true}
                    onSubmit={(values, actions) => {
                        let { startYear, startMonth, endYear, endMonth, ...output } = values;
                        output.startDate = new Date(values.startYear, values.startMonth - 1);
                        output.endDate = new Date(values.endYear, values.endMonth - 1);
                        
                        if (edit) {
                            output.id = id;
                            updateItem(id, 'education', output)
                            .then(result => {
                                updateData(prevData => prevData.map(item => {if (item.id === id) return output; return item}));
                                actions.setSubmitting(false);
                                hideModal();
                            })
                        } else {
                            createItem('education', output)
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
                                        <TextField label="School name" id="school" inline={true} />
                                    </div>
                                    <div className="form-row">
                                        <TextField label="Degree" id="degree" inline={true} />
                                        <TextField label="Major" id="major" inline={true} />
                                    </div>
                                    <div className="form-row">
                                        <SelectField name="Start date" id="startMonth" options={months} />
                                        <TextField label="Year" id="startYear" inline={true} />   
                                    </div>
                                    <div className="form-row">
                                        <SelectField name="End date (or expected)" id="endMonth" options={months} />
                                        <TextField label="Year" id="endYear" inline={true} />
                                    </div>
                                    <TagInput label="Skills" id="tags" desc="Separate skils with commas" />
                                    <TextBox label="Description" desc="Each line break will be bulleted separately" id="description" />
                                </div>
                            </div>
                            <FormFooter loading={false} enabled={isValid} delete={edit} onDelete={() => deleteItem(id, 'education')
                            .then(result => {
                                updateData(prevData => prevData.filter(item => item.id !== id));
                                hideModal();
                            })} hide={hideModal}/>
                        </Form>
                    )}
                </Formik>
            </Modal>)}
        </ModalConsumer>
    )
}
export default EducationModal;