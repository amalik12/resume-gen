import React from 'react'
import './ProfileInfo.css'
import EditButton from '../EditButton'
import { ModalContext } from '../ModalProvider/ModalProvider'
import ProfileModal from '../ProfileModal/ProfileModal';

const ModalConsumer = ModalContext.Consumer;

let ProfileInfo = (props) => {
    return (
        <ModalConsumer>
            {({ showModal }) => (
                <div className="ProfileInfo">
                    <div className="profile-name-container">
                        <h2 className="profile-name">{props.name}</h2>
                        <EditButton className="profile-edit-button" onClick={() => showModal(ProfileModal, { initial: props })} />
                    </div>
                    <div className="profile-links">
                        <div className={"profile-item" + (props.website ? "" : " disabled")}><i className={"profile-item-icon fas fa-globe-americas"}/>{props.website || "Personal site"}</div>
                        <div className={"profile-item" + (props.email ? "" : " disabled")}><i className="profile-item-icon fas fa-envelope"/>{props.email || "Email address"}</div>
                        <div className={"profile-item" + (props.location ? "" : " disabled")}><i className="profile-item-icon fas fa-map-marker-alt"/>{props.location || "Current location"}</div>
                        <div className={"profile-item" + (props.github ? "" : " disabled")}><i className="profile-item-icon fab fa-github"/>{props.github || "Github"}</div>
                    </div>
                </div>
            )}
        </ModalConsumer>
    )
}

export default ProfileInfo