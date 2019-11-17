import React, { useState } from 'react';
import FormModal from '../FormModal';
import TextField from '../TextField';
import { ModalContext } from '../ModalProvider/ModalProvider';
import SelectField from '../SelectField/SelectField';
import CheckField from '../CheckField/CheckField';

const ModalConsumer = ModalContext.Consumer;

function useInput(name, id = name) {
    const [value, setValue] = useState("");
    const input = <TextField label={name} value={value} id={id} inline={true} handleChange={e => setValue(e.target.value)} />
    return [value, input];
}

function useSelect(name, id = name) {
    const [value, setValue] = useState("");
    let months = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const input = <SelectField name={name} value={value} id={id} handleChange={e => setValue(e.target.value)} options={months}/>
    return [value, input];
}

function useCheck(desc) {
    const [value, setValue] = useState(false);
    const input = <CheckField desc={desc} value={value} handleChange={e => setValue(e.target.checked)} />
    return [value, input];
}

let ExperienceModal = ({edit}) => {
    const [company, companyInput] = useInput("Company name");
    const [title, titleInput] = useInput("Title");
    const [startMonth, startMonthInput] = useSelect("Start date");
    const [startYear, startYearInput] = useInput("Year", "start-year");
    const [endMonth, endMonthInput] = useSelect("End date");
    const [endYear, endYearInput] = useInput("Year", "end-year");
    const [current, currentInput] = useCheck("I'm currently working here");

    return (
        <ModalConsumer>
        {({isOpen}) =>
            (<FormModal title={(edit ? "Edit" : "Add") + " Experience"} showModal={isOpen} loading={false} enabled={true}>
                <div className="form-row">
                    {companyInput}
                    {titleInput}
                </div>
                <div className="form-row">
                    {startMonthInput}
                    {startYearInput}
                    <div className="form-divider"/>
                    {endMonthInput}
                    {endYearInput}
                </div>
                <div className="form-row">
                {currentInput}
                </div>
            </FormModal>)
        }
        </ModalConsumer>
    );
}

export default ExperienceModal;