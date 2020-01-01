import React from 'react';
import TextField from '../TextField';
import SelectField from '../SelectField';
import CheckField from '../CheckField';
import TagInput from '../TagInput';
import TextBox from '../TextBox';
import Modal from '../Modal';
import FormFooter from '../FormFooter';
import { ExperienceSchema } from '../../form-schemas';
import { Formik, Form } from 'formik';
import { ModalContext } from '../ModalProvider/ModalProvider';


const ModalConsumer = ModalContext.Consumer;

let ExperienceModal = ({edit, initial, id}) => {
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
            {({ isOpen, hideModal }) => (<Modal showModal={isOpen} submitted={false} title={(edit ? "Edit" : "Add") + " Experience"}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ExperienceSchema}
                    validateOnMount={true}
                    onSubmit={(values, actions) => {
                        let { startYear, startMonth, endYear, endMonth, ...output } = values;
                        output.startDate = new Date(values.startYear, values.startMonth - 1);
                        if (!values.current) {
                            output.endDate = new Date(values.endYear, values.endMonth - 1);
                        }
                        var myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        if (edit) {
                            
                        } else {
                            fetch('/api/v1/positions', { method: 'POST', body: JSON.stringify(output), headers: myHeaders })
                            .then(result => {
                                actions.setSubmitting(false);
                                hideModal();
                            })
                        }
                    }}
                >
                    {({ values, isValid, isSubmitting }) => (
                        <Form className="modal-inner">
                            <div className="modal-body">
                                <div className="modal-body-content">
                                    <div className="form-row">
                                        <TextField label="Company name" id="company" inline={true} />
                                        <TextField label="Title" id="title" inline={true} />
                                    </div>
                                    <div className="form-row">
                                        <SelectField name="Start date" id="startMonth" options={months} />
                                        <TextField label="Year" id="startYear" inline={true} />
                                        <div className="form-divider" />
                                        <SelectField name="End date" id="endMonth" options={months} disabled={values.current} />
                                        <TextField label="Year" id="endYear" inline={true} disabled={values.current} />
                                    </div>
                                    <div className="form-row">
                                        <CheckField desc="I'm currently working here" id="current" />
                                    </div>
                                    <TagInput label="Skills" id="tags" desc="Separate skils with commas" />
                                    <TextBox label="Description" desc="Each line break will be bulleted separately" id="description" />
                                </div>
                            </div>
                            <FormFooter loading={isSubmitting} enabled={isValid} delete={edit} hide={hideModal}/>
                        </Form>
                    )}
                </Formik>
            </Modal>)}
        </ModalConsumer>
    )
}
export default ExperienceModal;