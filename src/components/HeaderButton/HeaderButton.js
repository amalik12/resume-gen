import React, { useRef, useEffect, useState } from "react";
import './HeaderButton.css'
import ProfileDropdown from "../ProfileDropdown";

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

let HeaderButton = ({ name, children }) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, open, setOpen);
    return (
        <div ref={wrapperRef} className="header-button-container">
            <div  className="HeaderButton" onClick={e => setOpen(!open)}>
                <span className="header-button-text">{name}</span>
            </div>
            {open && <ProfileDropdown items={['Experience', 'Education', 'Projects']} />}
        </div>
    )
}

export default HeaderButton