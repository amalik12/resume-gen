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


const ModalConsumer = ModalContext.Consumer;

let ProjectsModal = ({edit, initial}) => {
    const months = ['Month', 'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let initialValues = {
        company: '', title: '', startMonth: 0, startYear: '', 
        endMonth: 0, endYear: '', current: false, description: '', tags: []
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
                >
                    {({ values, isValid }) => (
                        <Form className="modal-inner">
                            <div className="modal-body">
                                <div className="modal-body-content">
                                    <div className="form-row">
                                        <TextField label="Project name" id="company" inline={true} />
                                        <TextField label="Website" id="website" inline={true} />
                                    </div>
                                    <div className="form-row">
                                        <SelectField name="Start date" id="startMonth" options={months} />
                                        <TextField label="Year" id="startYear" inline={true} />
                                    </div>
                                    <TagInput label="Skills" id="tags" values={values.tags} desc="Separate skils with commas" />
                                    <TextBox label="Description" desc="Each line break will be bulleted separately" id="description" />
                                </div>
                            </div>
                            <FormFooter loading={false} enabled={isValid} delete={edit} hide={hideModal}/>
                        </Form>
                    )}
                </Formik>
            </Modal>)}
        </ModalConsumer>
    )
}
export default ProjectsModal;