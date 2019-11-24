import React, { useState } from 'react';
import FormModal from '../FormModal';
import TextField from '../TextField';
import { ModalContext } from '../ModalProvider/ModalProvider';
import SelectField from '../SelectField';
import CheckField from '../CheckField';
import TagInput from '../TagInput';
import TextBox from '../TextBox';

const ModalConsumer = ModalContext.Consumer;

function useInput(name, id, validation = undefined, number = false, disabled = false) {
    const [value, setValue] = useState("");
    const input = <TextField validation={validation} label={name} number={number} value={value} id={id} inline={true} disabled={disabled} handleChange={e => setValue(e.target.value)} />
    return [value, input];
}

function useSelect(name, id, validation = undefined, disabled = false) {
    const [value, setValue] = useState("");
    let months = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const input = <SelectField validation={validation} name={name} value={value} id={id} disabled={disabled} handleChange={e => setValue(e.target.value)} options={months}/>
    return [value, input];
}

function useCheck(desc, id, validation = undefined) {
    const [value, setValue] = useState(false);
    const input = <CheckField validation={validation} desc={desc} id={id} value={value} handleChange={e => setValue(e.target.checked)} />
    return [value, input];
}

let ExperienceModal = ({edit}) => {
    const currentYear = new Date().getFullYear()
    
    const [company, companyInput] = useInput("Company name", "company", { required: true });
    const [title, titleInput] = useInput("Title", "title", { required: true });
    const [startMonth, startMonthInput] = useSelect("Start date", "start-date", { required: true });
    const [startYear, startYearInput] = useInput("Year", "start-year", { required: true, min: 1900, max: currentYear }, true);
    const [current, currentInput] = useCheck("I'm currently working here", "current");
    const [endMonth, endMonthInput] = useSelect("End date", "end-date", { required: true }, current);
    const [endYear, endYearInput] = useInput("Year", "end-year", { required: true, min: Math.max(1900, startYear), max: currentYear }, true, current);
    
    const [tags, setTags] = useState([])
    const [description, setDesc] = useState("")
    
    return (
        <ModalConsumer>
        {({isOpen}) =>
            (<form><FormModal title={(edit ? "Edit" : "Add") + " Experience"} showModal={isOpen} loading={false} delete={edit} enabled={true}>
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
                <TagInput tags={tags} desc="Separate skils with commas" addTag={(tag) => setTags([...tags, tag])} popTag={(index) => {let newArray = [...tags]; newArray.splice(index, 1); setTags(newArray)}}/>
                <TextBox label="Description" desc="Each line break will be bulleted separately" value={description} id="description" area={true} handleChange={e => setDesc(e.target.value)} />
            </FormModal></form>)
        }
        </ModalConsumer>
    );
}

export default ExperienceModal;