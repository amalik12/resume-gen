import React from 'react';
import FormModal from '../FormModal';
import TextField from '../TextField';
import { ModalContext } from '../ModalProvider/ModalProvider';
import SelectField from '../SelectField';
import CheckField from '../CheckField';
import TagInput from '../TagInput';
import TextBox from '../TextBox';
import { Formik, Form } from 'formik';
import { ExperienceSchema } from '../../form-schemas';

const ModalConsumer = ModalContext.Consumer;

let ExperienceModal = ({edit, initial}) => {
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
        {({isOpen}) =>
            (<FormModal title={(edit ? "Edit" : "Add") + " Experience"} showModal={isOpen} loading={false} delete={edit} enabled={true}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ExperienceSchema}
                >
                    {({values}) => (
                    <Form>
                        <div className="form-row">
                            <TextField label="Company name" id="company" inline={true}/>
                            <TextField label="Title" id="title" inline={true} />
                        </div>
                        <div className="form-row">
                            <SelectField name="Start date" id="startMonth" options={months} />
                            <TextField label="Year" id="startYear" inline={true} />
                            <div className="form-divider"/>
                            <SelectField name="End date" id="endMonth" options={months} disabled={values.current} />
                            <TextField label="Year" id="endYear" inline={true} disabled={values.current}/>
                        </div>
                        <div className="form-row">
                            <CheckField desc="I'm currently working here" id="current"/>
                        </div>
                        <TagInput label="Skills" id="tags" values={values.tags} desc="Separate skils with commas"/>
                        <TextBox label="Description" desc="Each line break will be bulleted separately" id="description"/>
                    </Form>)}
                </Formik>
            </FormModal>)
        }
        </ModalConsumer>
    );
}

export default ExperienceModal;