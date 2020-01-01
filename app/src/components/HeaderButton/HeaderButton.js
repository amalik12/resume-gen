import React, { useRef, useEffect, useState } from "react";
import './HeaderButton.css'
import ProfileDropdown from "../ProfileDropdown";
import { ModalContext } from "../ModalProvider/ModalProvider";
import ExperienceModal from "../ExperienceModal";
import EducationModal from "../EducationModal";
import ProjectsModal from "../ProjectsModal/ProjectsModal";

function useOutsideClick(ref, open, setOpen) {
    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, setOpen, ref]);
}

const ModalConsumer = ModalContext.Consumer;

let HeaderButton = ({ name, setPostions }) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, open, setOpen);
    return (
        <ModalConsumer>
        { ({showModal}) => (<div ref={wrapperRef} className="header-button-container">
            <div  className="HeaderButton" onClick={e => setOpen(!open)}>
                <span className="header-button-text">{name}</span>
            </div>
            {open && <ProfileDropdown items={[['Experience', ExperienceModal, setPostions], ['Education', EducationModal, undefined], ['Projects', ProjectsModal, undefined]]} select={showModal} setOpen={setOpen}/>}
        </div>)}
        </ModalConsumer>
    )
}

export default HeaderButton